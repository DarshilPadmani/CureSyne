const itemList = document.getElementById('item-list');
const items = itemList.getElementsByTagName('li');

for (const item of items) {
  item.addEventListener('click', () => {
    // Remove 'selected' class from all items
    for (const item of items) {
      item.classList.remove('selected');
    }
    
    // Add 'selected' class to the clicked item
    item.classList.add('selected');
  });
}

