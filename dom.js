// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title = 121;
// console.log(document.doctype)
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// console.log(document.forms);
// console.log(document.links);

// GETELEMENTBYID
// console.log(document.getElementById('header-title'));

// const headerTitle = document.getElementById('header-title');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerHTML = "Goodbye";

// console.log(headerTitle.innerText)

// headerTitle.innerHTML = '<h3>Hello</h3>';

// changing style
// const header = document.getElementById('main-header');
// header.style.border = 'solid 3px #000';

// GetElementByClassName

// const addItems = document.getElementById('addItems');
// addItems.style.fontWeight = "900";
// addItems.style.color = 'green';

// const items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';
// items[2].style.background = 'green';

// for (let i = 0; i < items.length; i++) {
//     items[i].style.fontWeight = 'bold';
// }


// getElementsByTagName 

// const li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';
// li[2].style.background = 'green';

// for (let i = 0; i < li.length; i++) {
//     li[i].style.fontWeight = 'bold';
// }


// querySelector

// const header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// const input = document.querySelector('input');
// input.value = 'Hello World';

// const submit = document.querySelector('input[type="submit"]');
// submit.value = 'SEND'

// const item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// const lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';  

// const secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.backgroundColor = 'green';  

// const thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.visibility = 'hidden';  


// querySelectorAll 
// const titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent = 'Hello';

// const li = document.querySelectorAll('li');
// li[1].style.color = 'green';

// const odd = document.querySelectorAll('li:nth-child(odd)');

// for (let i = 0; i < odd.length; i++) {
//     odd[i].style.backgroundColor = 'green';
// }


// Traversing the DOM

const itemList = document.querySelector('#items');
// parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode)

// parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement)

// childNode 
// console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

// firstChild 
// console.log(itemList.firstChild)
// firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello';

// lastChild 
// console.log(itemList.lastChild)
// lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello';

// nextSiblings
// console.log(itemList.nextSibling);
// nextElementSibling
// console.log(itemList.nextElementSibling);

// previousSibling
// console.log(itemList.previousSibling);
// previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';

// createElement

// Create a div
const newDiv = document.createElement('div');

// Add class
newDiv.className = 'hello';
console.log(newDiv);

// Add id
newDiv.id = 'hello1';

// add attribute
newDiv.setAttribute('title', 'hello Div');

// create text node
const newDivText = document.createTextNode('Hello World');

// add text to div
newDiv.appendChild(newDivText)

const container = document.querySelector('header .container');
const h1 = document.querySelector('header h1');

console.log(newDiv);

newDiv.style.fontSize = '45px';

container.insertBefore(newDiv, h1);

// Create a list
const newList = document.createElement('li');
newList.className = 'list-group-item';
newList.textContent = 'Hello World';

console.log(newList);

itemList.insertBefore(newList, itemList.firstElementChild);