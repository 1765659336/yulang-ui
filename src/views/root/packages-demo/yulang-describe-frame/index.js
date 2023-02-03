export const codeStr = `
<yulang-switch
  v-model="value"
  active-text="按月付费"
  inactive-text="按年付费"
>
</yulang-switch>
<script>
  export default {
    data() {
      return {
        value: true
      }
    }
  };
</script>
`;