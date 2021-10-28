// type Admin = {
//     name: string;
//     privileges: string[];
// };

// type Employee = {
//     name: string;
//     startDate: Date;
// }

// type ElevatedEmployee = Admin & Employee;


// now using interfaces

interface Admin {
    name: string;
    privileges: string[]
}

interface Employee {
    name: string;
    startDate: Date
}

interface ElevatedEmployee extends Admin, Employee {}



const e1: ElevatedEmployee = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date()
}

type Combinable = string | number;

type Numeric = number | boolean;

type Universal = Combinable & Numeric;

// functions overload
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add (a: Combinable, b: Combinable) {
    // this is a type guard
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b
}

const result = add('Max', 'Swharz');
result.split(' ');

const fetchedUserData = {
    id: 'u1',
    name: 'Max',
    job: {
        title: 'CEO',
        description: 'My own company'
    }
}

console.log(fetchedUserData?.job?.title);

const userInput = undefined;

// const storedData = userInput ?  userInput : 'DEFAULT';
// will be replaced by nullish coalescing
const storedData = userInput ?? 'DEFAULT' 
console.log(storedData)

// type UnknownEmployee = Employee | Admin;

// function printEmployeeInformation (emp: UnknownEmployee) {
//     console.log('Name: ' + emp.name);
//     if ('privileges' in emp) {
//         console.log('Privileges: ' + emp.privileges);
//     }
//     if ('startDate' in emp) {
//         console.log('Start Date: ' + emp.startDate);
//     }
// }

// printEmployeeInformation({name: 'Manu', startDate: new Date()})

// class Car {
//     drive () {
//         console.log('Driving...');
//     }
// }

// class Truck {
//     drive () {
//         console.log('Driving a truck')
//     }

//     loadCargo(amount: number) {
//         console.log('Loading cargo ...' +  amount)
//     }
// }

// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// function useVehicle(vehicle: Vehicle) {
//     vehicle.drive();

//     if (vehicle instanceof Truck) {
//         vehicle.loadCargo(1000);
//     }
// }

// useVehicle(v1);
// useVehicle(v2);

// interface Bird {
//     type: 'bird';
//     flyingSpeed: number;
// }

// interface Horse {
//     type: 'horse';
//     runningSpeed: number;
// }

// type Animal = Bird | Horse;

// function moveAnimal(animal: Animal) {
//     let speed;
//     switch(animal.type) {
//         case 'bird':
//             speed = animal.flyingSpeed;
//             break;
//         case 'horse':
//             speed = animal.runningSpeed;
//     }
//     console.log('Moving at speed: ' + speed);
// }

// moveAnimal({type: 'bird', flyingSpeed: 10});

// // Example version of type casting
// // const userInputElement = <HTMLInputElement> document.getElementById('user-input')!;

// // Another version of type casting in typescript
// // The exclamation mark allows us to tell typescript that the expression in front of it will never yield null
// // const userInputElement = <HTMLInputElement> document.getElementById('user-input')! as HTMLInputElement;

// // Last example
// const userInputElement = document.getElementById('user-input')

// if (userInputElement) {
//     (userInputElement as HTMLInputElement).value = 'Hi there'
// }

// // index defined properties 
// interface ErrorContainer {
//     [prop: string]: string;
// }

// const errorBag: ErrorContainer = {
//     email: 'Not a valid email',
//     name: 'Error in name'
// }

