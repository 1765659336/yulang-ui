import { positionArr } from "@/packages/constant";

// 生成唯一标识
export function uuid() {
  const hexDigits = "0123456789abcdef";
  let str = [];
  for (var i = 0; i < 36; i++) {
    str[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
  }
  return str.join("") + new Date().getTime();
}

// 递归修改数据
/* 
@data:数据源
@childrenName:子级属性字段
@key:待修改的字段
@value:待修改的值
*/
export function recursion(data, childrenName, key, value) {
  if (data[childrenName]) {
    data[childrenName] = data[childrenName].map((item) => {
      return recursion(item, childrenName, key, value);
    });
  }
  data[key] = value;
  return data;
}

// 深拷贝
export const deepCloneObj = (obj) => {
  let clone;
  // 判断 obj 是否为数组
  if (Array.isArray(obj)) {
    clone = [];
  } else {
    clone = {};
  }
  for (let i in obj) {
    // 如果为对象则递归更进一层去拷贝
    if (typeof obj[i] == "object" && obj[i] != null) {
      clone[i] = deepCloneObj(obj[i]);
    } else {
      clone[i] = obj[i];
    }
  }
  return clone;
};

const lifeHooksInit = [
  "beforeCreate",
  "created",
  "beforeMount",
  "mounted",
  "beforeUpdate",
  "updated",
  "beforeDestroy",
  "destroyed",
];

// 合并Vue类参数
export function mergeVueParameter(...args) {
  return {
    name: args.find((item) => item.name)?.name,
    data() {
      return args.reduce((acc, cur) => {
        // 判断是一个函数工具函数
        if (cur && cur.data) {
          // 同名处理
          return { ...acc, ...cur.data() };
        } else {
          return acc;
        }
      }, {});
    },
    ...args.reduce((acc, cur) => {
      lifeHooksInit.forEach((item) => {
        if (cur && cur[item]) {
          acc[item] = () => {
            acc[item]();
            cur[item]();
          };
        }
      });
    }, {}),
    ...args.reduce(
      (acc, cur) => {
        for (const key in acc) {
          if (Object.hasOwnProperty.call(acc, key)) {
            if (cur && cur[key]) {
              acc[key] = { ...acc[key], ...cur[key] };
            }
          }
        }
        return acc;
      },
      { props: {}, methods: {}, computed: {} }
    ),
  };
}

// 给dom添加长按且回调事件
export const longClick = function (el, callback) {
  let timer;
  el.addEventListener("mousedown", (e) => {
    const timeStart = new Date().getTime(); //获取鼠标按下时的时间
    timer = setInterval(function () //setInterval会每100毫秒执行一次
    {
      const timeEnd = new Date().getTime(); //也就是每100毫秒获取一次时间
      //如果此时检测到的时间与第一次获取的时间差有1000毫秒
      if (timeEnd - timeStart > 300) {
        clearInterval(timer); //便不再继续重复此函数 （clearInterval取消周期性执行）
        callback(e, "down"); // 执行外部callback
      }
    }, 100);
  });
  el.addEventListener("mouseup", (e) => {
    clearInterval(timer);
    callback(e, "up"); // 执行外部callback
  });
};

// 判断弹出的dom应该的位置
/* 
  defaultPosition : 校验位置
  triggerDom : 触发的dom
  contentDom : 弹出的dom
  offsetX : 水平偏移量
  offsetY : 垂直偏移量
*/

// 当前位置放不下的回调
const negateFn = function (
  defaultPosition,
  triggerDom,
  contentDom,
  offsetX,
  offsetY
) {
  const index = positionArr.findIndex(defaultPosition) + 1;
  return getPosition(
    positionArr[index] ?? positionArr[0],
    triggerDom,
    contentDom,
    offsetX,
    offsetY
  );
};

// --------------------------位置校验函数
const judgmentBottom = function (triggerDom, contentDom, offsetX, offsetY) {
  const {
    right: triggerDomRight,
    left: triggerDomLeft,
    bottom: triggerDomBottom,
  } = triggerDom.getBoundingClientRect();
  // 判断水平方向是否可以放下
  if (
    2 * triggerDomRight + triggerDom.clientWidth < contentDom.clientWidth ||
    2 * triggerDomLeft + triggerDom.clientWidth < contentDom.clientWidth
  ) {
    return false;
  }
  // 判断垂直方向是否可以放下
  if (triggerDomBottom < contentDom.clientHeight + offsetY) {
    return false;
  }
  return true;
};

const judgmentBottomStart = function (
  triggerDom,
  contentDom,
  offsetX,
  offsetY
) {
  const { right: triggerDomRight, bottom: triggerDomBottom } =
    triggerDom.getBoundingClientRect();
  // 判断水平方向是否可以放下
  if (triggerDom.clientWidth + triggerDomRight < contentDom.clientWidth) {
    return false;
  }
  // 判断垂直方向是否可以放下
  if (triggerDomBottom < contentDom.clientHeight + offsetY) {
    return false;
  }
  return true;
};

const judgmentLeftEnd = function (triggerDom, contentDom, offsetX) {
  const { top: triggerDomTop, left: triggerDomLeft } =
    triggerDom.getBoundingClientRect();
  // 判断水平方向是否可以放下
  if (triggerDomLeft < contentDom.clientWidth + offsetX) {
    return false;
  }
  // 判断垂直方向是否可以放下
  if (triggerDom.clientHeight + triggerDomTop < contentDom.clientHeight) {
    return false;
  }
  return true;
};
const judgmentLeft = function (triggerDom, contentDom, offsetX) {
  const {
    top: triggerDomTop,
    bottom: triggerDomBottom,
    left: triggerDomLeft,
  } = triggerDom.getBoundingClientRect();
  // 判断水平方向是否可以放下
  if (triggerDomLeft < contentDom.clientWidth + offsetX) {
    return false;
  }
  // 判断垂直方向是否可以放下
  if (
    triggerDom.clientHeight + 2 * triggerDomBottom < contentDom.clientHeight ||
    triggerDom.clientHeight + 2 * triggerDomTop < contentDom.clientHeight
  ) {
    return false;
  }
  return true;
};
const judgmentLeftStart = function (triggerDom, contentDom, offsetX) {
  const { bottom: triggerDomBottom, left: triggerDomLeft } =
    triggerDom.getBoundingClientRect();
  // 判断水平方向是否可以放下
  if (triggerDomLeft < contentDom.clientWidth + offsetX) {
    return false;
  }
  // 判断垂直方向是否可以放下
  if (triggerDom.clientHeight + triggerDomBottom < contentDom.clientHeight) {
    return false;
  }
  return true;
};
const judgmentTopStart = function (triggerDom, contentDom, offsetX, offsetY) {
  const { right: triggerDomRight, top: triggerDomTop } =
    triggerDom.getBoundingClientRect();
  // 判断水平方向是否可以放下
  if (triggerDom.clientWidth + triggerDomRight < contentDom.clientWidth) {
    return false;
  }
  // 判断垂直方向是否可以放下
  if (triggerDomTop < contentDom.clientHeight + offsetY) {
    return false;
  }
  return true;
};
const judgmentTop = function (triggerDom, contentDom, offsetX, offsetY) {
  const {
    right: triggerDomRight,
    left: triggerDomLeft,
    top: triggerDomTop,
  } = triggerDom.getBoundingClientRect();
  // 判断水平方向是否可以放下
  if (
    2 * triggerDomRight + triggerDom.clientWidth < contentDom.clientWidth ||
    2 * triggerDomLeft + triggerDom.clientWidth < contentDom.clientWidth
  ) {
    return false;
  }
  // 判断垂直方向是否可以放下
  if (triggerDomTop < contentDom.clientHeight + offsetY) {
    return false;
  }
  return true;
};

const judgmentTopEnd = function (triggerDom, contentDom, offsetX, offsetY) {
  const { right: triggerDomRight, top: triggerDomTop } =
    triggerDom.getBoundingClientRect();
  // 判断水平方向是否可以放下
  if (triggerDom.clientWidth + triggerDomRight < contentDom.clientWidth) {
    return false;
  }
  // 判断垂直方向是否可以放下
  if (triggerDomTop < contentDom.clientHeight + offsetY) {
    return false;
  }
  return true;
};

const judgmentRightStart = function (triggerDom, contentDom, offsetX) {
  const { bottom: triggerDomBottom, right: triggerDomRight } =
    triggerDom.getBoundingClientRect();
  // 判断水平方向是否可以放下
  if (triggerDomRight < contentDom.clientWidth + offsetX) {
    return false;
  }
  // 判断垂直方向是否可以放下
  if (triggerDom.clientHeight + triggerDomBottom < contentDom.clientHeight) {
    return false;
  }
  return true;
};

const judgmentRight = function (triggerDom, contentDom, offsetX) {
  const {
    top: triggerDomTop,
    bottom: triggerDomBottom,
    right: triggerDomRight,
  } = triggerDom.getBoundingClientRect();
  // 判断水平方向是否可以放下
  if (triggerDomRight < contentDom.clientWidth + offsetX) {
    return false;
  }
  // 判断垂直方向是否可以放下
  if (
    triggerDom.clientHeight + 2 * triggerDomBottom < contentDom.clientHeight ||
    triggerDom.clientHeight + 2 * triggerDomTop < contentDom.clientHeight
  ) {
    return false;
  }
  return true;
};

const judgmentRightEnd = function (triggerDom, contentDom, offsetX) {
  const { top: triggerDomTop, right: triggerDomRight } =
    triggerDom.getBoundingClientRect();
  // 判断水平方向是否可以放下
  if (triggerDomRight < contentDom.clientWidth + offsetX) {
    return false;
  }
  // 判断垂直方向是否可以放下
  if (triggerDom.clientHeight + triggerDomTop < contentDom.clientHeight) {
    return false;
  }
  return true;
};

const judgmentBottomEnd = function (triggerDom, contentDom, offsetX, offsetY) {
  const { right: triggerDomRight, bottom: triggerDomBottom } =
    triggerDom.getBoundingClientRect();
  // 判断水平方向是否可以放下
  if (triggerDom.clientWidth + triggerDomRight < contentDom.clientWidth) {
    return false;
  }
  // 判断垂直方向是否可以放下
  if (triggerDomBottom < contentDom.clientHeight + offsetY) {
    return false;
  }
  return true;
};

// -----------------------------------------

// 校验对象
const judgmentObj = {
  bottom: judgmentBottom,
  ["bottom-start"]: judgmentBottomStart,
  ["left-end"]: judgmentLeftEnd,
  left: judgmentLeft,
  ["left-start"]: judgmentLeftStart,
  ["top-start"]: judgmentTopStart,
  top: judgmentTop,
  ["top-end"]: judgmentTopEnd,
  ["right-start"]: judgmentRightStart,
  right: judgmentRight,
  ["right-end"]: judgmentRightEnd,
  ["bottom-end"]: judgmentBottomEnd,
};

export const getPosition = function (
  defaultPosition,
  triggerDom,
  contentDom,
  offsetX = 0,
  offsetY = 0,
  checkNumber = 1
) {
  // 如果校验了一个轮回
  if (checkNumber === positionArr.length + 1) {
    // 每个位置都放不下，因此就放在默认第一次传入的位置
    return defaultPosition;
  }
  for (const key in judgmentObj) {
    if (Object.hasOwnProperty.call(judgmentObj, key)) {
      if (defaultPosition === key) {
        if (judgmentObj[key](triggerDom, contentDom, offsetX, offsetY)) {
          return key;
        } else {
          return negateFn(
            defaultPosition,
            triggerDom,
            contentDom,
            offsetX,
            offsetY,
            ++checkNumber
          );
        }
      }
    }
  }
};

// 改变dom的位置
/* 
  fatherDom : 父dom
  triggerDom : 触发dom
  sonDom : 子dom
  position : 位置
*/
export const changePosition = function (
  fatherDom,
  triggerDom,
  sonDom,
  position
) {
  const scrollTop =
    document.documentElement.scrollTop || document.body.scrollTop;
  const scrollLeft =
    document.documentElement.scrollLeft || document.body.scrollLeft;
  switch (position) {
    case "bottom-start":
      {
        fatherDom.style.position = "relative";
        sonDom.style.position = "absolute";
        sonDom.style.top = triggerDom.clientHeight + "px";
        sonDom.style.left = "0px";
        sonDom.style.transform = "translate(0px, 10px)";
      }
      break;
    case "bottom":
      {
        fatherDom.style.position = "relative";
        sonDom.style.position = "absolute";
        sonDom.style.top = triggerDom.clientHeight + "px";
        sonDom.style.left = triggerDom.clientWidth / 2 - scrollLeft + "px";
        sonDom.style.transform = "translate(-50%, 10px)";
      }
      break;
    case "bottom-end":
      {
        fatherDom.style.position = "relative";
        sonDom.style.position = "absolute";
        sonDom.style.top = triggerDom.clientHeight + "px";
        sonDom.style.left = triggerDom.clientWidth - sonDom.clientWidth + "px";
        sonDom.style.transform = "translate(0px, 10px)";
      }
      break;
    case "left-end":
      {
        fatherDom.style.position = "relative";
        sonDom.style.position = "absolute";
        sonDom.style.bottom = "0px";
        sonDom.style.left = -sonDom.clientWidth - scrollLeft + "px";
        sonDom.style.transform = "translate(-10px, 0px)";
      }
      break;
    case "left":
      {
        fatherDom.style.position = "relative";
        sonDom.style.position = "absolute";
        sonDom.style.bottom = triggerDom.clientHeight / 2 + scrollTop + "px";
        sonDom.style.left = -sonDom.clientWidth - scrollLeft + "px";
        sonDom.style.transform = "translate(-10px, 50%)";
      }
      break;
    case "left-start":
      {
        fatherDom.style.position = "relative";
        sonDom.style.position = "absolute";
        sonDom.style.top = "0px";
        sonDom.style.left = -sonDom.clientWidth - scrollLeft + "px";
        sonDom.style.transform = "translate(-10px, 0px)";
      }
      break;
    case "top-start":
      {
        fatherDom.style.position = "relative";
        sonDom.style.position = "absolute";
        sonDom.style.bottom = triggerDom.clientHeight + "px";
        sonDom.style.left = "0px";
        sonDom.style.transform = "translate(0px, -10px)";
      }
      break;
    case "top":
      {
        fatherDom.style.position = "relative";
        sonDom.style.position = "absolute";
        sonDom.style.bottom = triggerDom.clientHeight + "px";
        sonDom.style.left = triggerDom.clientWidth / 2 + "px";
        sonDom.style.transform = "translate(-50%, -10px)";
      }
      break;
    case "top-end":
      {
        fatherDom.style.position = "relative";
        sonDom.style.position = "absolute";
        sonDom.style.bottom = triggerDom.clientHeight + "px";
        sonDom.style.left = triggerDom.clientWidth + "px";
        sonDom.style.transform = "translate(-100%, -10px)";
      }
      break;
    case "right-start":
      {
        fatherDom.style.position = "relative";
        sonDom.style.position = "absolute";
        sonDom.style.bottom = triggerDom.clientHeight + scrollTop + "px";
        sonDom.style.left = triggerDom.clientWidth + "px";
        sonDom.style.transform = "translate(10px, 100%)";
      }
      break;
    case "right":
      {
        fatherDom.style.position = "relative";
        sonDom.style.position = "absolute";
        sonDom.style.bottom = triggerDom.clientHeight / 2 + scrollTop + "px";
        sonDom.style.left = triggerDom.clientWidth + "px";
        sonDom.style.transform = "translate(10px, 50%)";
      }
      break;
    case "right-end":
      {
        fatherDom.style.position = "relative";
        sonDom.style.position = "absolute";
        sonDom.style.bottom = scrollTop + "px";
        sonDom.style.left = triggerDom.clientWidth + "px";
        sonDom.style.transform = "translate(10px, 0)";
      }
      break;
  }
};

// 为false校验
/* 
  args : 不包含
*/
export const isFalse = function (value, ...args) {
  // 不校验不包含的值
  for (const key in args) {
    if (Object.hasOwnProperty.call(args, key)) {
      const element = args[key];
      if (value === element) {
        return true;
      }
    }
  }

  return value ? true : false;
};


// 判断是否为数字
export const isRealNum = function (val) {
  // isNaN()函数 把空串 空格 以及NUll 按照0来处理 所以先去除
  if (val === "" || val == null) {
    return false;
  }
  return !isNaN(val)
} 