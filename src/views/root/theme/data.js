export const codeStrB1 = `
import { changeDefault } from "yulang-ui";
changeDefault(Vue, {
  themeCssVariable: {
    "--yulang-theme-color--": "#00DF74",
  },
});
`;

export const codeStrB2 = `
const root = document.querySelector(":root");
root.style.setProperty("--yulang-theme-color--", "#00DF74");
`;

export const codeStrB3 = `
:root {
    // 主题色
    --yulang-theme-color--: #87d0ec;
    // 字体颜色
    --yulang-font-color--: #00BB9C;
    // 边框颜色
    --yulang-border-color--: #00BB9C;
    // 边框大小
    --yulang-border-thickness--: 1px;
    // 背景色
    --yulang-background-color--: #2F4858;
}
`;

export const codeStrB4 = `
:root {
    // 主题色
    --yulang-theme-color--: #87d0ec;
    // 字体颜色
    --yulang-font-color--: #00BB9C;
    // 边框颜色
    --yulang-border-color--: #00BB9C;
    // 边框大小
    --yulang-border-thickness--: 1px;
    // 背景色
    --yulang-background-color--: #2F4858;
}
`;

export const codeStrC = `
import { changeDefault } from "yulang-ui";
changeDefault(Vue, {
  size: 'mini'
});
`;

export const codeStrD = `
import { changeDefault } from "yulang-ui";
changeDefault(Vue, {
  zIndex: 4000
});
`;

export const codeStrE = `

`;
