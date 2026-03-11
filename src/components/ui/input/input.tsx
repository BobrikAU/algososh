import React, { useContext } from "react";
import styles from "./input.module.css";
import { text } from "../../../constants/text";
import { UsedLanguageContext } from "../../../context/languageContext";

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  placeholder?: string;
  extraClass?: string;
  isLimitText?: boolean;
}

export const Input: React.FC<InputProps> = ({
  placeholder,
  extraClass = "",
  type = "text",
  maxLength,
  max,
  isLimitText = false,
  ...rest
}) => {
  const lang = useContext(UsedLanguageContext);
  if (!placeholder) {
    placeholder = text.ui.input.placeholder[lang];
  }
  const limitText =
    type === "text" && maxLength
      ? text.ui.input.limitText.typeText[lang](maxLength)
      : type !== "text" && max
      ? text.ui.input.limitText.typeNumber[lang](max)
      : "";

  return (
    <div className={`${styles.content} ${extraClass}`}>
      <input
        className={`${styles.input} text text_type_input text_color_input`}
        placeholder={placeholder}
        type={type}
        maxLength={maxLength}
        max={max}
        {...rest}
      />
      {isLimitText && (
        <span
          className={`text text_type_input-lim text_color_input mt-2 ml-8 ${styles.limit}`}
        >
          {limitText}
        </span>
      )}
    </div>
  );
};
