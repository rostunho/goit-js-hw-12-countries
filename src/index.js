import './sass/main.scss';

import coutryCardTmp from './templates/couuntry-card.hbs';

const refs = {
  cardContainer: document.querySelector('.card-container'),
  searchForm: document.querySelector('.country-search'),
};

fetchCountries('canada')
  .then(renderCountryCard)
  .catch(error => console.log(eroror));

function fetchCountries(searchQuery) {
  return fetch(`https://restcountries.com/v2/name/${searchQuery}`).then(response => {
    return response.json();
  });
}

function renderCountryCard(country) {
  const markup = coutryCardTmp(country);
  refs.cardContainer.innerHTML = markup;
}
