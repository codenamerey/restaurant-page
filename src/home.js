import ratatouille from './ratatouille.jpg';

export default function renderHome() {
    const contentDiv = document.querySelector('#content-div');
    const img = document.createElement('img');
    img.src = ratatouille;
    const btn = document.createElement('button');
    btn.textContent = 'Order your food today!';
    contentDiv.innerHTML = '';
    contentDiv.appendChild(img);
    contentDiv.appendChild(btn);
}