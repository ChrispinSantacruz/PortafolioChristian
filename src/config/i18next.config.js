import i18n, { init } from "i18next";
import Backend from "i18next-http-backend0"
import { initReactI18next } from "react-i18next";

i18n.use(Backend). use(initReactI18next).init({
    fallbackLng: "en",
});
    