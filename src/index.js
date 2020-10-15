import './sass/styles.scss';
import refs from './js/refs';
import fetchCountries from './js/fetchCountries';
import { inputMarkUp, clearСountryList, clearCountryInfo } from './js/markUp';
import { myAlert } from './js/notification';

const debounce = require('lodash.debounce');
refs.inputSearch.addEventListener('input', debounce(onChangeInput, 500));

function onChangeInput(event) {
  clearСountryList();
  clearCountryInfo();
  const searchQuery = event.target.value;
  if (!searchQuery) return myAlert();
  fetchCountries(searchQuery).then(data => inputMarkUp(data));
}
