// type AddFn = (a: number, b: number) => number;

// it can be replaced by
interface AddFn {
    (a: number, b: number) : number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
    return n1 + n2;
}

interface Named {
    readonly name?: string;
    outputName?: string;
}

interface Greetable extends Named {
    readonly name?: string;
    
    greet(phrase: string): void;
}

class Person implements Greetable {
    name?: string;

    constructor(n?: string) {
        if (n) {
            this.name = n;
        }
    }

    greet(phrase: string) {
        if (this.name) {
            console.log(phrase + " " + this.name);
        } else {
            console.log('Hi')
        }
    }

    sayGoodbye() {
        console.log('Bye')
    }
}

let user1: Greetable = new Person();
// user1.name = 'Manu';

user1.greet('Hi there I am');