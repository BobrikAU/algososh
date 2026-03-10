import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { FibonacciPage } from "../fibonacci-page/fibonacci-page";
import { ListPage } from "../list-page/list-page";
import { MainPage } from "../main-page/main-page";
import { QueuePage } from "../queue-page/queue-page";
import { StringComponent } from "../string/string";
import { SortingPage } from "../sorting-page/sorting-page";
import { StackPage } from "../stack-page/stack-page";
import { UsedLanguageContext } from "../../context/languageContext";
import { languages } from "../../constants/language";
import type { UsedLanguageContextType } from "../../context/languageContext";

import style from "./app.module.css";

function App() {
  const [usedLanguage, setUsedLanguage] = useState<UsedLanguageContextType>(
    languages[0]
  );
  return (
    <UsedLanguageContext.Provider value={usedLanguage}>
      <div className={style.app}>
        <BrowserRouter basename="/algososh">
          <Switch>
            <Route path="/" exact>
              <MainPage changeLanguage={setUsedLanguage} />
            </Route>
            <Route path="/recursion">
              <StringComponent changeLanguage={setUsedLanguage} />
            </Route>
            <Route path="/fibonacci">
              <FibonacciPage changeLanguage={setUsedLanguage} />
            </Route>
            <Route path="/sorting">
              <SortingPage changeLanguage={setUsedLanguage} />
            </Route>
            <Route path="/stack">
              <StackPage changeLanguage={setUsedLanguage} />
            </Route>
            <Route path="/queue">
              <QueuePage changeLanguage={setUsedLanguage} />
            </Route>
            <Route path="/list">
              <ListPage changeLanguage={setUsedLanguage} />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </UsedLanguageContext.Provider>
  );
}

export default App;
