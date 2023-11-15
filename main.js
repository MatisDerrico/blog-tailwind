import './style.css';
import data from './public/data.json';
import { nav } from './nav';


data.sort((a,b) => `${a.prenom} ${a.nom}`.localeCompare(`${b.prenom} ${b.nom}`));

const listeArticles = () => {
  let html = '';
  for (let i = 0; i < data.length; i++) {
    const article = data[i];
    // <img src="${article.avatar}" class="card-img-top" alt="avatar de ${article.prenom} ${article.nom}"> //
    let articleCard = `
      <a href="/article/?id=${article.id}">
       
        <div>
          <h5>${article.prenom} ${article.nom}</h5>
          <p>${article.author}</p>
          <p>${article.content}</p>
        </div>
      </a>
    `;
    html += articleCard;
  }
  return html;
};

document.querySelector('#app').innerHTML = `
  <main>
    ${nav}

    <div class="container-fluid my-4">
      <div class="d-flex gap-3 flex-wrap justify-content-center">
        ${listeArticles()}
      </div>
    </div>
  </main>
`;

const searchInput = document.querySelector("search");
searchInput.addEventListener

