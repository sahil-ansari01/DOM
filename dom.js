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

const li = document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[1].textContent = 'Hello 2';
li[1].style.fontWeight = 'bold';
li[1].style.backgroundColor = 'yellow';
li[2].style.background = 'green';

for (let i = 0; i < li.length; i++) {
    li[i].style.fontWeight = 'bold';
}
