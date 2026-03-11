import React, { useContext } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { LanguagesSwitch } from "../languages-switch/languages-switch";
import { UsedLanguageContext } from "../../context/languageContext";
import type { UsedLanguageContextType } from "../../context/languageContext";
import { text } from "../../constants/text";

import styles from "./main-page.module.css";

interface MainPageProps {
  extraClass?: string;
  changeLanguage: React.Dispatch<React.SetStateAction<UsedLanguageContextType>>;
}

export const MainPage: React.FC<MainPageProps> = ({
  extraClass = "",
  changeLanguage,
}) => {
  const lang = useContext(UsedLanguageContext);
  return (
    <main className={`${styles.content} ${extraClass}`}>
      <div className={styles.title_box}>
        <h1 className={`text text_type_h1 text_color_h1 ${styles.title}`}>
          {text.mainPage.title[lang]}
        </h1>
        <p
          className={`text text_type_fibonacci text_color_secondary ${styles.fibonacci_title}`}
        >
          {text.mainPage.fibonacci_title[lang]}
        </p>
      </div>
      <LanguagesSwitch
        changeLanguage={changeLanguage}
        extraClass={styles.languages_switch}
      />
      <div className={styles.cards_box}>
        <Link className={styles.link} to="/recursion">
          <div className={`${styles.card} ${styles[`string_${lang}`]}`} />
        </Link>
        <Link className={styles.link} to="/fibonacci">
          <div className={`${styles.card} ${styles[`fibonacci_${lang}`]}`} />
        </Link>
        <Link className={styles.link} to="/sorting">
          <div className={`${styles.card} ${styles[`arr_${lang}`]}`} />
        </Link>
        <Link className={styles.link} to="/stack">
          <div className={`${styles.card} ${styles[`stack_${lang}`]}`} />
        </Link>
        <Link className={styles.link} to="/queue">
          <div className={`${styles.card} ${styles[`queue_${lang}`]}`} />
        </Link>
        <Link className={styles.link} to="/list">
          <div className={`${styles.card} ${styles[`list_${lang}`]}`} />
        </Link>
      </div>
      <Marquee className={styles.ticker} gradient={false} speed={200}>
        <p
          className={`text text_type_ticker text_color_secondary ${styles.ticker_text}`}
        >
          {text.mainPage.ticker_text[lang]}
        </p>
        <div className={styles.dot_box}>
          <p className={styles.dot} />
        </div>
      </Marquee>
      <p
        className={`text text_type_column text_color_input mt-14 ${styles.copyright}`}
      >
        {text.mainPage.copyright[lang]}
      </p>
    </main>
  );
};
