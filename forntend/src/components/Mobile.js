import React, { useState } from 'react';

export default function Mobile() {
  const [charage, setCharge] = useState(100);
  const cargeHandler = () => {
    if (charage > 0) {
      setCharge(charage - 10);
    }
  };
  return (
    <div>
      <h1>Counting Mobile charage</h1>
      <button onClick={cargeHandler}>Charge:{charage}</button>
    </div>
  );
}
