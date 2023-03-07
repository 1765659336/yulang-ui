<template>
  <div class="root-resources-animate-container">
    <div class="animate-class-arr-container">
      <div
        v-for="item in animateClassArr"
        :key="item.value"
        @click="animateClassItem(item)"
        :class="[
          'animate-class-item',
          item.value === value.value ? 'isSelect' : '',
        ]"
      >
        {{ item.title }}
      </div>

      <div class="copyBtn" v-YulangCopy:[copySuccess]="copyData">点我复制代码</div>
    </div>
    
    <component :is="value.value"></component>
  </div>
</template>

<script>
import { Components, AnimateClassArr } from './index';
export default {
  name: 'root-resources-animate',
  components: Components,
  data() {
    return {
      value: AnimateClassArr[0],
      animateClassArr: AnimateClassArr,
    };
  },
  computed:{
    copyData(){
      return `<div class="`+ this.value.copy + `">` + this.value.title + `</div>`
    }
  },
  methods: {
    animateClassItem(item) {
      this.value = item;
    },
    copySuccess(value) {
      // console.log("info", "复制成功值为:" + value);
      this.$yulangNotification({
        message: "复制成功" + value,
        type: "success",
      });
    },
  },
};
</script>

<style lang="less" scoped>
.yulang-animate-div {
  width: 200px;
  height: 200px;
  background-color: pink;
}
.root-resources-animate-container {
  .animate-class-arr-container {
    display: flex;
    flex-wrap: wrap;

    .animate-class-item {
      padding: 0 10px;
      margin: 10px 0;
      border-right: 1px solid #ccc;
      cursor: pointer;
    }

    .isSelect {
      color: skyblue;
    }

    .copyBtn {
      padding: 10px;
    }

    & > div {
      cursor: pointer;
    }
  }
}
</style>
