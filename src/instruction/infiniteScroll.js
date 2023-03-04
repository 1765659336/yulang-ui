// 无线滚动指令
export default {
  bind(el, binding) {
    el.addEventListener('scroll', () => {

      const minheight = el.getAttribute('yulang-infinite-scroll-minheight') === null ? 0 : el.getAttribute('yulang-infinite-scroll-minheight')

      // 判断是否有请求中的属性,没有就添加上并且设为为请求
      if (el.getAttribute('yulang-infinite-scroll-loading') === null) {
        el.setAttribute('yulang-infinite-scroll-loading', false)
      }

      // 如果scrollHeight的高度减去到顶部的高度为这个框的高度，说明到底部了
      if (el.scrollHeight - el.scrollTop <= (el.getBoundingClientRect().height + parseInt(minheight))) {
        // 获取dom上的yulang-infinite-scroll-disabled属性
        const disabled = el.getAttribute('yulang-infinite-scroll-disabled')
        // 如果为disabled属性就不发请求
        if (!(disabled && disabled === "disabled")) {

          // 如果是未请求的状态下
          if (el.getAttribute('yulang-infinite-scroll-loading') == 'false') {
            // 如果是promise请求
            const returnObj = binding.value()
            // 如果时promise对象
            if (returnObj instanceof Promise) {
              el.setAttribute('yulang-infinite-scroll-loading', true)
              returnObj.then(() => {
                el.setAttribute('yulang-infinite-scroll-loading', false)
              })
            }
          }
        }
      }
    })
  }
}