import React, { useContext } from "react";
import styles from "./return-button.module.css";
import { ReturnIcon } from "../icons/return-icon";
import { text } from "../../../constants/text";
import { UsedLanguageContext } from "../../../context/languageContext";

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  type?: "button" | "submit" | "reset";
  extraClass?: string;
}

export const ReturnButton: React.FC<ButtonProps> = ({
  extraClass = "",
  ...rest
}) => {
  const lang = useContext(UsedLanguageContext);
  return (
    <button
      className={`${styles.button} ${extraClass}`}
      type="button"
      {...rest}
    >
      <ReturnIcon />
      <p className="text text_type_button text_color_link ml-4">
        {text.ui.returnButton.text[lang]}
      </p>
    </button>
  );
};
