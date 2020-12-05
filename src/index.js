import itemsElement from './menu.json';
import itemsTemplate from './templates/templates.hbs';
import './changeTheme.js';
import './styles.css';

const menu = document.querySelector('.js-menu');
const markup = itemsTemplate(itemsElement);
menu.insertAdjacentHTML('beforeend', markup);
