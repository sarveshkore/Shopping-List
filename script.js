// document.addEventListener('DOMContentLoaded', () => {
//     const itemForm = document.getElementById('item-form');
//     const itemInput = document.getElementById('item-input');
//     const itemList = document.getElementById('item-list');
//     const filterInput = document.getElementById('filter');
//     const clearButton = document.getElementById('clear');
  
//     // Load items from local storage
//     let items = JSON.parse(localStorage.getItem('items')) || [];
//     items.forEach((item) => addItemToList(item));
  
//     // Add item to the list
//     itemForm.addEventListener('submit', (e) => {
//       e.preventDefault();
//       if (itemInput.value.trim()) {
//         addItemToList(itemInput.value.trim());
//         items.push(itemInput.value.trim());
//         localStorage.setItem('items', JSON.stringify(items));
//         itemInput.value = '';
//       }
//     });
  
//     // Add item to the list
//     function addItemToList(item) {
//       const li = document.createElement('li');
//       li.className = 'items__item';
//       li.textContent = item;
//       li.innerHTML += `<button class="remove-item btn-link text-red" data-item="${item}">
//               <i class="fa-solid fa-xmark"></i>
//             </button>`;
//       itemList.appendChild(li);
//     }
  
//     // Remove an item from the list
//     itemList.addEventListener('click', (e) => {
//       if (e.target.classList.contains('remove-item')) {
//         const item = e.target.dataset.item;
//         items = items.filter((i) => i !== item);
//         localStorage.setItem('items', JSON.stringify(items));
//         e.target.parentElement.remove();
//       }
//     });
// // Remove an item from the list
// itemList.addEventListener('click', (e) => {
//     if (e.target.classList.contains('remove-item')) {
//       const item = e.target.dataset.item;
//       items = items.filter((i) => i !== item);
//       localStorage.setItem('items', JSON.stringify(items));
//       e.target.parentElement.remove();
//     }
//   });
  
//     // Filter items
//     filterInput.addEventListener('input', () => {
//       const text = filterInput.value.toLowerCase().trim();
//       if (text) {
//         Array.from(itemList.children).forEach((item) => {
//           if (item.textContent.toLowerCase().includes(text)) {
//             item.style.display = '';
//           } else {
//             item.style.display = 'none';
//           }
//         });
//       } else {
//         Array.from(itemList.children).forEach((item) => {
//           item.style.display = '';
//         });
//       }
//     });
  
//     // Clear all items
//     clearButton.addEventListener('click', () => {
//       items = [];
//       localStorage.setItem('items', JSON.stringify(items));
//       itemList.innerHTML = '';
//     });
//   });


document.addEventListener('DOMContentLoaded', () => {
  const itemForm = document.getElementById('item-form');
  const itemInput = document.getElementById('item-input');
  const itemList = document.getElementById('item-list');
  const filterInput = document.getElementById('filter');
  const clearButton = document.getElementById('clear');

  // Load items from local storage
  let items = JSON.parse(localStorage.getItem('items')) || [];
  items.forEach((item) => addItemToList(item));

  // Add item to the list
  itemForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (itemInput.value.trim()) {
      const newItem = itemInput.value.trim();
      addItemToList(newItem);
      items.push(newItem);
      localStorage.setItem('items', JSON.stringify(items));
      itemInput.value = '';
    }
  });

  // Remove an item from the list
  itemList.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove-item')) {
      const item = e.target.dataset.item;
      const listItem = e.target.closest('li');
      const index = items.indexOf(item);
      if (index !== -1) {
        items.splice(index, 1);
        localStorage.setItem('items', JSON.stringify(items));
        listItem.remove();
      }
    }
  });

  // Filter items
  filterInput.addEventListener('input', () => {
    const text = filterInput.value.toLowerCase().trim();
    Array.from(itemList.children).forEach((item) => {
      const itemName = item.textContent.trim().toLowerCase();
      if (itemName.includes(text)) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    });
  });

  // Clear all items
  clearButton.addEventListener('click', () => {
    items = [];
    localStorage.removeItem('items');
    itemList.innerHTML = '';
  });

  // Add item to the list
  function addItemToList(item) {
    const li = document.createElement('li');
    li.className = 'items__item';
    li.textContent = item;
    li.innerHTML += `<button class="remove-item btn-link text-red" data-item="${item}">
            <i class="fa-solid fa-xmark"></i>
          </button>`;
    itemList.appendChild(li);
  }
});
