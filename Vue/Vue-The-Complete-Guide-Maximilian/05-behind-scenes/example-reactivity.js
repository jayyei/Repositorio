/* let message = "Hello";

let longMessage = message + "world";

console.log(longMessage);

message = "Hello";

console.log(longMessage); */

const data = {
    message: 'Hello',
    longMessage: 'Hello world'
}

const handler = {
    set(target, key, value){  //is triggered when a object attribute is set
        console.log(target)
        console.log(key)
        console.log(value)
        if (key === 'message'){
            target.longMessage = value + 'World'
        }
        target[key] = value
    }
};

const proxy = new Proxy(data, handler);

proxy.message = "Hello!!!!!"

console.log(proxy.longMessage)