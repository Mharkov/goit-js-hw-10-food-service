const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

let bodyBackground = document.querySelector('body');
let inputChange = document.querySelector('.theme-switch__toggle');

if (localStorage.getItem('Theme') === Theme.DARK) {
  bodyBackground.setAttribute('class', Theme.DARK);
  inputChange.checked = true;
} else {
  bodyBackground.setAttribute('class', Theme.LIGHT);
}

inputChange.addEventListener('click', OnTagsClick);

function OnTagsClick() {
  const check = inputChange.checked;

  if (check) {
    bodyBackground.setAttribute('class', Theme.DARK);
    localStorage.setItem('Theme', Theme.DARK);
  } else {
    bodyBackground.setAttribute('class', Theme.LIGHT);
    localStorage.setItem('Theme', Theme.LIGHT);
  }
}
