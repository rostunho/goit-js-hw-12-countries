import './sass/main.scss';
import fetchCountries from './js/fetch-countries';
import renderCountryCard from './js/render-markup';
import refs from './js/refs';

refs.searchForm.addEventListener('input', onSearch);

function onSearch(event) {
  event.preventDefault();
  const searchQuery = event.currentTarget.value;
  fetchCountries(searchQuery).then(renderCountryCard).catch(onFetchError);
}
