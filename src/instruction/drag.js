let mouse = {
  X: 0,
  Y: 0
}
let move = {
  X: 0,
  Y: 0
}

/*
* isClosePositioning 是否关闭定位设置，默认关闭
*/
export default {
  inserted(el,binding) {
    // 是否设置定位，默认设置
    if (!binding.value.isClosePositioning) {
      el.style.position = 'absolute'
    }
    el.draggable = 'true'
    el.addEventListener('dragstart', (e) => {
      mouse.X = e.offsetX
      mouse.Y = e.offsetY
    })
    el.addEventListener('dragend', (e) => {
      e.target.style.transform = `translate(${move.X + e.offsetX - mouse.X}px,${move.Y + e.offsetY - mouse.Y}px)`
      if (e.target.style.transform) {
        move.X = move.X + e.offsetX - mouse.X
        move.Y = move.Y + e.offsetY - mouse.Y
      } else {
        e.target.style.transform = `translate(${move.X + e.offsetX - mouse.X}px,${move.Y + e.offsetY - mouse.Y}px)`
        move.X = e.offsetX - mouse.X
        move.Y = e.offsetY - mouse.Y
      }
    })
  }
}