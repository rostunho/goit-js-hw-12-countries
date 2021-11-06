import './sass/main.scss';

import coutryCardTmp from './templates/couuntry-card.hbs';

const refs = {
  cardContainer: document.querySelector('.card-container'),
  searchForm: document.querySelector('.country-search'),
};

refs.searchForm.addEventListener('input', onSearch);

function onSearch(event) {
  event.preventDefault();
  const searchQuery = event.currentTarget.value;
  fetchCountries(searchQuery).then(renderCountryCard).catch(onFetchError);
}

function fetchCountries(searchQuery) {
  const url = `https://restcountries.com/v2/name/${searchQuery}`;
  return fetch(url).then(response => {
    return response.json();
  });
}

function renderCountryCard(country) {
  const markup = coutryCardTmp(country);
  refs.cardContainer.innerHTML = markup;
}

function onFetchError(error) {
  alert(Error);
}
