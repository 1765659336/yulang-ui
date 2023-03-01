<template>
  <div class="root-resources-animate-container">
    <div class="animate-class-arr-container">
      <div
        v-for="item in animateClassArr"
        :key="item.value"
        @click="value = item"
        :class="[
          'animate-class-item',
          item.value === value.value ? 'isSelect' : '',
        ]"
      >
        {{ item.title }}
      </div>
      <div class="copyBtn" v-YulangCopy="value.copy">点我复制代码</div>
    </div>
    <component :is="value.title"></component>
  </div>
</template>

<script>
import upAndDown from "./components/UpAndDown.vue";
import d from "./components/d.vue";
export default {
  name: "root-resources-animate",
  components: {
    upAndDown,
    d,
  },
  data() {
    return {
      value: {
        title: "up-and-down",
        value: "upAndDown",
        copy: "yulang-animate up-and-down",
      },
      animateClassArr: [
        {
          title: "up-and-down",
          value: "upAndDown",
          copy: "yulang-animate up-and-down",
        },
        { title: "d", value: "d", copy: "yulang-animate up-and-down" },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
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
