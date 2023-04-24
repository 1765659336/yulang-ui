export const codeStrB = `
<template>
  <div>
    <div class="avatar">
      <yulang-avatar :size="50" :src="circleUrl"></yulang-avatar>
      <yulang-divider direction="column"></yulang-divider>
      <yulang-avatar size="large" :src="circleUrl"></yulang-avatar>
      <yulang-divider direction="column"></yulang-divider>
      <yulang-avatar size="medium" :src="circleUrl"></yulang-avatar>
      <yulang-divider direction="column"></yulang-divider>
      <yulang-avatar size="small" :src="circleUrl"></yulang-avatar>
      <yulang-divider direction="column"></yulang-divider>
    </div>
    <div class="avatar">
      <yulang-avatar :size="50" :src="squareUrl" shape="square"></yulang-avatar>
      <yulang-divider direction="column"></yulang-divider>
      <yulang-avatar
        size="large"
        :src="squareUrl"
        shape="square"
      ></yulang-avatar>
      <yulang-divider direction="column"></yulang-divider>
      <yulang-avatar
        size="medium"
        :src="squareUrl"
        shape="square"
      ></yulang-avatar>
      <yulang-divider direction="column"></yulang-divider>
      <yulang-avatar
        size="small"
        :src="squareUrl"
        shape="square"
      ></yulang-avatar>
      <yulang-divider direction="column"></yulang-divider>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      squareUrl:
        "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
    };
  },
};
</script>

<style lang="less" scoped>
.avatar {
  display: inline-flex;
  align-items: center;
  height: 100px;
}
</style>
`;

export const codeStrC = `
<template>
  <div class="demo-type">
    <div>
      <yulang-avatar icon="el-icon-user-solid"></yulang-avatar>
    </div>
    <div>
      <yulang-avatar
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      ></yulang-avatar>
    </div>
    <div>
      <yulang-avatar> user </yulang-avatar>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.demo-type {
  display: flex;
  justify-content: space-between;
}
</style>
`;

export const codeStrD = `
<template>
  <div>
    <yulang-avatar :size="60" src="https://empty" @error="errorHandler">
      <img
        src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"
      />
    </yulang-avatar>
  </div>
</template>

<script>
export default {
  methods: {
    errorHandler() {
      console.log("图片加载失败");
    },
  },
};
</script>

<style lang="less" scoped></style>
`;

export const codeStrE = `
<template>
  <div class="demo-fit">
    <div class="block" v-for="fit in fits" :key="fit">
      <span class="title">{{ fit }}</span>
      <yulang-avatar shape="square" :size="100" :fit="fit" :src="url"></yulang-avatar>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fits: ["fill", "contain", "cover", "none", "scale-down"],
      url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
    };
  },
};
</script>

<style lang="less" scoped>
.demo-fit {
  display: flex;

  .block {
    position: relative;
    margin-right: 10px;
    .title {
      position: absolute;
      top: 0;
      width: 100%;
      transform: translateY(-100%);
      text-align: center;
    }
  }
}
</style>

`