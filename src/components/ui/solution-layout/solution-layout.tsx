import React, { useContext } from "react";
import { ReturnButton } from "../return-button/return-button";
import { Link } from "react-router-dom";
import { LanguagesSwitch } from "../../languages-switch/languages-switch";
import styles from "./solution-layout.module.css";
import type { UsedLanguageContextType } from "../../../context/languageContext";
import { text } from "../../../constants/text";
import { UsedLanguageContext } from "../../../context/languageContext";

interface SolutionLayoutProps {
  title: string;
  extraClass?: string;
  changeLanguage: React.Dispatch<React.SetStateAction<UsedLanguageContextType>>;
}

export const SolutionLayout: React.FC<SolutionLayoutProps> = ({
  extraClass = "",
  title,
  children,
  changeLanguage,
}) => {
  const lang = useContext(UsedLanguageContext);
  return (
    <main className={`${styles.content} ${extraClass}`}>
      <div className={styles.titleBox}>
        <h1 className={`text text_type_h2 text_color_h1 ${styles.title}`}>
          {text.ui.solutionLayout.title[lang]}
        </h1>
        <span
          className={`text text_type_fibonacci text_color_secondary ${styles.subtitle}`}
        >
          {text.ui.solutionLayout.subtitle[lang]}
        </span>
      </div>
      <LanguagesSwitch
        changeLanguage={changeLanguage}
        extraClass={styles.languages_switch}
      ></LanguagesSwitch>
      <div className={styles.contentCard}>
        <Link className={styles.link} to="/">
          <ReturnButton extraClass={styles.returnButton} />
        </Link>
        <h3 className={`text text_type_h3 text_color_h3 ${styles.cardTitle}`}>
          {title}
        </h3>
        {children}
      </div>
      <p
        className={`text text_type_column text_color_input mt-14 ${styles.copyright}`}
      >
        {text.ui.solutionLayout.copyright[lang]}
      </p>
    </main>
  );
};
