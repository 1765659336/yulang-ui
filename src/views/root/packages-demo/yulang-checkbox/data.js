export const codeStr = `
<yulang-checkbox
  v-model="isCheckout"
  label="复选框"
  :disabled="false"
/>
{{ isCheckout }}
<yulang-button @click="btn">按钮</yulang-button>

<script>
export default {
  data() {
    return {
      isCheckout: false,
    };
  },
  methods: {
    btn() {
      this.isCheckout = !this.isCheckout;
    },
  },
}
</script>
`