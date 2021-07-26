import './sass/main.scss';
import createDishMarkup from '../src/templates/dish.hbs';
import menu from './menu.json';


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
  
  if (refs.body.classList.replace(Theme.DARK, Theme.LIGHT)) {
 
    localStorage.setItem('isDarkTheme', false);
    return;
  }
  refs.body.classList.replace(Theme.LIGHT, Theme.DARK)
  localStorage.setItem('isDarkTheme', true);
}

function onDocumentLoad() {
  
  if (localStorage.getItem('isDarkTheme') === 'true') {
    refs.body.classList.add(Theme.DARK);
    refs.switch.defaultChecked = true;
  }
  else{refs.body.classList.add(Theme.LIGHT)}
}

refs.listMenu.innerHTML = createDishMarkup(menu);
