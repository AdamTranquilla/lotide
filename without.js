const without = (source, remove) => {
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < remove.length; j++) {
      if (source[i] === remove[j]) { // change to remove.indexOf(i)
        source.pop(source[i])
      }
    }
  }
  return console.log(source);
}

module.exports = without;