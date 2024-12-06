import { CardPaymentSection } from "@/app/src/core/components/card-payment-section.component";

export const HomeSectionLastAdded = () => {
  return (
    <CardPaymentSection
      items={[
        {
          amount: 320,
          date: "Martes 10 nov",
          label: "Stream",
          title: "Netflix",
          image: "",
          id: "1",
        },
        {
          amount: 320,
          date: "Martes 10 nov",
          label: "Stream",
          title: "Netflix",
          image: "",
          id: "2",
        },
        {
          amount: 320,
          date: "Martes 10 nov",
          label: "Stream",
          title: "Netflix",
          image: "",
          id: "3",
        },
      ]}
      subTitle="Ultimos agregados"
    />
  );
};
