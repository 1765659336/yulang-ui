<template>
  <div
    :class="[
      'packages-yulang-option-container',
      disabled ? 'option-disabled' : '',
      YulangSelect.label && YulangSelect.label.indexOf(label) != -1
        ? 'option-selected'
        : '',
    ]"
    @click="optionClick"
  >
    <slot>
      {{ label }}
    </slot>
  </div>
</template>

<script>
export default {
  name: "yulang-option",
  props: {
    label: {
      default: "",
    },
    value: {},
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  inject: ["YulangSelect", "closePopover", "multiple"],
  data() {
    return {
      yulangComponentName: "yulang-option",
    };
  },
  methods: {
    optionClick() {
      if (this.disabled) {
        return;
      }
      if (this.multiple) {
        if (!this.YulangSelect.valueComputed) {
          this.YulangSelect.valueComputed = [];
        }
        if (
          !this.YulangSelect.valueComputed.find((item) => item === this.value)
        ) {
          this.YulangSelect.valueComputed = [
            ...this.YulangSelect.valueComputed,
            this.value,
          ];
          this.YulangSelect.label = this.YulangSelect.label + this.label + ";";
        }
      } else {
        this.YulangSelect.label = this.label;
        this.YulangSelect.valueComputed = this.value;
        this.closePopover();
      }
    },
  },
};
</script>

<style lang="less" scoped>
.packages-yulang-option-container {
  padding: 10px;
  cursor: pointer;
  &:hover {
    color: var(--yulang-theme-color--);
  }
}

.option-disabled {
  cursor: not-allowed;
  color: #ccc;
  &:hover {
    color: #ccc;
  }
}

.option-selected {
  color: var(--yulang-theme-color--);
}
</style>
