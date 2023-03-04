const model = require.context("./components", true, /\.vue$/);
let components = {};
export const AnimateClassArr = model.keys().map((item) => {
  let comp = model(item);
  components[comp.default.name] = comp.default;
  return {
    title: comp.default.data().title,
    value: comp.default.name,
    copy: "yulang-animate " + comp.default.name,
  };
});

export const Components = components;