"use client";
import { FormEventHandler, useState } from "react";
import { Input } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/select";
import { Button } from "@nextui-org/button";
import { DatePicker } from "@nextui-org/date-picker";
import { now, getLocalTimeZone } from "@internationalized/date";
import { Spinner } from "@nextui-org/spinner";
import { useRouter } from "next/navigation";

import { SubTitle } from "../../core/components/sub-title.component";
import { setCategories } from "../../firebase/firebase-set-categories";
import { CategoryDocument } from "../../firebase/firebase-get-categories";
import { addDocument } from "../../firebase/firebase-add";
import { db } from "../../firebase/";
import { convertToFirestoreTimestamp } from "../../core/utils/formatDate.util";
import { useNotifications } from "../../store/notification.store";

interface Fields {
  label: string;
  isRequired: boolean;
  id: "name" | "price";
  type: string;
  placeholder: string;
  startContent: JSX.Element | null;
}

const fields: Fields[] = [
  {
    label: "Nombre",
    isRequired: true,
    id: "name",
    type: "text",
    placeholder: "Netflix",
    startContent: null,
  },
  {
    label: "Precio",
    isRequired: true,
    id: "price",
    type: "number",
    placeholder: "123",
    startContent: <p>$</p>,
  },
];

interface StateForm {
  name: string;
  price: string;
  category: string;
  date: any;
}

const validation = (
  value: string,
  isRequired: boolean,
  isNumber: boolean,
): string | null => {
  if (isRequired && !value.trim()) return "Este campo es requerido";
  if (isNumber && !/^[0-9]*$/.test(value)) return "Solo se permiten números";
  if (value.length < 3) return "El nombre debe tener al menos 3 caracteres";

  return null;
};

const initialValuesForm = {
  name: "",
  price: "",
  category: "",
  date: now(getLocalTimeZone()),
};

export const AddPaymentForm = ({
  categories,
}: {
  categories: CategoryDocument[];
}) => {
  const [form, setForm] = useState<StateForm>(initialValuesForm);
  const [selectedValue, setSelectedValue] = useState<Set<string>>(new Set());
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{
    name: string | null;
    price: string | null;
    category: string | null;
  }>({
    name: null,
    price: null,
    category: null,
  });
  const { showModal, hiddenModal } = useNotifications();
  const { push } = useRouter();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    // Validar campos
    const nameError = validation(form.name, true, false);
    const priceError = validation(form.price, true, true);
    const categoryFound = categories.find((category) =>
      selectedValue.has(category.id),
    );
    const categoryError = !categoryFound ? "La categoría es requerida" : null;

    // Set errors
    setErrors({
      name: nameError,
      price: priceError,
      category: categoryError,
    });

    // Si algún campo tiene error, no enviar el formulario
    if (nameError || priceError || categoryError) {
      console.log("Formulario incompleto");

      return;
    }

    try {
      setIsLoading(true);
      // Enviar formulario si todos los campos son correctos
      await addDocument({
        db,
        nameCollection: "payments",
        data: {
          ...form,
          category: categoryFound,
          date: convertToFirestoreTimestamp(form.date),
        },
      });
      showModal();

      setTimeout(() => {
        hiddenModal();
        push("/");
      }, 1500);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
      setSelectedValue(new Set());
      setForm(initialValuesForm);
    }
  };

  const handleChangeError = (id: string, value: string) => {
    const error = validation(value, true, false);

    setErrors((prev) => ({ ...prev, [id]: error }));
  };

  return (
    <article>
      <SubTitle>Agregar gasto</SubTitle>
      <Button onClick={async () => await setCategories()}>
        Set categoriess
      </Button>
      <form className="grid gap-2 pt-2" onSubmit={handleSubmit}>
        {fields.map(({ id, label, type, placeholder, startContent }) => (
          <Input
            key={id}
            errorMessage={errors[id]}
            isInvalid={!!errors[id]}
            label={label}
            placeholder={placeholder}
            size="lg"
            startContent={startContent}
            type={type}
            value={form[id] as string}
            onChange={(e) => {
              setForm((prev) => ({ ...prev, [id]: e.target.value }));
              handleChangeError(id, e.target.value);
            }}
            onValueChange={(value) =>
              setForm((prev) => ({ ...prev, [id]: value }))
            }
          />
        ))}

        <Select
          errorMessage={errors.category}
          isInvalid={!!errors.category}
          label="Categoría"
          placeholder="Elige la categoría"
          selectedKeys={selectedValue}
          size="lg"
          onSelectionChange={(keys) => {
            if (new Set(keys).size > 1) {
              setErrors({
                ...errors,
                category: "Debes seleccionar una categoría",
              });
            } else {
              setSelectedValue(keys as Set<string>);
              setErrors({
                ...errors,
                category: null,
              });
            }
          }}
        >
          {categories.map(({ id, label }) => (
            <SelectItem key={id} value={label}>
              {label}
            </SelectItem>
          ))}
        </Select>

        <DatePicker
          defaultValue={form.date ? form?.date : null}
          label="Fecha"
          size="lg"
        />

        <Button
          spinner
          className="text-brand-black bg-brand-gradient-button"
          isLoading={isLoading}
          size="lg"
          startContent={isLoading ? <Spinner /> : null}
          type="submit"
        >
          Agregar
        </Button>
      </form>
    </article>
  );
};
