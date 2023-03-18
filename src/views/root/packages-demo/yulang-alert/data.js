export const codeStrB = `
<template>
  <div>
    <yulang-alert title="成功提示的文案" type="success"></yulang-alert>
    <yulang-alert title="消息提示的文案" type="info"></yulang-alert>
    <yulang-alert title="警告提示的文案" type="warning"></yulang-alert>
    <yulang-alert title="错误提示的文案" type="error"></yulang-alert>
  </div>
</template>

<script>

export default {
 
};
</script>

<style lang="less" scoped></style>
`

export const codeStrC = `
<template>
  <div>
    <yulang-alert title="成功提示的文案" type="success" effect="dark">
    </yulang-alert>
    <yulang-alert title="消息提示的文案" type="info" effect="dark">
    </yulang-alert>
    <yulang-alert title="警告提示的文案" type="warning" effect="dark">
    </yulang-alert>
    <yulang-alert title="错误提示的文案" type="error" effect="dark">
    </yulang-alert>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped></style>
`

export const codeStrD = `
<template>
  <div>
    <yulang-alert title="不可关闭的 alert" type="success" :closable="false">
    </yulang-alert>
    <yulang-alert title="自定义 close-text" type="info" close-text="知道了">
    </yulang-alert>
    <yulang-alert title="设置了回调的 alert" type="warning" @close="hello">
    </yulang-alert>
  </div>
</template>

<script>
export default {
  methods: {
    hello() {
      alert("Hello World!");
    },
  },
};
</script>

<style lang="less" scoped></style>
`

export const codeStrE = `
<template>
  <div>
    <yulang-alert title="成功提示的文案" type="success" show-icon>
    </yulang-alert>
    <yulang-alert title="消息提示的文案" type="info" show-icon> </yulang-alert>
    <yulang-alert title="警告提示的文案" type="warning" show-icon>
    </yulang-alert>
    <yulang-alert title="错误提示的文案" type="error" show-icon> </yulang-alert>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped></style>
`

export const codeStrF = `
<template>
  <yulang-alert
    title="带辅助性文字介绍"
    type="success"
    description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……"
  >
  </yulang-alert>
</template>

<script>
export default {};
</script>

<style lang="less" scoped></style>
`

export const codeStrG = `
<template>
  <div>
    <yulang-alert
      title="成功提示的文案"
      type="success"
      description="文字说明文字说明文字说明文字说明文字说明文字说明"
      show-icon
    >
    </yulang-alert>
    <yulang-alert
      title="消息提示的文案"
      type="info"
      description="文字说明文字说明文字说明文字说明文字说明文字说明"
      show-icon
    >
    </yulang-alert>
    <yulang-alert
      title="警告提示的文案"
      type="warning"
      description="文字说明文字说明文字说明文字说明文字说明文字说明"
      show-icon
    >
    </yulang-alert>
    <yulang-alert
      title="错误提示的文案"
      type="error"
      description="文字说明文字说明文字说明文字说明文字说明文字说明"
      show-icon
    >
    </yulang-alert>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped></style>
`