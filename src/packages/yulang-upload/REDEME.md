| 属性名          | 说明                   | 类型             | 默认值    | 回调参数        |
| --------------- | ---------------------- | ---------------- | --------- | --------------- |
| action          | 上传给后端的地址       | String           | undefined |                 |
| fileList        | 传入的要上传的列表     | Array            | []        |                 |
| limit           | 限制上传的数量         | number           | 3         |                 |
| onPreview       | 上传数量出错的回调函数 | Function         | undefined | limit、fileList |
| singlePicExceed | 限制单张图片大小       | String(kb或者mb) | undefined |                 |

