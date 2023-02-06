export const codeStr = `
<yulang-describe-frame :codeStr="codeStr2">
  <yulang-switch
    v-model="value"
    active-text="按月付费"
    inactive-text="按年付费"
  >
  </yulang-switch>
  <template #tip>
    使用active-text属性与inactive-text属性来设置开关的文字描述。
  </template>
</yulang-describe-frame>

<script>
  export default {
    data() {
      return {
        value: true,
      }
    }
  };
</script>
`

export const codeStr2 = `
<yulang-switch
  v-model="value2"
>
</yulang-switch>
<script>
  export default {
    data() {
      return {
        value2: true
      }
    }
  };
</script>
`