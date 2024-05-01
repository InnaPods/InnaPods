// Масив кольорів складається з 3 елементів. 
const colors = ['blue', 'green', 'white'];

// 1
function iter(item) {
    console.log(item);
}
colors.forEach(iter);

//2.1
function iterate(item, index) {
    console.log(`${item} has index ${index}`);
}
colors.forEach(iterate);

//2.2
function iterate1(item, index, array) {
    console.log(`${item} has index ${index}`);
    if(index === array.length-1) {
        console.log('The last iteration!');
    }
}
colors.forEach(iterate1);

//3
const letters = ['a', 'b', 'c'];
function iterate(letter) {
    console.log(this === window);
}
letters.forEach(iterate);

//4
const Numbers = [22, 3, 4, 10];
let allEven = true;
Numbers.forEach (function(number) {
    if (number % 2 === 1) {
        allEven = false;
    }
});
console.log(allEven);

//5
const numbers = [22, 3, 4, 10];
const allEven1 = numbers.every(function(number) {
    return number % 2 === 0;
});
console.log(allEven1);

//6
const fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];
const i = fruits.findIndex(fruit => fruit === "blueberries");
console.log(i);

//7
const arr = [7, 33, 47, 99, 2, 103, 79];
const findEl = arr.find(el => el > 10);
console.log(findEl);

//8
const array = [1, 2, 3, 4, 5];
const pairEl = (el) => el % 2 === 0;
console.log(array.some(pairEl));

//9
const numbers1 = [1, 30, 4, 21, 100000];
numbers1.sort(function (a, b) {
    return a - b;
});
console.log(numbers1);