export function flatArr(list) {
  return [].concat(...list.map((item) => {
    if (item.children) {
      let arr = [].concat(item, ...this.flatArr(item.children))
      delete item.children
      return arr
    }
    return [].concat(item)
  }))
}