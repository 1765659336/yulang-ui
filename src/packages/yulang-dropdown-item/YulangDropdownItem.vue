<template>
  <div
    :class="[
      'packages-yulang-dropdown-item-container',
      disabled ? 'is-disabled' : 'not-is-disabled',
      divided ? 'divided' : '',
    ]"
    @click="dropdownItemClick"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "yulang-dropdown-item",
  props: {
    // 是否禁用
    disabled: {
      type: Boolean,
      default: false,
    },
    // 是否显示分隔线
    divided: {
      type: Boolean,
      default: false,
    },
    // 点击的command命令
    command: {},
  },
  inject: ["closeShow", "commandhandle"],
  methods: {
    dropdownItemClick() {
      !this.disabled && this.commandhandle && this.commandhandle(this.command);
      !this.disabled && this.closeShow();
    },
  },
};
</script>

<style lang="less" scoped>
.packages-yulang-dropdown-item-container {
  padding: 1rem;
  text-align: center;
  background-color: white;
}

.is-disabled {
  color: #999;
  cursor: not-allowed;
}

.not-is-disabled {
  cursor: pointer;
  &:hover {
    background-color: #ecf5ff;
    color: #409eff;
  }
}

.divided {
  border-top: 1px solid #ccc;
}
</style>
