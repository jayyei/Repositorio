// Code goes here!
// import _ from 'lodash';

// declare var GLOBAL: any

// console.log(_.shuffle([1,2,3]));

// console.log(GLOBAL)

import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import {Product} from './product.model';
import { validate} from 'class-validator';


const products = [
    {title: 'A carpet', price: 29.99},
    {title: 'A book', price: 10.99}
];
// const p1 = new Product('A book', 12.99);

const loadedProducts = products.map(prod => {
    return new Product(prod.title, prod.price)
})

for (const prod of loadedProducts) {
    console.log(prod.getInformation())
}

// or simply use

const loadedProductsPlain = plainToClass(Product, products);
for (const prod of loadedProductsPlain) {
    console.log(prod.getInformation())
}

const newProd = new Product('', -5.9)
validate(newProd).then(errors => {
    if (errors.length > 0) {
        console.log('Validation errors');
        console.log(errors);
    } else {
        console.log(newProd.getInformation())
    }
});