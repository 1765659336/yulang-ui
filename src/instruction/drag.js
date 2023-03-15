// 拖拽指令,基于自身定位，注意不要覆盖样式

let mouse = {
  X: 0,
  Y: 0
}

let move = {
  X: 0,
  Y: 0
}

export default {
  inserted(el) {
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