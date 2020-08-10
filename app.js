const btn = document.querySelector('button');
const appContainer = document.querySelector('div.app');

const imgsArr = ['pudim1', 'pudim2', 'pudim3', 'pudim4'];

function generateImgs() {
  btn.textContent = 'Si lascou mermão, hora do show!'

  setInterval(() => {
    const pudimImg = document.createElement('img');
    const randownImg = imgsArr[Math.floor(Math.random() * imgsArr.length)];

    pudimImg.setAttribute('src', `./assets/${randownImg}.jpg`);
    pudimImg.setAttribute('alt', 'foto de pudim');
    appContainer.appendChild(pudimImg);

    pudimImg.scrollIntoView();
  }, 100);
  
  btn.removeEventListener('click', generateImgs);
}

btn.addEventListener('click', generateImgs);
