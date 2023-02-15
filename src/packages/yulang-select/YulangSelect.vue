<template>
  <div class="packages-yulang-select-container">
    <input type="text" readonly>
    <ul>
        <slot></slot>
    </ul>
  </div>
</template>

<script>
export default {
  name: "yulang-select",
};
</script>

<style lang="less" scoped></style>
