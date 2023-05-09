import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";
import { useState } from "react";

const CheckoutForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [completed, setCompleted] = useState(false);

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setIsLoading(true);

      const cardElement = elements.getElement(CardElement);
      const stripeResponse = await stripe.createToken(cardElement, {
        name: "id acheteur",
      });
      const stripeToken = stripeResponse.token.id;
      const response = await axios.post(
        "https://site--backend-vinted-project--qq6svdx7d7wt.code.run/payment",
        { stripeToken: stripeToken }
      );
      console.log(response);
      if (response.data === "succeeded") {
        setIsLoading(false);
        setCompleted(true);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>Formulaire de paiement</h1>
      <CardElement />
      {completed ? (
        <p>Paiement validé</p>
      ) : (
        <button type="submit" disabled={isLoading}>
          Pay
        </button>
      )}
    </form>
  );
};

export default CheckoutForm;
