import React, { useState, useEffect } from "react";

function App() {
  const [cardNumber, setCardNumber] = useState("");
  const [isValid, setIsValid] = useState(null);

  useEffect(() => {
    const digits = cardNumber.split("").map(Number);
    const reversedDigits = digits.reverse();
    let sum = 0;
    for (let i = 0; i < reversedDigits.length; i++) {
      let digit = reversedDigits[i];
      if (i % 2 !== 0) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }
      sum += digit;
    }
    setIsValid(sum % 10 === 0);
  }, [cardNumber]);

  return (
    <form>
      <label>
        Credit Card Number:
        <input
          type="text"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
        />
      </label>
      {isValid === null ? (
        <p>Please enter a card number</p>
      ) : (
        <p>Card number is {isValid ? "valid" : "invalid"}</p>
      )}
    </form>
  );
}

export default App;
