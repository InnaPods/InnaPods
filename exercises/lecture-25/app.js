const list = ['html', 'css', 'javascript', 'react.js'];

//1
const ul = document.createElement('ul');

list.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    ul.appendChild(li);
});
document.body.appendChild(ul);

//2
const listWithHref = [
    {'html': "https://developer.mozilla.org/en-US/docs/Web/HTML"}, 
    {'css': "https://developer.mozilla.org/en-US/docs/Web/CSS"}, 
    {'javascript': "https://developer.mozilla.org/en-US/docs/Web/JavaScript"}, 
    {'react.js': "https://react.dev"}
];
const ol = document.createElement('ol');
listWithHref.forEach((item) => {
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.href = Object.values(item)[0];
  a.textContent = Object.keys(item)[0];
  li.appendChild(a);
  ol.appendChild(li);
});
document.body.appendChild(ol);

//3
const students = [
    {'firstName': 'Tom', 'lastName': 'Cat', 'degree': 230},
    {'firstName': 'Nary', 'lastName': 'Ann', 'degree': 336},
    {'firstName': 'John', 'lastName': 'Doe', 'degree': 400},
    {'firstName': 'James', 'lastName': 'Bond', 'degree': 700},
  ]
  
  const t = document.createElement('table');
  t.innerHTML = `<tr styke="background-color: blue; color: azure;">
                      <th>FirstName</th>
                      <th>lastName</th>
                      <th>degree</th>
                      </tr>`
  students.forEach(student => {
    t.innerHTML +=`<tr>
                          <td>${student.firstName}</td>
                          <td>${student.lastName}</td>
                          <td>${student.degree}</td>
                      </tr>`
  });
  
  document.body.appendChild(t);