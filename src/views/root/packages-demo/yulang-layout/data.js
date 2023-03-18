export const codeStrB = `
<template>
  <div class="packages-demo-yulang-layout">
    <yulang-row>
      <yulang-col :span="24"><div class="grid-content"></div></yulang-col>
    </yulang-row>
    <yulang-row>
      <yulang-col :span="12"><div class="grid-content"></div></yulang-col>
      <yulang-col :span="12"><div class="grid-content2"></div></yulang-col>
    </yulang-row>
    <yulang-row>
      <yulang-col :span="8"><div class="grid-content"></div></yulang-col>
      <yulang-col :span="8"><div class="grid-content2"></div></yulang-col>
      <yulang-col :span="8"><div class="grid-content"></div></yulang-col>
    </yulang-row>
    <yulang-row>
      <yulang-col :span="6"><div class="grid-content"></div></yulang-col>
      <yulang-col :span="6"><div class="grid-content2"></div></yulang-col>
      <yulang-col :span="6"><div class="grid-content"></div></yulang-col>
      <yulang-col :span="6"><div class="grid-content2"></div></yulang-col>
    </yulang-row>
    <yulang-row>
      <yulang-col :span="4"><div class="grid-content"></div></yulang-col>
      <yulang-col :span="4"><div class="grid-content2"></div></yulang-col>
      <yulang-col :span="4"><div class="grid-content"></div></yulang-col>
      <yulang-col :span="4"><div class="grid-content2"></div></yulang-col>
      <yulang-col :span="4"><div class="grid-content"></div></yulang-col>
      <yulang-col :span="4"><div class="grid-content2"></div></yulang-col>
    </yulang-row>
  </div>
</template>

<style lang="less" scoped>
.grid-content {
  background-color: #d3dce6;
  height: 2rem;
}

.grid-content2 {
  background-color: #e5e9f2;
  height: 2rem;
}
</style>
`

export const codeStrC = `
<template>
  <yulang-row :gutter="20">
    <yulang-col :span="6"><div class="grid-content"></div></yulang-col>
    <yulang-col :span="6"><div class="grid-content2"></div></yulang-col>
    <yulang-col :span="6"><div class="grid-content"></div></yulang-col>
    <yulang-col :span="6"><div class="grid-content2"></div></yulang-col>
  </yulang-row>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.grid-content {
  background-color: #d3dce6;
  height: 2rem;
}

.grid-content2 {
  background-color: #e5e9f2;
  height: 2rem;
}
</style>
`

export const codeStrD = `
<template>
  <div>
    <yulang-row :gutter="20">
      <yulang-col :span="16"><div class="grid-content"></div></yulang-col>
      <yulang-col :span="8"><div class="grid-content2"></div></yulang-col>
    </yulang-row>
    <yulang-row :gutter="20">
      <yulang-col :span="8"><div class="grid-content"></div></yulang-col>
      <yulang-col :span="8"><div class="grid-content2"></div></yulang-col>
      <yulang-col :span="4"><div class="grid-content"></div></yulang-col>
      <yulang-col :span="4"><div class="grid-content2"></div></yulang-col>
    </yulang-row>
    <yulang-row :gutter="20">
      <yulang-col :span="4"><div class="grid-content"></div></yulang-col>
      <yulang-col :span="16"><div class="grid-content2"></div></yulang-col>
      <yulang-col :span="4"><div class="grid-content"></div></yulang-col>
    </yulang-row>
  </div>
</template>

<style lang="less" scoped>
.grid-content {
  background-color: #d3dce6;
  height: 2rem;
}

.grid-content2 {
  background-color: #e5e9f2;
  height: 2rem;
}
</style>
`

export const codeStrE = `
<template>
  <div>
    <yulang-row :gutter="20">
      <yulang-col :span="6"><div class="grid-content"></div></yulang-col>
      <yulang-col :span="6" :offset="6"
        ><div class="grid-content2"></div
      ></yulang-col>
    </yulang-row>
    <yulang-row :gutter="20">
      <yulang-col :span="6" :offset="6"
        ><div class="grid-content"></div
      ></yulang-col>
      <yulang-col :span="6" :offset="6"
        ><div class="grid-content2"></div
      ></yulang-col>
    </yulang-row>
    <yulang-row :gutter="20">
      <yulang-col :span="12" :offset="6"
        ><div class="grid-content"></div
      ></yulang-col>
    </yulang-row>
  </div>
</template>

<style lang="less" scoped>
.grid-content {
  background-color: #d3dce6;
  height: 2rem;
}

.grid-content2 {
  background-color: #e5e9f2;
  height: 2rem;
}
</style>
`

export const codeStrF = `
<template>
  <div>
    <yulang-row type="flex">
      <yulang-col :span="6"><div class="grid-content"></div></yulang-col>
      <yulang-col :span="6"><div class="grid-content2"></div></yulang-col>
      <yulang-col :span="6"><div class="grid-content"></div></yulang-col>
    </yulang-row>
    <yulang-row type="flex" justify="center">
      <yulang-col :span="6"><div class="grid-content"></div></yulang-col>
      <yulang-col :span="6"><div class="grid-content2"></div></yulang-col>
      <yulang-col :span="6"><div class="grid-content"></div></yulang-col>
    </yulang-row>
    <yulang-row type="flex" justify="end">
      <yulang-col :span="6"><div class="grid-content"></div></yulang-col>
      <yulang-col :span="6"><div class="grid-content2"></div></yulang-col>
      <yulang-col :span="6"><div class="grid-content"></div></yulang-col>
    </yulang-row>
    <yulang-row type="flex" justify="space-between">
      <yulang-col :span="6"><div class="grid-content"></div></yulang-col>
      <yulang-col :span="6"><div class="grid-content2"></div></yulang-col>
      <yulang-col :span="6"><div class="grid-content"></div></yulang-col>
    </yulang-row>
    <yulang-row type="flex" justify="space-around">
      <yulang-col :span="6"><div class="grid-content"></div></yulang-col>
      <yulang-col :span="6"><div class="grid-content2"></div></yulang-col>
      <yulang-col :span="6"><div class="grid-content"></div></yulang-col>
    </yulang-row>
  </div>
</template>

<style lang="less" scoped>
.grid-content {
  background-color: #d3dce6;
  height: 2rem;
}

.grid-content2 {
  background-color: #e5e9f2;
  height: 2rem;
}
</style>
`