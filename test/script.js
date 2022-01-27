const list_obj = document.querySelector('.list');

// objects.forEach((item, i) => {
//   const new_obj = document.createElement('li');
//   new_obj.innerText = item.name;
//   new_obj.setAttribute('style', `color: ${item.color};`);
//   list_obj.appendChild(new_obj);
// })


const objects = [
  {
    id: 0,
    name: 'Won',
    color: 'pink',
  },
  {
    id: 1,
    name: 'Nan Young',
    color: 'blue',
  },
  {
    id: 2,
    name: 'Other',
    color: 'red',
  },
]

const list_items = document.querySelectorAll('.list-item');

list_items.forEach((item, i) => {
  item.setAttribute('style', `color: ${objects[i].color};`);
})