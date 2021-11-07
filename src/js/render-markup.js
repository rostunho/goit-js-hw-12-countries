import coutryCardTmp from '../templates/couuntry-card.hbs';
import countriesListTmp from '../templates/countries-list.hbs';
import noticePopup from './notice';
import refs from './refs';

// function renderCountryCard(country) {
//   const markup = coutryCardTmp(country);
//   refs.cardContainer.innerHTML = markup;
// }

function renderCountryCard(countries) {
  if (countries.length === 1) {
    refs.cardContainer.innerHTML = '';
    const markup = coutryCardTmp(countries);
    refs.cardContainer.innerHTML = markup;
  } else if (countries.length > 1 && countries.length < 10) {
    refs.cardContainer.innerHTML = '';
    const markup = countriesListTmp(countries);
    refs.cardContainer.innerHTML = markup;
  } else {
    noticePopup();
  }
}

export default renderCountryCard;
