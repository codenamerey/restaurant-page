import './style.css';
import home from './home';
import about from './about';
import contact from './contact';

function setPageBase() {
    const aside = document.createElement('aside');
    aside.id = 'image-container';
    aside.appendChild(createTitle('Ratatouille'));
    aside.appendChild(createContentSpace());
    return aside;
}


function createTitle(title) {
    const heading = document.createElement('h1');
    heading.id = 'title';
    heading.textContent = title;
    return heading;
}

function createContentSpace() {
    const main = document.createElement('main');
    main.id = 'content';
    main.appendChild(createNavbar());
    main.appendChild(createContentDiv());
    return main;
}

function createContentDiv() {
    const div = document.createElement('div');
    div.id = 'content-div';
    return div;
}

function createNavbar() {
    let navItems = ['Home', 'About', 'Contact Information'];
    const nav = document.createElement('nav');
    nav.id = 'nav-bar';
    const ul = document.createElement('ul');
    navItems.forEach((item) => {
        let navItem = document.createElement('li');
        navItem.textContent = item;
        if(item == 'Home') {
            navItem.className = 'active';
        }
        navItem.addEventListener('click', contentChange);
        ul.appendChild(navItem);
    });
    nav.appendChild(ul);
    return nav;
}

function createParagraph(text) {
    const p = document.createElement('p');
    p.innerHTML = text;
    return p;
}

function contentChange(e) {
    const lists = document.querySelectorAll('li');
    const menuItem = (e.target) ? e.target.textContent : 'Home';
    lists.forEach((list) => {
        if(list.textContent == menuItem) {
            if(list.classList.contains('active')) return;
            list.classList.add('active');
            return;
        }
        list.classList.remove('active');
    });
    let activeNav = document.querySelector('.active');
    if(!activeNav) return;
    const sectionActive = activeNav.textContent;
    switch(sectionActive) {
        case 'Home':
            home();
            break;
        case 'About':
            about();
            break;
        case 'Contact Information':
            contact();
            break;
    }
}
document.body.appendChild(setPageBase());
contentChange('null');

export {createParagraph};