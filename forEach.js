function iterativeLog(array) {
  array.forEach(item => {
    var index = array.indexOf(item);
    console.log(`${index}: ${item}`)
  })
}

function iterate(callback) {
  var array = [1, 2, 3, 4, 5];
  array.forEach(callback);
  return array;
}

function doToArray(array, callback) {
  array.forEach(callback);

}
