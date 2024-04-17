//task 1
const person ={
    name: 'Inna',
    age: 36,
}
console.log(person.name, person.age)

//task 2
const person2 = {
    name: {
        firstName: 'James',
        lastName: 'Bond'
    },
    age: 37,

//task 3
    bio:function() {
        return `Information: ${this.name.firstName} ${this.name.lastName}, ${this.age}`;
    },

//task 4
    introduceSelf() {
        return `Hi! I´m ${this.name.firstName}`;
    }
}

console.log(person2.name.firstName, person2.name.lastName, person2.age);
console.log(person2.bio());
console.log(person2.introduceSelf());

//task 5
function createPerson(name) {
    return {
        name: name,
        introduceSelf() {
            return console.log(`Hi! I'm ${this.name}`);
        },
    };
}

let a = createPerson('Martin');
let b = createPerson('Martina');

a.introduceSelf();
b.introduceSelf();

//task 6
function Person(name) {
    this.name = name;
    this.introduceSelf =
       function introduceSelf() {
          return `Hi I'm ${this.name}`
        }
      }
    const c = new Person("Mary");
    const d = new Person("Tom");
    
    console.log(c.introduceSelf());
    console.log(d.introduceSelf());
//6.1
    console.log(Object(c, "prop"));

//task 7
const DirtyMartini = {
    gin: 6,
    dryVermouth: 1,
    brineFromOliveJar: 1,
    stuffedGreenOlives: 4,
    avoirdupois: 28.4131,

    excuse_my_french() {
        return `ingrédients:
        ${this.gin * this.avoirdupois} ml de gin
        ${this.dryVermouth} trait de vermouth sec (0.0351951ml)
        ${this.avoirdupois} ml de saumure du pot d'olive
        ${this.stuffedGreenOlives} olives vertes farcies`
    },
    
    english_please() {
        return `ingedients:
        ${this.gin} fluid ounces gin
        ${this.dryVermouth} trait de vermouth sec (0.0351951ml)
        ${this.brineFromOliveJar} fluid ounce brine from olive jar
        ${this.stuffedGreenOlives} stuffed green olives`
    }
}
console.log(DirtyMartini.excuse_my_french());
console.log(DirtyMartini.english_please());
