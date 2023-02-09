## 属性

| 属性名        | 说明                  | 类型                                 | 默认值   |
| ------------- | --------------------- | ------------------------------------ | -------- |
| mainColor     | 文字颜色、a标签背景色 | String(HEX、RGB)                     | \#54138c |
| url           | 跳转地址              | String                               | “”       |
| target        | a标签target对应的属性 | String(_blank、_self、_parent、_top) | _self    |
| disabled      | 是否不可点击          | Boolean                              | false    |
| openUnderline | 是否存在下划线        | Boolean                              | true     |



## 事件

| 事件名称      | 说明       | 回调参数       |
| ------------- | ---------- | -------------- |
| clickCallback | 跳转后触发 | (event: Event) |



## 插槽

| 插槽名   | 说明       |
| -------- | ---------- |
| 默认插槽 | 点击跳转区 |

