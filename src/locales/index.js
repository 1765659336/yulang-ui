class Locale {
  constructor(options) {
    this.messages = options.messages;
    this.locale = options.locale;
    this.message = this.messages[this.locale];
  }

  install(Vue) {
    Vue.prototype.$locale = this;
  }

  get gv() {
    return this.getMessageValue;
  }

  get cl() {
    return this.changeLocale;
  }

  //   获取值
  getMessageValue(name) {
    if (typeof name === "string") {
      return this.message[name];
    } else {
      return name.reduce((acc, cur) => acc[cur], this.message);
    }
  }

  //   修改语言
  changeLocale(locale) {
    this.message = this.messages[locale];
    this.locale = locale;
  }
}

export default Locale;
