import React, { useContext } from "react";
import { nanoid } from "nanoid";
import styles from "./radio-input.module.css";
import { text } from "../../../constants/text";
import { UsedLanguageContext } from "../../../context/languageContext";

interface RadioProps extends React.HTMLProps<HTMLInputElement> {
  label?: string;
  extraClass?: string;
}

export const RadioInput: React.FC<RadioProps> = ({
  label,
  extraClass = "",
  ...rest
}) => {
  const id = nanoid();
  const lang = useContext(UsedLanguageContext);
  if (!label) {
    label = text.ui.radioInput.label[lang];
  }

  return (
    <div className={`${styles.content} ${extraClass}`}>
      <input className={styles.input} type="radio" id={id} {...rest} />
      <label className={`text text_type_button ${styles.label}`} htmlFor={id}>
        {label}
      </label>
    </div>
  );
};
