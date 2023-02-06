export const codeStr = `
<yulang-link
  @clickCallback="clickFun"
  url="https://baidu.com"
>
  文字描述当前窗口跳转
</yulang-link>


<script>
  export default {
    methods: {
      clickFun(e) {
        console.log(e);
      },
    },
  };
</script>
`

export const codeStr2 = `
<yulang-link
  mainColor="green"
  target="_blank"
  url="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a"
>
  文字描述小窗口打开
</yulang-link>
`

export const codeStr3 = `
<yulang-link mainColor="#fc5531" :disabled="disabled" url="https://www.baidu.com">
  禁止点击
</yulang-link>
<yulang-link
  mainColor="rgba(67, 173, 127, .5)"
  disabled.sync="disabled"
  url="https://www.baidu.com"
  >禁止点击v-model</yulang-link
>
`

export const codeStr4 = `
<yulang-link :openUnderline="false" url="https://www.baidu.com">不开启下划线</yulang-link>
`

export const codeStr5 = `
<yulang-link url="https://www.baidu.com">
  <div
    :style="{
      width: '300px',
      height: '300px',
      backgroundColor: 'red',
    }"
  ></div>
</yulang-link>
`