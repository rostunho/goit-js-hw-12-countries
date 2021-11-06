import './sass/main.scss';

import coutryCardTmp from './templates/couuntry-card.hbs';

const refs = {
  cardContainer: document.querySelector('.card-container'),
};

fetch('https://restcountries.com/v2/name/belgium')
  .then(response => {
    return response.json();
  })
  .then(countries => {
    console.log(countries);
    const markup = coutryCardTmp(countries);
    console.log(markup);
    refs.cardContainer.innerHTML = markup;
  })
  .catch(error => {
    console.log(error);
  });
