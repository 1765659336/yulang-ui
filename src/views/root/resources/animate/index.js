const model = require.context("./components", true, /\.vue$/);
let components = {};
let animateClassArrLeftShow = []
let animateClassArrLeftLeave = []
let animateClassArrRightShow = []
let animateClassArrRightLeave = []
let animateClassArrTopShow = []
let animateClassArrTopLeave = []
let animateClassArrBottomShow = []
let animateClassArrBottomLeave = []
let animateClassArrMiddle = []
let animateClassArrXAxis = []
let animateClassArrYAxis = []

export const AnimateClassArr = model.keys().map((item) => {
  let comp = model(item);
  components[comp.default.name] = comp.default;

  let itemCompoent = {
    title: comp.default.data().title,
    value: comp.default.name,
    copy: "yulang-animate " + comp.default.name,
  };

  if (comp.default.data().attribute && ['left', 'show'].every(item => comp.default.data().attribute.includes(item))) {
    animateClassArrLeftShow.push(itemCompoent)
  }
  if (comp.default.data().attribute && ['left', 'leave'].every(item => comp.default.data().attribute.includes(item))) {
    animateClassArrLeftLeave.push(itemCompoent)
  }
  if (comp.default.data().attribute && ['right', 'show'].every(item => comp.default.data().attribute.includes(item))) {
    animateClassArrRightShow.push(itemCompoent)
  }
  if (comp.default.data().attribute && ['right', 'leave'].every(item => comp.default.data().attribute.includes(item))) {
    animateClassArrRightLeave.push(itemCompoent)
  }
  if (comp.default.data().attribute && ['top', 'show'].every(item => comp.default.data().attribute.includes(item))) {
    animateClassArrTopShow.push(itemCompoent)
  }
  if (comp.default.data().attribute && ['top', 'leave'].every(item => comp.default.data().attribute.includes(item))) {
    animateClassArrTopLeave.push(itemCompoent)
  }
  if (comp.default.data().attribute && ['bottom', 'show'].every(item => comp.default.data().attribute.includes(item))) {
    animateClassArrBottomShow.push(itemCompoent)
  }
  if (comp.default.data().attribute && ['bottom', 'leave'].every(item => comp.default.data().attribute.includes(item))) {
    animateClassArrBottomLeave.push(itemCompoent)
  }
  if (comp.default.data().attribute && ['middle'].every(item => comp.default.data().attribute.includes(item))) {
    animateClassArrMiddle.push(itemCompoent)
  }
  if (comp.default.data().attribute && ['X-axis'].every(item => comp.default.data().attribute.includes(item))) {
    animateClassArrXAxis.push(itemCompoent)
  }
  if (comp.default.data().attribute && ['Y-axis'].every(item => comp.default.data().attribute.includes(item))) {
    animateClassArrYAxis.push(itemCompoent)
  }
  // if (comp.default.data().attribute && ['left'].every(item => comp.default.data().attribute.includes(item))) {
  //   animateClassArrLeft.push(itemCompoent)
  // }
  return itemCompoent
});



export const Components = components;
export const AnimateClassArrLeftShow = animateClassArrLeftShow
export const AnimateClassArrLeftLeave = animateClassArrLeftLeave
export const AnimateClassArrRightShow = animateClassArrRightShow
export const AnimateClassArrRightLeave = animateClassArrRightLeave
export const AnimateClassArrTopShow = animateClassArrTopShow
export const AnimateClassArrTopLeave = animateClassArrTopLeave
export const AnimateClassArrBottomShow = animateClassArrBottomShow
export const AnimateClassArrBottomLeave = animateClassArrBottomLeave
export const AnimateClassArrMiddle = animateClassArrMiddle
export const AnimateClassArrXAxis = animateClassArrXAxis
export const AnimateClassArrYAxis = animateClassArrYAxis
// export const AnimateClassArrRight = animateClassArrRight
// export const AnimateClassArrLeft = animateClassArrLeft