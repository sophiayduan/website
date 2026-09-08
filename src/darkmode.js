let darkMode = localStorage.getItem('darkMode'); 

const darkModeToggle = document.querySelector('#dark-mode-toggle');

const mode = document.getElementById('mode');

const enableDarkMode = () => {
  document.body.classList.add('darkmode');
  localStorage.setItem('darkMode', 'enabled');

}

const disableDarkMode = () => {
  document.body.classList.remove('darkmode');
  localStorage.setItem('darkMode', null);
}

if (darkMode === 'enabled') {
    
  enableDarkMode();
  mode.src = '/images/light.png';
  
}


darkModeToggle.addEventListener('click', () => {
  darkMode = localStorage.getItem('darkMode'); 
  
  if (darkMode !== 'enabled') {
    enableDarkMode();
    mode.src = '/images/light.png';

  } else {  
    disableDarkMode(); 
        mode.src = '/images/dark.png';

  }
});
