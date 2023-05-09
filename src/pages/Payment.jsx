import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51N5qCYEOLgROgT8X7RsAHfkn02wlrZQ2mGSpj0EGkLXVq4BxlRAgIBfr1TjYKBzRpIbsQFRXMYsAr5amHESPH1lX00OWQ8gTEw"
);

const Payment = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default Payment;
