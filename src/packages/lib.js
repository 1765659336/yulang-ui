// 生成唯一标识
export function uuid() {
  const hexDigits = "0123456789abcdef";
  let str = [];
  for (var i = 0; i < 36; i++) {
    str[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
  }
  return str.join("") + new Date().getTime();
}
