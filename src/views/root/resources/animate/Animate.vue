<template>
  <div class="root-resources-animate-container">
    <div class="animate-class-arr-container">
      <yulang-tabs
        v-model="activeName"
        @tabClick="handleClick"
        :isKeepAlive="false"
      >
        <yulang-tab-pane label="左侧进入" name="leftShow">
          <div class="animationCollect">
            <div
              class="animationItemBox"
              v-for="(item, index) in AnimateClassArrLeftShow"
              :key="item.value"
            >
              {{ AnimateClassArrLeftShow[index].title }}
              <component :is="AnimateClassArrLeftShow[index].value"></component>
            </div>
          </div>
        </yulang-tab-pane>

        <yulang-tab-pane label="左侧退出" name="leftLeave">
          <div class="animationCollect">
            <div
              class="animationItemBox"
              v-for="(item, index) in AnimateClassArrLeftLeave"
              :key="item.value"
            >
              {{ AnimateClassArrLeftLeave[index].title }}
              <component
                :is="AnimateClassArrLeftLeave[index].value"
              ></component>
            </div>
          </div>
        </yulang-tab-pane>

        <yulang-tab-pane label="右侧进入" name="rightShow">
          <div class="animationCollect">
            <div
              class="animationItemBox"
              v-for="(item, index) in AnimateClassArrRightShow"
              :key="item.value"
            >
              {{ AnimateClassArrRightShow[index].title }}
              <component
                :is="AnimateClassArrRightShow[index].value"
              ></component>
            </div>
          </div>
        </yulang-tab-pane>

        <yulang-tab-pane label="右侧退出" name="rightLeave">
          <div class="animationCollect">
            <div
              class="animationItemBox"
              v-for="(item, index) in AnimateClassArrRightLeave"
              :key="item.value"
            >
              {{ AnimateClassArrRightLeave[index].title }}
              <component
                :is="AnimateClassArrRightLeave[index].value"
              ></component>
            </div>
          </div>
        </yulang-tab-pane>

        <yulang-tab-pane label="上边进入" name="topShow">
          <div class="animationCollect">
            <div
              class="animationItemBox"
              v-for="(item, index) in AnimateClassArrTopShow"
              :key="item.value"
            >
              {{ AnimateClassArrTopShow[index].title }}
              <component :is="AnimateClassArrTopShow[index].value"></component>
            </div>
          </div>
        </yulang-tab-pane>

        <yulang-tab-pane label="上边退出" name="TopLeave">
          <div class="animationCollect">
            <div
              class="animationItemBox"
              v-for="(item, index) in AnimateClassArrTopLeave"
              :key="item.value"
            >
              {{ AnimateClassArrTopLeave[index].title }}
              <component :is="AnimateClassArrTopLeave[index].value"></component>
            </div>
          </div>
        </yulang-tab-pane>

        <yulang-tab-pane label="下边进入" name="bottomShow">
          <div class="animationCollect">
            <div
              class="animationItemBox"
              v-for="(item, index) in AnimateClassArrBottomShow"
              :key="item.value"
            >
              {{ AnimateClassArrBottomShow[index].title }}
              <component
                :is="AnimateClassArrBottomShow[index].value"
              ></component>
            </div>
          </div>
        </yulang-tab-pane>

        <yulang-tab-pane label="下边退出" name="bottomLeave">
          <div class="animationCollect">
            <div
              class="animationItemBox"
              v-for="(item, index) in AnimateClassArrBottomLeave"
              :key="item.value"
            >
              {{ AnimateClassArrBottomLeave[index].title }}
              <component
                :is="AnimateClassArrBottomLeave[index].value"
              ></component>
            </div>
          </div>
        </yulang-tab-pane>

        <yulang-tab-pane label="中间" name="middle">
          <div class="animationCollect">
            <div
              class="animationItemBox"
              v-for="(item, index) in AnimateClassArrMiddle"
              :key="item.value"
            >
              {{ AnimateClassArrMiddle[index].title }}
              <component :is="AnimateClassArrMiddle[index].value"></component>
            </div>
          </div>
        </yulang-tab-pane>

        <yulang-tab-pane label="X轴" name="xAxis">
          <div class="animationCollect">
            <div
              class="animationItemBox"
              v-for="(item, index) in AnimateClassArrXAxis"
              :key="item.value"
            >
              {{ AnimateClassArrXAxis[index].title }}
              <component :is="AnimateClassArrXAxis[index].value"></component>
            </div>
          </div>
        </yulang-tab-pane>

        <yulang-tab-pane label="Y轴" name="yAxis">
          <div class="animationCollect">
            <div
              class="animationItemBox"
              v-for="(item, index) in AnimateClassArrYAxis"
              :key="item.value"
            >
              {{ AnimateClassArrYAxis[index].title }}
              <component :is="AnimateClassArrYAxis[index].value"></component>
            </div>
          </div>
        </yulang-tab-pane>
      </yulang-tabs>

      <!-- <div
        v-for="item in animateClassArr"
        :key="item.value"
        @click="animateClassItem(item)"
        :class="[
          'animate-class-item',
          item.value === value.value ? 'isSelect' : '',
        ]"
      >
        {{ item.title }}
      </div> -->

      <!-- <div class="copyBtn" v-YulangCopy:[copySuccess]="copyData">
        点我复制代码
      </div> -->
    </div>

    <component :is="value.value"></component>
  </div>
</template>

<script>
import {
  Components,
  AnimateClassArr,
  AnimateClassArrLeftShow,
  AnimateClassArrLeftLeave,
  AnimateClassArrRightShow,
  AnimateClassArrRightLeave,
  AnimateClassArrTopShow,
  AnimateClassArrTopLeave,
  AnimateClassArrBottomShow,
  AnimateClassArrBottomLeave,
  AnimateClassArrMiddle,
  AnimateClassArrXAxis,
  AnimateClassArrYAxis,
} from './index';
export default {
  name: 'root-resources-animate',
  components: Components,
  data() {
    return {
      value: AnimateClassArr[0],
      animateClassArr: AnimateClassArr,
      AnimateClassArrLeftShow,
      AnimateClassArrLeftLeave,
      AnimateClassArrRightShow,
      AnimateClassArrRightLeave,
      AnimateClassArrTopShow,
      AnimateClassArrTopLeave,
      AnimateClassArrBottomShow,
      AnimateClassArrBottomLeave,
      AnimateClassArrMiddle,
      AnimateClassArrXAxis,
      AnimateClassArrYAxis,
      // 选中tab的属性
      activeName: 'leftShow',
    };
  },
  computed: {
    copyData() {
      return this.value.copy + ` ` + this.value.title;
    },
  },
  methods: {
    animateClassItem(item) {
      this.value = item;
    },
    copySuccess(value) {
      // console.log("info", "复制成功值为:" + value);
      this.$yulangNotification({
        message: '复制成功' + value,
        type: 'success',
      });
    },
    // 控制tab切换
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>

<style lang="less" scoped>
.yulang-animate-div,
.yulang-animate {
  width: 80px;
  height: 80px;
  background-color: yellow;
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

.animationCollect {
  display: flex;
  flex-wrap: wrap;

  .animationItemBox {
    width: 120px;
    height: 120px;
    margin: 31.5px;
    background-color: red;
  }
}
</style>
