export const npmCodeStr = `
npm i element-ui -S
`

export const textStr = `
<!-- 引入样式 -->
<link rel="stylesheet" href="http://101.132.70.183:10010/yulang-ui-dist/yulang-ui.css"/>
<!-- 引入组件库 -->
<script src="http://101.132.70.183:10010/yulang-ui-dist/yulang-ui.umd.min.js"></script>
`
export const codeStr = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="http://101.132.70.183:10010/yulang-ui-dist/yulang-ui.css">
    <title>cdn引入方式演示</title>
</head>

<body>
    <div id="app">
        <yulang-button @click="drawer = !drawer">打开抽屉</yulang-button>
        <yulang-drawer title="我是标题" :visible.sync="drawer" direction="right">
            <span>我来啦!</span>
        </yulang-drawer>
    </div>
</body>

<!-- import Vue before Element -->
<script src="https://unpkg.com/vue@2/dist/vue.js"></script>
<!-- import JavaScript -->
<script src="http://101.132.70.183:10010/yulang-ui-dist/yulang-ui.umd.min.js"></script>
<script>
    new Vue({
        el: '#app',
        data: function() {
            return {
                drawer: false
            }
        }
    })
</script>

</html>
`