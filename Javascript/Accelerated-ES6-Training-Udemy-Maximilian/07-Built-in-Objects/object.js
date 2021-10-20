var obj1 = {
  a: 1
}

var obj2 = {
 b: 2
}


var obj = Object.assign({}, obj1, obj2)

console.log(obj)

Object.setPrototypeOf(obj, {})