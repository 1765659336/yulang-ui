// 无线滚动指令
export default {
  inserted(el, binding) {
    el.addEventListener('scroll', () => {
      // 如果scrollHeight的高度减去到顶部的高度为这个框的高度，说明到底部了
      if (el.scrollHeight - el.scrollTop === el.getBoundingClientRect().height) {
        // 获取dom上的yulang-infinite-scroll-disabled属性
        const disabled = el.getAttribute('yulang-infinite-scroll-disabled')
        // 如果为disabled属性就不发请求
        if (!(disabled && disabled === "disabled")) {
          binding.value()
        }
      }
    })
  }
}