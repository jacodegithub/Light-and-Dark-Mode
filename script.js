const toggleSwitch = document.querySelector('input[type="checkbox"]');


// SWITCHING THEME DYNAMICALLLY
function switchTheme(event) {
    if(event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark')
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light')
    }
}

// EVENT LISTENER
toggleSwitch.addEventListener('change', switchTheme)