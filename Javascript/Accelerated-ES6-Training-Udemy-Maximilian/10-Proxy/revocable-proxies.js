let person = {
  name: 'Max'
}

let handler = {
  get: function (target, property) {
    return Reflect.get(target, property);
  }
}


let {proxy, revoke} = Proxy.revocable(person, handler);

revoke();
console.log(proxy.name)