function toggleLanguageMenu() {
    var languageMenu = document.querySelector('.language-menu');
    languageMenu.classList.toggle('open');
}

function changeLanguage(language) {
    var languageButton = document.querySelector('.language-button');
    var selectedLanguageItem = document.querySelector('.language-menu-item.selected');
    if (selectedLanguageItem) {
        selectedLanguageItem.classList.remove('selected');
    }

    var elementsRU = document.querySelectorAll('.ru');
    var elementsEN = document.querySelectorAll('.en');

    elementsRU.forEach(function (el) {
        el.style.display = (language === 'RU') ? 'inline' : 'none';
    });

    elementsEN.forEach(function (el) {
        el.style.display = (language === 'EN') ? 'inline' : 'none';
    });

    if (language === 'RU') {
        languageButton.textContent = 'RU';
    } else if (language === 'EN') {
        languageButton.textContent = 'EN';
    }

    var newSelectedLanguageItem = document.querySelector('.language-menu-item.' + language);
    newSelectedLanguageItem.classList.add('selected');


    toggleLanguageMenu(); 
}

function fadeOut() {
    document.body.classList.add('fade-out');
    setTimeout(function () {
        window.location.href = "services.html";
    }, 500); 
}


function toggleMenu() {
    var menu = document.querySelector('.side-menu');
    var menuButton = document.querySelector('.menu-button');

    menu.classList.toggle('open');
    menuButton.classList.toggle('open');
}

document.addEventListener('click', function (event) {
    var languageMenu = document.querySelector('.language-menu');
    var languageButton = document.querySelector('.language-button');

    if (!languageMenu.contains(event.target) && !languageButton.contains(event.target)) {
        languageMenu.classList.remove('open');
    }
});

function closeMenu() {
    var sideMenu = document.querySelector('.side-menu');
    sideMenu.classList.remove('open');
}


function toggleMenu() {
    var menu = document.querySelector('.side-menu');
    var menuButton = document.querySelector('.menu-button');

    menu.classList.toggle('open');
    menuButton.classList.toggle('open');
}

function closeMenu() {
    var sideMenu = document.querySelector('.side-menu');
    sideMenu.classList.remove('open');
}

function toggleLanguageMenu() {
    var languageMenu = document.querySelector('.language-menu');
    languageMenu.classList.toggle('open');
}

document.addEventListener('click', function (event) {
    var languageMenu = document.querySelector('.language-menu');
    var languageButton = document.querySelector('.language-button');
    var menu = document.querySelector('.side-menu');
    var menuButton = document.querySelector('.menu-button');
    var closeButton = document.querySelector('.close-button');

    if (!languageMenu.contains(event.target) && !languageButton.contains(event.target)) {
        languageMenu.classList.remove('open');
    }

    if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
        menu.classList.remove('open');
        menuButton.classList.remove('open');
        closeButton.classList.remove('open');
        closeMenu();
    }
});

function changeLanguage(language) {
    var languageButton = document.querySelector('.language-button');
    var selectedLanguageItem = document.querySelector('.language-menu-item.selected');
    if (selectedLanguageItem) {
        selectedLanguageItem.classList.remove('selected');
    }

    var elementsRU = document.querySelectorAll('.ru');
    var elementsEN = document.querySelectorAll('.en');

    elementsRU.forEach(function (el) {
        el.style.display = (language === 'RU') ? 'inline' : 'none';
    });

    elementsEN.forEach(function (el) {
        el.style.display = (language === 'EN') ? 'inline' : 'none';
    });

    if (language === 'RU') {
        languageButton.textContent = 'RU';
    } else if (language === 'EN') {
        languageButton.textContent = 'EN';
    }

    var newSelectedLanguageItem = document.querySelector('.language-menu-item.' + language);
    newSelectedLanguageItem.classList.add('selected');

    toggleLanguageMenu();
}

function fadeOut() {
    document.body.classList.add('fade-out');
    setTimeout(function () {
        window.location.href = "services.html"; 
    }, 500); 
}







