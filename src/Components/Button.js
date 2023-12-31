import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

let STYLES = ["btn--primary", "btn--outline"];
let SIZES = ["btn--medium", "btn--large"];
export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  let checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  let checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to="/sign-up" className="btn-mobile">
      <button
        className={`btn ${checkButtonSize} ${checkButtonStyle}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
