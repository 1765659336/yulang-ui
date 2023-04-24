<template>
  <div>
    <yulang-popover :minWidth="200" :maxHeight="200" ref="popover">
      <template #reference>
        <yulang-input
          v-model="valueComputed"
          :placeholder="placeholder"
          prefixIcon="icon-shijian"
          :clearable="clearable"
          :disabled="disabled"
        ></yulang-input>
      </template>
      <template #content>
        <div class="yulang-time-picker-selected-content">
          <div v-if="!pickerOptions.selectableRange">
            <div
              v-for="(item, index) in pickerOptionsComputed"
              :key="index"
              :class="[
                'yulang-time-picker-selected-content-item',
                item.isCheck ? 'yulang-item-picker-isChecked' : '',
              ]"
              @click="contentItemClick(item)"
            >
              {{ item.value }}
            </div>
          </div>
          <!-- <div
            v-if="pickerOptions.selectableRange"
            class="selectable-range-container"
          >
            <div class="content-hour-container">
              <div v-for="(item, index) in 24" :key="index">{{ index }}</div>
            </div>
            <div class="content-minutes-container">
              <div v-for="(item, index) in 60" :key="index">{{ index }}</div>
            </div>
            <div class="content-second-container">
              <div v-for="(item, index) in 60" :key="index">{{ index }}</div>
            </div>
          </div> -->
        </div>
      </template>
    </yulang-popover>
  </div>
</template>

<script>
import YulangInput from "@/packages/yulang-input/YulangInput";
import YulangPopover from "@/packages/yulang-popover/YulangPopover.vue";

export default {
  name: "yulang-time-picker",
  components: {
    YulangInput,
    YulangPopover,
  },
  props: {
    value: {},
    // 配置信息
    pickerOptions: {
      type: Object,
      validator: () => {
        // if (
        //   Number(value.start.split(":")[0]) < 0 ||
        //   Number(value.start.split(":")[1]) < 0
        // ) {
        //   console.error("pickerOptions.start时分不能小于0");
        //   return false;
        // }
        // if (
        //   Number(value.start.split(":")[0]) > 24 ||
        //   Number(value.start.split(":")[1]) >= 60
        // ) {
        //   console.error("pickerOptions.start时不能大于24,pickerOptions.start分不能大于60");
        //   return false;
        // }
        // if (
        //   Number(value.end.split(":")[0]) < 0 ||
        //   Number(value.end.split(":")[1]) < 0
        // ) {
        //   console.error("pickerOptions.end时分不能小于0");
        //   return false;
        // }
        // if (
        //   Number(value.end.split(":")[0]) > 24 ||
        //   Number(value.end.split(":")[1]) >= 60
        // ) {
        //   console.error("pickerOptions.end时不能大于24,pickerOptions.end分不能大于60");
        //   return false;
        // }
        // if (
        //   Number(value.step.split(":")[0]) < 0 ||
        //   Number(value.step.split(":")[1]) < 0
        // ) {
        //   console.error("pickerOptions.step时分不能小于0");
        //   return false;
        // }
        // if (
        //   Number(value.step.split(":")[0]) > 24 ||
        //   Number(value.step.split(":")[1]) >= 60
        // ) {
        //   console.error("pickerOptions.step时不能大于24,pickerOptions.step分不能大于60");
        //   return false;
        // }
        return true;
      },
    },
    // 提示语句
    placeholder: {
      default() {
        return this.$locale.gv(["timePicker", "placeholder"]);
      },
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default: () => {
        return false;
      },
    },
    // 是否可清除
    clearable: {
      type: Boolean,
      default: () => {
        return true;
      },
    },
  },
  data() {
    return {
      // 处理配置信息
      pickerOptionsComputed: [
        { value: "08:30", isCheck: false },
        { value: "08:45", isCheck: false },
        { value: "09:00", isCheck: false },
        { value: "09:15", isCheck: false },
        { value: "09:30", isCheck: false },
        { value: "09:45", isCheck: false },
        { value: "10:00", isCheck: false },
        { value: "10:15", isCheck: false },
        { value: "10:30", isCheck: false },
        { value: "10:45", isCheck: false },
        { value: "11:00", isCheck: false },
      ],
    };
  },
  computed: {
    valueComputed: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },
  methods: {
    closeModal() {
      // 选中数据后关闭弹出选择框
      this.$refs.popover.showChange();
      this.valueComputed = this.pickerOptionsComputed.find(
        (item) => item.isCheck
      )?.value;
    },
    contentItemClick(value) {
      this.pickerOptionsComputed = this.pickerOptionsComputed.map((item) => {
        if (item.value === value?.value) {
          item.isCheck = true;
        } else {
          item.isCheck = false;
        }
        return item;
      });
      this.closeModal();
    },
  },
};
</script>

<style lang="less" scoped>
@import url("./index.less");
</style>
