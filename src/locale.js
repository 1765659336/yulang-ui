import Vue from "vue";
import Locale from "./locales/index";
const locales = require.context("./locales", true, /.json$/);
const messages = {};
locales.keys().forEach((file) => {
  const keyArr = file.split("/");
  keyArr.shift();
  messages[keyArr.join(".").replace(/\.json$/g, "")] = locales(file);
});

const locale = new Locale({
  locale: "zh",
  messages,
});

Vue.use(locale);