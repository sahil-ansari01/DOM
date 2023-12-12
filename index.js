const form = document.getElementById('addForm');
const itemList = document.getElementById('items');
const filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// addItem
function addItem(e) {
    e.preventDefault();

    // Get input value
    const newItem = document.getElementById('item').value;

    // Create new li element
    const li = document.createElement('li');

    // Add class
    li.className = 'list-group-item';

    // add text node
    const textNode = document.createTextNode(newItem);
    
    // append 
    li.appendChild(textNode);

    // Create edit button element
    const edit = document.createElement('button');
    edit.className = 'btn btn-sm float-right edit';
    edit.setAttribute('style', 'margin-left: 15px;');
    edit.appendChild(document.createTextNode('Edit'));
    li.appendChild(edit);
    
    // Create del button element
    const del = document.createElement('button');
    del.className = 'btn btn-danger btn-sm float-right delete';
    del.appendChild(document.createTextNode('X'));
    li.appendChild(del);

    
    // append li to list
    itemList.appendChild(li);

}

// Remove item
function removeItem(e) {
    if(e.target.classList.contains('delete')) {
        if (confirm('Are you sure?')) {
            const li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// Filter items
function filterItems() {

}