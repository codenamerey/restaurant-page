import './style.css';
import eiffel from './eiffel.jpg';

function setPageBase() {
    const aside = document.createElement('aside');
    aside.id = 'image-container';
    aside.appendChild(setBackgroundImage());
    aside.appendChild(createTitle('Ratatouille'));
    return aside;
}

function setBackgroundImage() {
    const bgImg = new Image();
    bgImg.src = eiffel;
    bgImg.id = 'image';
    return bgImg;
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
}

function createNavbar() {
    
}

document.body.appendChild(setPageBase());