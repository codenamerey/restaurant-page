import { createParagraph } from "./index";

export default function contact() {
    const contentDiv = document.querySelector('#content-div');
    const article = document.createElement('article');
    article.appendChild(createParagraph('I have no contact information. This is not a real restaurant site, silly!'));
    contentDiv.innerHTML = '';
    contentDiv.appendChild(article);
}