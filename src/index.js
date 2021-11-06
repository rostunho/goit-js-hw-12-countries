import './sass/main.scss';
import fetchCountries from './js/fetch-countries';
import renderCountryCard from './js/render-markup';
import onFetchError from './js/error';
import refs from './js/refs';
import debounce from 'lodash.debounce';

refs.searchForm.addEventListener('input', debounce(onSearch, 500));

function onSearch(event) {
  event.preventDefault();
  const searchQuery = event.target.value;
  fetchCountries(searchQuery).then(renderCountryCard).catch(onFetchError);
}
