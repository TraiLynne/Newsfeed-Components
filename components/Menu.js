import menuItems from '../data/MenuData';


function menuMaker(items){
  let menuButton = document.querySelector('.menu-button');
  let dynamicClass = 'menu--open';
  let child;

  let menu = document.createElement('div');
  menu.classList.add('menu');

  let container = document.createElement('ul');
  menu.appendChild(container);

  items.forEach(i => {
    child = document.createElement('li');
    child.innerText = i;
    container.appendChild(child);
  });

  menuButton.addEventListener('click', e => {
    e.preventDefault();

    menu.classList.contains(dynamicClass) ?
      menu.classList.remove(dynamicClass)
      : menu.classList.add(dynamicClass);
  });

  return menu;
};

let header = document.querySelector('.header');
header.appendChild(menuMaker(menuItems));