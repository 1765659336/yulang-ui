<template>
  <div class="packages-yulang-cascader-container">
    <yulang-popover ref="popoverRef" :minWidth="16">
      <template #reference>
        <yulang-input
          v-model="labelValue"
          readonly
          placeholder="请选择"
          :clearable="clearable"
          @clear="inputClear"
        ></yulang-input>
      </template>
      <template #content>
        <yulang-cascader-level
          :options="options"
          :changeValue="changeValue"
          :selectValue="[]"
          :level="0"
          :value="valueCopy"
        ></yulang-cascader-level>
      </template>
    </yulang-popover>
  </div>
</template>

<script>
import YulangCascaderLevel from "./components/YulangCascaderLevel.vue";
export default {
  name: "yulang-cascader",
  components: {
    YulangCascaderLevel,
  },
  props: {
    value: {
      type: Array,
      require: true,
    },
    options: {
      type: Array,
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    showAllLevels: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      labelValue: null,
      valueCopy: null,
    };
  },
  computed: {
    valueComputed: {
      get() {
        return this.value;
      },
      set(newValue) {
        this.$emit("input", newValue);
      },
    },
  },
  methods: {
    changeValue(value, closePopover) {
      this.valueCopy = value.map((item) => item.value);
      // 是否选中的最后的叶节点
      if (closePopover) {
        this.labelValue = this.showAllLevels
          ? value.reduce((acc, cur) => (acc ? acc + "/" : acc) + cur.label, "")
          : value[value.length - 1].label;
        this.valueComputed = value.map((item) => item.value);
        this.$refs.popoverRef.closeShow();
      }
    },
    inputClear() {
      this.valueComputed = [];
      this.valueCopy = [];
    },
  },
  mounted() {
    this.valueCopy = this.value;
  },
};
</script>

<style lang="less" scoped></style>
