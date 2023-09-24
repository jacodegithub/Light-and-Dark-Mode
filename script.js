const toggleSwitch = document.querySelector('input[type="checkbox"]');
const toggleIcon = document.getElementById('toggle-icon')
const nav = document.getElementById('nav')
const textBox = document.getElementById('text-box')


// DARKMODE FUNCTION
function darkAndLightMode(isDark) {
    // console.log(toggleIcon.children)
    nav.style.backgroundColor = isDark ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)'
    textBox.style.backgroundColor = isDark ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)'
    toggleIcon.children[0].textContent = isDark ? 'Dark Mode' : 'Light Mode'
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon')
}

// LIGHTMODE FUNCTION 
// function darkAndLightMode(isLight) {
//     nav.style.backgroundColor = 
//     textBox.style.backgroundColor = 
//     toggleIcon.children[0].textContent = 'Light Mode'
//     toggleIcon.children[1].classList.remove('fa-moon')
//     toggleIcon.children[1].classList.add('fa-sun')
// }

// SWITCHING THEME DYNAMICALLLY
function switchTheme(event) {
    if(event.target.checked) {
        localStorage.setItem('theme', 'dark')
        document.documentElement.setAttribute('data-theme', 'dark')
        darkAndLightMode(true);
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light')
        darkAndLightMode(false);
    }
}

// EVENT LISTENER
toggleSwitch.addEventListener('change', switchTheme)

let currentTheme = localStorage.getItem('theme')

if(currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme)

    if(currentTheme === 'dark') {
        toggleSwitch.checked = true;
        darkAndLightMode();
    }
}