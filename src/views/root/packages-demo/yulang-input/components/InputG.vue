<template>
  <yulang-input
    type="textarea"
    :rows="2"
    placeholder="请输入内容"
    v-model="textarea"
  >
  </yulang-input>
</template>

<script>
export default {
  data() {
    return {
      textarea: "",
    };
  },
};
</script>
