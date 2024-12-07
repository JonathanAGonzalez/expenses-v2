"use client";
import { Input } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/select";
import { DateInput } from "@nextui-org/date-input";
import { Button } from "@nextui-org/button";

import { categoriesObjectToSend } from "../src/cloudinary";
import { SubTitle } from "../src/core/components/sub-title.component";

const fields = [
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

const AddPaymentPage = () => {
  return (
    <section>
      <article>
        <SubTitle>Agregar gasto</SubTitle>
        <form action="" className="grid gap-2 pt-2">
          {fields.map(
            ({ id, isRequired, label, type, placeholder, startContent }) => (
              <Input
                key={id}
                isRequired={isRequired}
                label={label}
                placeholder={placeholder}
                size="lg"
                startContent={startContent}
                type={type}
              />
            ),
          )}

          <Select
            isRequired
            label="Categoría"
            placeholder="Eligi la categoría"
            size="lg"
          >
            {categoriesObjectToSend.map((category) => (
              <SelectItem key={category.key}>{category.label}</SelectItem>
            ))}
          </Select>

          <DateInput isRequired className="max-w-sm" label="Fecha" size="lg" />

          <Button
            className="text-brand-black bg-brand-gradient-button"
            size="lg"
          >
            Agregar
          </Button>
        </form>
      </article>
    </section>
  );
};

export default AddPaymentPage;
