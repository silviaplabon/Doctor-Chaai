import React, { useMemo, useState } from "react";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement
} from "@stripe/react-stripe-js";
import './SplitCardForm.scss'


// import useResponsiveFontSize from "../../useResponsiveFontSize";

const useOptions = () => {
  // const fontSize = useResponsiveFontSize();
  const options = useMemo(
    () => ({
      style: {
        base: {
          fontSize: "14px",
          color: "#424770",
          letterSpacing: "0.025em",
          backgroundColor: 'white',
          fontFamily: "Source Code Pro, monospace",
          "::placeholder": {
            color: "#aab7c4"
          }
        },
        invalid: {
          color: "#9e2146"
        }
      }
    }),
    []
  );

  return options;
};

const SplitCardForm = ({ handlePayment }) => {
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();
  const [paymentError, setPaymentError] = useState(null)
  const [paymentSuccess, setPaymentSuccess] = useState(null)

  const handleSubmit = async event => {
    event.preventDefault();
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement)
    });
    console.log("[PaymentMethod]", paymentMethod.id);
    if (error) {
      console.log('[error]', error);
      setPaymentSuccess(null);
      setPaymentError(error.message)
    } else {
      setPaymentError(null)
      setPaymentSuccess(paymentMethod.id);
      console.log('[PaymentMethod]', paymentMethod);
      handlePayment(paymentMethod.id)
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-100 mt-0">
      <label className="labelCard col-12 mb-2">
        Card number
        <CardNumberElement
          className="form-control cardNumberStyle   py-2 rounded-pill w-100"
          options={options}
          onReady={() => {
            console.log("CardNumberElement [ready]");
          }}
          onChange={event => {
            console.log("CardNumberElement [change]", event);
          }}
          onBlur={() => {
            console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            console.log("CardNumberElement [focus]");
          }}
        />
      </label>
      <br />
      <div className="row">


        <label className=" labelExp col-6 mb-2">
          Expiration date
          <CardExpiryElement
            className="form-control expStyle rounded-pill px-3 py-2 rounded-pill"
            options={options}
            onReady={() => {
              console.log("CardNumberElement [ready]");
            }}
            onChange={event => {
              console.log("CardNumberElement [change]", event);
            }}
            onBlur={() => {
              console.log("CardNumberElement [blur]");
            }}
            onFocus={() => {
              console.log("CardNumberElement [focus]");
            }}
          />
        </label>

        <label className=" labelCVC col-6 mb-2">
          CVC
          <CardCvcElement
            className="form-control cvcStyle px-3 py-2 rounded-pill"
            options={options}
            onReady={() => {
              console.log("CardNumberElement [ready]");
            }}
            onChange={event => {
              console.log("CardNumberElement [change]", event);
            }}
            onBlur={() => {
              console.log("CardNumberElement [blur]");
            }}
            onFocus={() => {
              console.log("CardNumberElement [focus]");
            }}
          />
        </label>
      </div>
      <br />
      <div className="d-flex justify-content-end">
        <button type="submit" className="my-4 appointmentSubmit rounded-pill px-4" disabled={!stripe}>
          Confirm Booking
        </button>
      </div>

    </form>
  );
};

export default SplitCardForm;
