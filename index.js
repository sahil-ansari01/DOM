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

    // Create del button element
    const del = document.createElement('button');
    del.className = 'btn btn-danger btn-sm float-right delete';
    del.appendChild(document.createTextNode('X'));
    li.appendChild(del);

    // Create edit button element
    const edit = document.createElement('button');
    edit.className = 'btn btn-sm float-right edit';
    edit.setAttribute('style', 'margin-right: 20px;');
    edit.appendChild(document.createTextNode('Edit'));
    li.appendChild(edit);
    
   
    
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
function filterItems(e) {
    // convert text to lowercase
    const text = e.target.value.toLowerCase();

    // Get li's
    const items = itemList.getElementsByTagName('li');

    // convert to an array
    Array.from(items).forEach(function(item){
        const itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    })
}