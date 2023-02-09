function Index(_index) {
  let index

  index = _index

  this.getIndex = function () {
    return index++
  }
}

export default Index