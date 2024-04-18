const classes = ['first', 'second', 'third', 'fourth'];

//task 1
const h1 = document.getElementsByTagName('h1');
console.log("Type of the Element:", typeof h1); 
console.log("Length of the Element:", h1.length); 

for (let i = 0; i < h1.length; i++) {
    console.log("Element:", h1[i]);
}

//task 2
const p1 = document.querySelector('#p1');
p1.style.backgroundColor = "gold";

//task 3
const p2 = document.querySelector('#p2');
p2.style.cssText = "background-color: gold; color: blue; font-size: 2rem;";

//task 4
const p3 = document.querySelector('#p3');
p3.classList.add('third');

//task 5
const p4 = document.querySelector('#p4');
p4.classList.add('fourth', 'border');

//task 6
const containers = document.querySelectorAll('.container');
for (let i = 0; i < containers.length; i++) {
  const a = containers[i].firstElementChild;
  console.log("First element of container", a);
}

//task 7
const container = document.querySelectorAll('.container');
for (let i = 0; i < container.length; i++) {
  const b = container[i].firstElementChild.textContent;
  console.log("The content of the first element of container:", b);
}

//task 8
const headers = document.querySelectorAll('.container header');
const classes1 = ['first', 'second', 'third', 'fourth'];
for (let i = 0; i < headers.length; i++) {
    const id = headers[i].firstElementChild.id;
    const classN = headers[i].firstElementChild.classList;
    const innerText = headers[i].firstElementChild.innerText;
    if (i !== 0) {
        headers[i].innerHTML = `<h${i+1} class='${classN}' id='${id}'>${innerText}</h${i+1}>`;        
    }
    headers[i].firstElementChild.classList.add(classes1[i]);
    console.log(headers[i]);}