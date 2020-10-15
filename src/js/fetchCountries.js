'use strict';
import { myError } from '../js/notification';

function fetchCountries(searchQuery) {
  return fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`)
    .then(response => response.json())
    .catch(error => {
      myError();
    });
}
export default fetchCountries;
