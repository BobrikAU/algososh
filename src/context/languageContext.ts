import { createContext } from "react";
import { languages } from "../constants/language";

export type UsedLanguageContextType = (typeof languages)[number];
export const UsedLanguageContext = createContext<UsedLanguageContextType>("DE");
