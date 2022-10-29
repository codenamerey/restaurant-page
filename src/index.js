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
    // main.appendChild(createNavbar());
    return main;
}

function createNavbar() {

}

document.body.appendChild(setPageBase());