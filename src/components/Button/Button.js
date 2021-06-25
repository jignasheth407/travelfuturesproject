import React from "react";
import Text from "../Text";
import { COLORS } from "../../theme/mainTheme";

const Button = ({
  children,
  variant,
  color,
  textSize,
  onClick,
  isDisable,
  rounded,
}) => {
  return (
    <div>
      <button
        disabled={isDisable}
        onClick={onClick}
        className={`py-1.5 px-6 focus:outline-none w-full rounded-${rounded}`}
        style={{
          backgroundColor: isDisable ? COLORS.gray100 : COLORS[variant],
          color: isDisable ? "#777" : COLORS[color],
        }}
      >
        <Text size={textSize} weight="700" classes="capitalize">
          {children}
        </Text>
      </button>
    </div>
  );
};

export default Button;
