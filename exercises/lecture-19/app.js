//  task 1
let str1 = 'I\'m a string!';
let str2 = "I'm a string!";

// Довжина рядків str1 i str2 однаковa, але у рядку str1 використовується символ зворотної косої риски для екранування символу одинарних лапок у рядку

if (str1.length == str2.length) {
    console.log('Недбало рівні:)')
} else{
    console.log('Не рівні:(')
}

if (str1.length === str2.length){
    console.log('Строго рівні:|')
} else{
    console.log('Не рівні:(')
}

//task 2
let string5 = 'Hello World';
console.log(string5[0]); 
console.log(string5.charAt(0));

//task 3
let str3 = "Hello Javascript";
console.log(str3.indexOf('J'));

//task 4
console.log((str3[str3.length -1]));
console.log(str3.charAt(str3.length - 1));

//task 5
function lastChar1(str3) {
    return str3.charAt(str3.length -1);
}
console.log(lastChar1(str3));

function lastChar2(str3) {
    return str3.slice(-1);
}
console.log(lastChar2(str3));

function lastChar3(str3) {
    return str3[str3.length -1];
}
console.log(lastChar3(str3));

//task 6
let a = 'When candles are out,';
let b = 'all cats are grey.';
console.log(a.concat(' ').concat(b));

//task 7
let fact = "Fifteen is the same as"
let a1 = 5;
let b1 = 10;
console.log(fact + (' ') + (a1+b1));

//task 8
let firstName = "Tom";
let lastName = "Cat";
function getFullName() {
    return firstName + " " + lastName;
}
console.log(getFullName(firstName, lastName));

//task 9
function greeting(){
    return "Hello, " + getFullName(firstName, lastName) + "!";
}
console.log(greeting(firstName, lastName));

//task 10
let template = "<div><h1>" + "Hello, " + greeting(firstName, lastName) + "!" + "</h1></div>";
console.log(template); 

//task 11
let string1 = "  The name of our game  ";

// Потрібно отримати такі результати
console.log(string1.trim());
// "The name of our game"
console.log(string1.trimStart());
// "The name of our game  "
console.log(string1.trimEnd());
// "  The name of our game"


const phoneNumber = '\t  555-123\n ';
// Потрібно отримати такі результати
console.log(phoneNumber.trim()); 
// => '555-123'
console.log(phoneNumber.trimStart()); 
// => '555-123 \n'

//task 12
let sentence = 'Always look on the bright side of life';
console.log(sentence.includes('look up'));
console.log(sentence.includes('look on'));
console.log(sentence.includes('look on', 8));

//task 13
let sentence1 = 'Always look on the bright side of life';
console.log(sentence1.indexOf('l'));
console.log(sentence1.indexOf('l', 3));
console.log(sentence1.indexOf('L'));

//task 14
let sentence2 = 'Always look on the bright side of life';
console.log(sentence2.substring(7));
console.log(sentence2.substring(0, 6));
console.log(sentence2.substring(7, 11));

//task 15
const userName = /^[a-z0-9_-]{8,16}$/

//task 16
function validation(email) {
    const templateEmail = /^[a-z0-9_\-\]*\@[a-zA-Z0-9_\-\.]+\.[a-zA-Z]{2,}$/; 

    let check = email.match(templateEmail);
    if (templateEmail.test(email)) {
        console.log("Email is valid", check);
        return true;
    } else {
        console.log("Email is not valid");
        return false;
    }
}

validation('test.email@gmail.com');
validation('testmailcom');

//task 17
let sentence3 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in sapien eu velit eleifend ullamcorper eget vitae nulla. Aenean euismod purus sed neque dictum, nec lobortis ante faucibus.';
function truncateText(sentence3) {
    return sentence3.substring(0, 50);
}
console.log(truncateText(sentence3));

function truncateText2 (sentence3) {
        return sentence3.substr(0, 50);
}
console.log(truncateText2(sentence3));
