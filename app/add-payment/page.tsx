import { AddPaymentForm } from "../src/features/add-payment/add-payment-form.component";
import { getCategories } from "../src/firebase/firebase-get-categories";

const AddPaymentPage = async () => {
  const categories = await getCategories();

  return (
    <section>
      <AddPaymentForm categories={categories} />
    </section>
  );
};

export default AddPaymentPage;
