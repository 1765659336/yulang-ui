<template>
  <div class="packages-yulang-date-picker-container">
    <yulang-popover trigger="click" placement="bottom-start" ref="popoverRef">
      <template #reference>
        <yulang-input
          v-model="valueComputed"
          placeholder="请选择日期"
          prefixIcon="icon-riqi1"
          clearable
        ></yulang-input>
      </template>
      <template #content>
        <div class="yulang-date-picker-select-container">
          <div class="yulang-date-picker-select-header">
            <i
              class="iconfont icon-kuaitui curson-pointer"
              @click="changeYear('del')"
            ></i>
            <i
              class="iconfont icon-chevron-left curson-pointer"
              @click="changeMonth('del')"
            ></i>
            <div>{{ TimeStr(nowTime, 2) }}</div>
            <i
              class="iconfont icon-chevron-right curson-pointer"
              @click="changeMonth('add')"
            ></i>
            <i
              class="iconfont icon-kuaijin curson-pointer"
              @click="changeYear('add')"
            ></i>
          </div>
          <div class="yulang-date-picker-week-text">
            <div
              v-for="(item, index) in weekTextArr"
              :key="index"
              class="yulang-date-picker-block-item"
            >
              {{ item }}
            </div>
          </div>
          <div class="yulang-date-picker-select-content">
            <div v-for="item in 6" :key="item">
              <div
                v-for="(item2, index) in selectDayArr.slice(
                  (item - 1) * 7,
                  item * 7
                )"
                :key="index"
                :class="[
                  'yulang-date-picker-block-item',
                  'curson-pointer',
                  item2.getDate() === nowTime.getDate() &&
                  item2.getMonth() === nowTime.getMonth() &&
                  item2.getFullYear() === nowTime.getFullYear()
                    ? 'selected-date'
                    : '',
                  item2.getMonth() !== nowTime.getMonth()
                    ? 'not-current-month'
                    : '',
                ]"
                @click="daySelect(item2)"
              >
                {{ item2.getDate() }}
              </div>
            </div>
          </div>
        </div>
      </template>
    </yulang-popover>
  </div>
</template>

<script>
import YulangPopover from "@/packages/yulang-popover/YulangPopover.vue";
import YulangInput from "@/packages/yulang-input/YulangInput.vue";

export default {
  name: "yulang-date-picker",
  components: {
    YulangPopover,
    YulangInput,
  },
  props: {
    value: {},
    // 日期分隔符
    dateSeparator: {
      default: "-",
    },
  },
  data() {
    return {
      weekTextArr: ["日", "一", "二", "三", "四", "五", "六"],
      // 默认当前时间
      nowTime: this.value ? new Date(this.value) : new Date(),
    };
  },
  computed: {
    valueComputed: {
      get() {
        return this.value;
      },
      set(newValue) {
        if (newValue) {
          if (newValue instanceof Date || !Number.isNaN(Date.parse(newValue))) {
            // 当值修改时，组件没有渲染，需要手动更新nowTime的值以及选择面板
            this.nowTime = new Date(newValue);
            this.$emit("input", this.TimeStr(new Date(newValue)));
          }
        } else {
          this.$emit("input", newValue);
        }
      },
    },
    selectDayArr() {
      let { year, month } = this.getYearMd(this.nowTime);
      let firstDay = new Date(year, month - 1, 1);
      let weeks = firstDay.getDay();
      // 所选区域的第一天
      let firstDate = firstDay.getTime() - (weeks - 1) * 24 * 60 * 60 * 1000;
      const arr = [];
      for (let index = 0; index < 42; index++) {
        arr.push(new Date(firstDate + index * 24 * 60 * 60 * 1000));
      }
      return arr;
    },
  },
  methods: {
    // 获取时间的年、月、日
    getYearMd(time) {
      const date = new Date(time);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      return {
        year,
        month,
        day,
      };
    },
    // 用0补全两位数
    padZero(number) {
      return String(number).padStart(2, "0");
    },
    // 选中对应的日期
    daySelect(date) {
      this.valueComputed = this.TimeStr(date);
      this.$refs.popoverRef.closeShow();
    },
    // 处理时间格式
    TimeStr(time, endIndex = 3, startIndex = 0) {
      // 处理时间格式
      let { year, month, day } = this.getYearMd(time);
      let arr = [year, this.padZero(month), this.padZero(day)];
      return arr.slice(startIndex, endIndex).join(this.dateSeparator);
    },
    // 修改选择面板的年
    changeYear(type) {
      let { year, month, day } = this.getYearMd(this.nowTime);
      switch (type) {
        case "del": {
          year--;
          this.nowTime = new Date(year, month - 1, day);
          break;
        }
        case "add": {
          year++;
          this.nowTime = new Date(year, month - 1, day);
          break;
        }
      }
    },
    // 修改选择面板的月
    changeMonth(type) {
      let { year, month, day } = this.getYearMd(this.nowTime);
      switch (type) {
        case "del": {
          if (month === 1) {
            year--;
            month = 12;
          } else {
            month--;
          }
          this.nowTime = new Date(year, month - 1, day);
          break;
        }
        case "add": {
          if (month === 12) {
            year++;
            month = 1;
          } else {
            month++;
          }
          this.nowTime = new Date(year, month - 1, day);
          break;
        }
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import url("./index.less");
</style>
