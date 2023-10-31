import React from "react";
import "./Button.css";

export const Button = ({ opacity = 1, disabled=false, text, bgColor, textColor, onClick = () => {} }) => {
  let styles = { opacity: opacity, backgroundColor: bgColor, color: textColor };

  return (
    <button onClick={onClick} style={styles} disabled={disabled}>
      {text}
    </button>
  );
};
