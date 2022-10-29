import { createParagraph } from "./index"; 

export default function renderHome() {
    const contentDiv = document.querySelector('#content-div');
    const article = document.createElement('article');
    article.appendChild(createParagraph('Ratatouille is <em>le</em> best restaurant in France!'));
    article.appendChild(createParagraph('Come today and taste our best-selling ratatouille! Disclaimer: It is not meat.'));
    contentDiv.innerHTML = '';
    contentDiv.appendChild(article);
}