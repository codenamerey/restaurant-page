import './style.css';

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
    return main;
}

function createNavbar() {
    let navItems = ['Home', 'About', 'Contact Information'];
    const nav = document.createElement('nav');
    nav.id = 'nav-bar';
    const ul = document.createElement('ul');
    navItems.forEach((item) => {
        let navItem = document.createElement('li');
        navItem.textContent = item;
        if(item == 'Home') navItem.classList.add('active');
        ul.appendChild(navItem);
    });
    nav.appendChild(ul);
    return nav;
}

document.body.appendChild(setPageBase());