import coutryCardTmp from '../templates/couuntry-card.hbs';
import countriesListTmp from '../templates/countries-list.hbs';
import refs from './refs';

function renderCountryCard(country) {
  const markup = coutryCardTmp(country);
  refs.cardContainer.innerHTML = markup;
}

export default renderCountryCard;
