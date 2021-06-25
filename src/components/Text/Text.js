import React from "react";
import { textVariant, textSize, textWeight } from "../../theme/textTheme";

const Text = ({
  size,
  variant,
  weight,
  children,
  isTitle,
  classes,
  capitalize,
}) => {
  return (
    <span
      style={{ fontFamily: "Nunito" }}
      className={`${textVariant[variant]} ${textSize[size]}
      ${textWeight[weight]} ${
        isTitle === true ? ` title-font tracking-widest` : null
      } ${classes} ${capitalize && "capitalize"}`}
    >
      {children}
    </span>
  );
};

export default Text;
