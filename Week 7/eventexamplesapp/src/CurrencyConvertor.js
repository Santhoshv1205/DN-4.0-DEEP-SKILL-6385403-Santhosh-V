import React, { useState } from 'react';

function CurrencyConvertor() {
  const [rupees, setRupees] = useState('');
  const [euro, setEuro] = useState('');

  const handleChange = (e) => {
    setRupees(e.target.value);
  };

  const handleSubmit = () => {
    const rate = 90; // ₹90 = €1 (sample conversion rate)
    const result = (rupees / rate).toFixed(2);
    setEuro(result);
  };

  return (
    <div>
      <h2>Currency Converter (INR ➡️ EURO)</h2>
      <input
        type="number"
        placeholder="Enter Rupees"
        value={rupees}
        onChange={handleChange}
      />
      <button onClick={handleSubmit} style={{ marginLeft: "10px" }}>Convert</button>
      {euro && <p>Converted Amount: € {euro}</p>}
    </div>
  );
}

export default CurrencyConvertor;
