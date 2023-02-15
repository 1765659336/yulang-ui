export default {
  inserted(el, binding) {
    el.addEventListener("mousedown", () => {
      const timeStart = new Date().getTime(); //获取鼠标按下时的时间
      binding.time = setInterval(function () //setInterval会每100毫秒执行一次
      {
        const timeEnd = new Date().getTime(); //也就是每100毫秒获取一次时间
        //如果此时检测到的时间与第一次获取的时间差有300毫秒
        if (timeEnd - timeStart > 300) {
          clearInterval(binding.time); //便不再继续重复此函数 （clearInterval取消周期性执行）
          binding.value("down"); // 执行外部callback
        }
      }, 100);
    });

    el.addEventListener("mouseup", () => {
      clearInterval(binding.time);
      binding.value("up");
    });
  },
};
