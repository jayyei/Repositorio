// // Generic type like Java
// const names: Array<string> = ['Max', 'Manuel']; // string[]
// // names[0].split(' ');

// // generic with promises
// const promise: Promise<string> = new Promise((resolve, reject)=>{
//     setTimeout(()=> {
//         resolve('This is done!');
//     }, 2000)
// })

// // now you have the support by typescript
// promise.then((data: string) => {
//     // this is a string method 
//     data.split(' ')
// })

function merge<T extends object, U extends object>(objA: T, objB: U): T & U {
    return Object.assign(objA, objB);
}

const mergedObj = merge<{name: string, hobbies: string[]}, {age: number}>
        ({name: 'Max', hobbies: ['Sports']}, {age: 30});

console.log(mergedObj.age)

interface Lengthy {
    length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = 'Got no value';
    if( element.length === 1) {
        descriptionText = 'Got ' + element.length + ' elements.';
    } else if (element.length > 1) {
        descriptionText = 'Got ' + element.length + ' elements.';
    }
    return [element, descriptionText]
}

console.log(countAndDescribe('Hi there'));

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return 'Value ' + obj[key]
}

extractAndConvert({name: 'jay'}, 'name')

class DataStorage<T extends string | boolean | number> {
    private data: Array<T> = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1); // -1
    }

    getItems() {
        return [...this.data]
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Max');
textStorage.addItem('Manu');
textStorage.removeItem('Max');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

// const objectStorage =  new DataStorage<object>();
// const maxObject = {name: 'Max'}
// objectStorage.addItem(maxObject)
// objectStorage.addItem({name: 'Manu'})
// //..
// objectStorage.removeItem(maxObject);
// console.log(objectStorage.getItems());

// FOR THE NEXT VISIT UTILITY TYPES IN TYPESCRIPT

interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourseGoal(title: string, description: string, date: Date) : CourseGoal {
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date
    return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ['Max', 'Sports'];

// names.pop('Manu');