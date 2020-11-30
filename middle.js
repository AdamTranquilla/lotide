const middle = (arr) => {
  let newArr = []
  let middle = 0
  if (arr.length === 1 || arr.length === 2) {
    return newArr
  } else if (arr.length % 2 === 0) {
    middle = arr.length / 2 -1
    newArr.push(arr[middle])
    newArr.push(arr[middle + 1])
    return newArr
  } else {
    middle = arr.length / 2 - 0.5
    newArr.push(arr[middle])
    return newArr
  }
}

module.exports = middle;