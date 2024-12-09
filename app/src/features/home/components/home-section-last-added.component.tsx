import { CardPaymentSection } from "@/app/src/core/components/card-payment-section.component";
import { Payment } from "@/app/src/firebase/firebase-get-payments";

export const HomeSectionLastAdded = ({ payments }: { payments: Payment[] }) => {
  return <CardPaymentSection items={payments} subTitle="Ultimos agregados" />;
};
