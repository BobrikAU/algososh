import React, { useState, useContext } from "react";
import { nanoid } from "nanoid";
import { languages } from "../../constants/language";
import { UsedLanguageContext } from "../../context/languageContext";
import type { UsedLanguageContextType } from "../../context/languageContext";

import styles from "./languages-switch.module.css";

interface LanguagesSwitchProps {
  changeLanguage: React.Dispatch<React.SetStateAction<UsedLanguageContextType>>;
  extraClass?: string;
}

export const LanguagesSwitch: React.FC<LanguagesSwitchProps> = ({
  changeLanguage,
  extraClass,
}) => {
  const [openMenu, setOpenMenu] = useState(false);
  const usedLanguage = useContext(UsedLanguageContext);
  const heightLineInList = 20;
  const otherLanguagesList = languages
    .filter((lang) => !(lang === usedLanguage))
    .map((lang) => {
      return (
        <li
          className={styles.languageItem}
          style={{ height: heightLineInList + "px" }}
          key={nanoid()}
        >
          <button
            type="button"
            className={styles.buttonChooseLanguage}
            onClick={(e) => {
              let choosedLanguage = e.currentTarget
                .textContent as UsedLanguageContextType;
              setOpenMenu(false);
              setTimeout(() => {
                changeLanguage(
                  languages.includes(choosedLanguage) ? choosedLanguage : "DE"
                );
              }, 400);
            }}
          >
            {lang}
          </button>
        </li>
      );
    });
  return (
    <menu className={`${styles.languageMenu} ${extraClass}`}>
      <button
        type="button"
        className={`${styles.buttonOpenMenu} ${
          !openMenu ? styles.buttonOpenMenu_notActive : ""
        }`}
        onClick={() => {
          setOpenMenu(!openMenu);
        }}
      >
        {usedLanguage.substring(0, 3).toUpperCase()}
      </button>
      <ul
        className={styles.listOtherLanguage}
        style={{
          height: openMenu
            ? otherLanguagesList.length * heightLineInList + "px"
            : "0px",
          transition: "height 0.4s",
        }}
      >
        {otherLanguagesList}
      </ul>
    </menu>
  );
};
