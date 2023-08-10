export default {
  // 指令的定义
  inserted(el, inserted) {
    // 利用事件冒泡，来判断当前点击的元素是不是指令绑定的元素
    // 调用addEventListenne给document添加点击事件，是不会覆盖的，而是按照顺序执行
    document.addEventListener("click", (e) => {
      // 是否是父级元素
      let isFather = false;
      let parentNode = e.target.parentNode;
      let contentFather = document.getElementById(inserted.arg);
      while (parentNode && parentNode !== document.body) {
        if (el === parentNode || contentFather === parentNode) {
          isFather = true;
        }
        parentNode = parentNode.parentNode;
      }
      !isFather && inserted.value();
    });
  },
};
