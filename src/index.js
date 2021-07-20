import './sass/main.scss';
import dish from '../src/templates/dish.hbs';
import menu from './menu.json';

console.log(dish(menu[0]));
const refs = {
  switch: document.querySelector('#theme-switch-toggle'),
  body: document.querySelector('body'),
  listMenu: document.querySelector('.js-menu'),
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

refs.switch.addEventListener('change', onSwitch);
document.addEventListener('DOMContentLoaded', onDocumentLoad);

function onSwitch() {


  if (refs.body.classList.contains(Theme.DARK)) {
    refs.body.classList.remove(Theme.DARK);
    refs.body.classList.add(Theme.LIGHT);
    localStorage.setItem('isDarkTheme', false);
    return;
  }
  refs.body.classList.remove(Theme.LIGHT);
  refs.body.classList.add(Theme.DARK);
  localStorage.setItem('isDarkTheme', true);

}

function onDocumentLoad() {
  if (localStorage.getItem('isDarkTheme') === 'true') {
    refs.body.classList.add(Theme.DARK);
    refs.switch.defaultChecked = true;
  }
  
}

function createDishMarkup(menu) {
  return menu.map(dish).join('');
}

refs.listMenu.innerHTML = createDishMarkup(menu);
