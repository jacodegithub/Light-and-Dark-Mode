const toggleSwitch = document.querySelector('input[type="checkbox"]');
const toggleIcon = document.getElementById('toggle-icon')
const nav = document.getElementById('nav')
const textBox = document.getElementById('text-box')


// DARKMODE FUNCTION
function darkMode() {
    // console.log(toggleIcon.children)
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)'
    textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)'
    toggleIcon.children[0].textContent = 'Dark Mode'
    toggleIcon.children[1].classList.remove('fa-sun')
    toggleIcon.children[1].classList.add('fa-moon')
}

// LIGHTMODE FUNCTION 
function lightMode() {
    nav.style.backgroundColor = 'rgb(255 255 255 / 50%)'
    textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)'
    toggleIcon.children[0].textContent = 'Light Mode'
    toggleIcon.children[1].classList.remove('fa-moon')
    toggleIcon.children[1].classList.add('fa-sun')
}

// SWITCHING THEME DYNAMICALLLY
function switchTheme(event) {
    if(event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark')
        darkMode();
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light')
        lightMode();
    }
}

// EVENT LISTENER
toggleSwitch.addEventListener('change', switchTheme)