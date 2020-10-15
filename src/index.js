import './sass/styles.scss';
import refs from './js/refs';
import fetchCountries from './js/fetchCountries';
import inputMarkUp from './js/markUp';

const debounce = require('lodash.debounce');
refs.inputSearch.addEventListener('input', debounce(onChangeInput, 500));

function onChangeInput(event) {
  event.preventDefault();
  const searchQuery = event.target.value;
  if (!searchQuery) return;
  fetchCountries(searchQuery).then(data => inputMarkUp(data));
}
