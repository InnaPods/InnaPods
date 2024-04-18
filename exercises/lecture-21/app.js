//task 1
const fruits = 'apple banana cantaloupe blueberries grapefruit'.split(' ');
console.log(fruits)

//task 2
for (let i=0; i<fruits.length; i++){
    console.log(fruits[i])
}

//task 3
let i = 0;
while(i<fruits.length){
    console.log(fruits[i]);
    i++
}

//task 4
let n = 0;
do{
    console.log(fruits[n]);
    n++;
}while(n<fruits.length)

//task 5
for(const fruit of fruits){
    console.log(fruit)
}

//task 6
const Numbs = [1,2,3,4,5,6,7,8,9,10];
for (let i = 0; i < Numbs.length; i++) {
    if (Numbs[i] % 2 === 0) {
        console.log(Numbs[i]);
    }
}
console.log(Numbs)

//task 7
const names = ['Batman'];
names.push('Joker')
console.log(names)

//task 8
const names1 = ['Batman'];
names1.unshift('Joker')
console.log(names1)

//task 9
const names2 = ['Batman', 'Joker', 'Bane'];
names2.unshift('Catwoman');
console.log(names2)

//task 10
const names3 = ['Batman', 'Joker', 'Bane'];
const names4 = ['Catwoman', ...names3];
console.log(names4);

//task 11
const names5 = ['Batman', 'Joker', 'Bane'];
names5.splice(1, 0, 'Catwoman');
console.log(names5);

//task 12
const names6 = ['Batman', 'Catwoman', 'Joker', 'Bane'];
names6.splice(1, 2);
console.log(names6);

//task 13
const names7 = ['Batman', 'Catwoman', 'Joker', 'Bane'];
names7.splice(1, 2, 'Alfred');
console.log(names7);

//task 14
const names8 = ['Batman', 'Catwoman', 'Joker', 'Bane'];
if (!names8.includes('Alfred')) {
    names8.push('Alfred');
}
console.log(names8);

//task 15
const names9 = ['Batman', 'Catwoman', 'Joker', 'Bane'];
if (names9.includes('Alfred')) {
    const i = names9.indexOf('Alfred');
    names9.splice(i, 1);
}
console.log(names9);