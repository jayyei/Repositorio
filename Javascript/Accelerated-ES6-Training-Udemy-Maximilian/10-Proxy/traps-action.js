let person = {
  name: 'Max'.anchor,
  age: 27
}

let handler = {

}

let protoHandler = {
  // target is the object itself
  get: function(target, name) {
    return name in target ? target[name] : 'No existe la propiedad nombrada'
  },
  set: function (target, property, value) {
    if (value.length > 2) {
      // Reflect.set(target, property, value);
      target[property] = value
      return true;
    }
  }
}

var proxy = new Proxy({}, handler);
proxy.name = 'jy'

let protoProxy = new Proxy(proxy, protoHandler);

Reflect.setPrototypeOf(person, protoProxy)
console.log(person.hobbies)