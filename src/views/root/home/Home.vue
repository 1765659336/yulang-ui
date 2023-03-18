<template>
  <div class="home-container">
    <h1>网站快速成型工具</h1>
    <h3>YulangUI,在公司实习的学习练手项目,基于vue2的组件库</h3>
    <img src="@/assets/images/home.png" alt="" />
    <div class="card-container">
      <div
        v-for="(item, index) in cardArr"
        :key="index"
        :class="['card-container-item', item.animate]"
      >
        <div class="others">
          <div class="image"></div>
          <div class="title">{{ item.title }}</div>
          <div class="content">{{ item.content }}</div>
        </div>
        <div class="details" @click="$router.push(item.path)">查看详情</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "yulang-home",
  data() {
    return {
      cardArr: [
        {
          title: "指南",
          content:
            "了解设计指南，帮助产品设计人员搭建逻辑清晰、结构合理且高效易用的产品",
          animate: "yulang-animate yulang-rotate-in-left",
          path: "/root/guide",
        },
        {
          title: "组件",
          content:
            "使用组件 Demo 快速体验交互细节；使用前端框架封装的代码帮助工程师快速开发",
          animate: "yulang-animate yulang-rotate-in-top",
          path: "/root/packages-demo",
        },
        {
          title: "主题",
          content:
            "使用组件 Demo 快速体验交互细节；使用前端框架封装的代码帮助工程师快速开发",
          animate: "yulang-animate yulang-rotate-in-bottom",
          path: "/root/theme",
        },
        {
          title: "资源",
          content:
            "下载相关资源，用其快速搭建页面原型或高保真视觉稿，提升产品设计效率",
          animate: "yulang-animate yulang-rotate-in-right",
          path: "/root/resources",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.home-container {
  display: flex;
  flex-direction: column;

  & > h3,
  h1 {
    width: 100%;
    text-align: center;
  }

  .card-container {
    display: flex;
    justify-content: space-between;
    .card-container-item {
      border: 1px solid #eaeefb;
      border-radius: 5px;
      width: 250px;
      font-size: 14px;
      background-color: white;

      .others {
        height: 300px;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;

        .image {
          margin: 50px;
          width: 100px;
          height: 100px;
          border-radius: 50%;
          border: 1px solid #99a9bf;
        }
        .title {
          position: absolute;
          bottom: 80px;
          text-align: center;
          font-size: 18px;
        }
        .content {
          position: absolute;
          bottom: 0;
          padding: 20px;
          color: #99a9bf;
        }
      }

      .details {
        text-align: center;
        padding: 15px;
        border-top: 1px solid #99a9bf;
        color: var(--yulang-theme-color--);
        height: 20px;
        cursor: pointer;
        border-radius: 0 0 5px 5px;

        &:hover {
          background-color: rgb(64, 158, 255);
        }
      }
    }
  }
}
</style>
