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
