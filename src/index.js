import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from 'react-intl';
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";
import JobsList from "./components/jobsList";
function determineLanguage() {
    let navLanguage = navigator.language || navigator.userLanguage;
    if (navLanguage.includes("es")) {
        return localeEsMessages;
    }
    else if (navLanguage.includes("en")) {
        return localeEnMessages;
    }
}

ReactDOM.render(
    <IntlProvider locale={navigator.language} messages={determineLanguage()}>
        <JobsList />
    </IntlProvider>, document.getElementById("root")
);

