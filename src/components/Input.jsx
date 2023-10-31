import React, { useState } from "react";

export const Input = () => {
  const [phone, setPhone] = useState('');
  const handleChange = (e) => {
    setPhone(e.target.value);
  };

  return (
      <input
        type="text"
        name="phone-input"
        value={phone}
        maxLength={10}
        onChange={handleChange}
        style={{
          color: "white",
          border: "none",
          outline: "none",
          background: "none",
        }}
        placeholder="Enter Phone Number"
      />
  );
};
