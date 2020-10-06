'use strict';

// const refs = {
//     countryContainer: document.querySelector('.js-article'),
//     inputSearch: document.querySelector('.js-input'),
//   };

// refs.inputSearch.addEventListener('input', event => {
//     event.preventDefault;

//     const searchQuery = event.currentTarget.value;
// }
export default {
  fetchCountries(searchQuery) {
    return fetch(
      `https://restcountries.eu/rest/v2/name/${searchQuery}`,
    ).then(response => response.json());
  },
};
