import './sass/styles.scss';
import {
  myAlert,
  mySuccess,
  myInfo,
  myNotice,
  myError,
} from './js/notification';
import searchCountries from './js/fetchCountries';
import countryInfo from './tamplates/countryInfo.hbs';
import countryList from './tamplates/countryList.hbs';

const refs = {
  countryContainer: document.querySelector('.js-article'),
  inputSearch: document.querySelector('.js-input'),
};

myAlert;
// const debounce = require('lodash.debounce');
// refs.inputSearch.addEventListener('input', debounce(inputInfo, 500));

refs.inputSearch.addEventListener('input', event => {
  event.preventDefault();
  clearInput();
  const input = event.currentTarget.value;

  fetch(`https://restcountries.eu/rest/v2/name/${input}`)
    .then(response => response.json())
    .then(data => {
      if (!data) {
        clearInput(), myAlert();
      }
      if (data.length > 10) {
        myNotice();
      }
      if (data.length > 2 && data.length < 10) {
        refs.countryContainer.insertAdjacentHTML(
          'beforeend',
          countryList(data),
        ),
          myInfo();
      }
      if (data.length === 1) {
        refs.countryContainer.insertAdjacentHTML(
          'beforeend',
          countryInfo(data),
        ),
          mySuccess();
      }
    })
    .catch(error => {
      error(myError());
    });
});

function clearInput() {
  refs.inputSearch.innerHTML = '';
}

// const markUp = countryInfo(data);
// refs.countryContainer.insertAdjacentHTML('beforeend', markUp);

// function inputInfo(event) {
//   event.preventDefault();
//   clearInput();
//   const searchQuery = event.currentTarget.value;

//   function fetchCountries() {
//     const searchQuery = event.currentTarget.value;
//     return fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`)
//       .then(response => response.json())
//       .then(data => {
//         if (!data) {
//           myAlert;
//         }
//         if (data.length > 10) {
//           myNotice;
//         }
//         if (data.length > 2 && data.length < 10) {
//           refs.countryContainer.insertAdjacentHTML(
//             'beforeend',
//             countryList(data),
//           );
//           myInfo;
//         }
//         if (data.length === 1) {
//           refs.countryContainer.insertAdjacentHTML(
//             'beforeend',
//             countryInfo(data),
//           );
//           mySuccess;
//         }
//       })
//       .catch(error => {
//         error(myError);
//       });
//   }
// }

// const updateMarkUp = data => {
//   // const markUp = countryInfo(data);

//   if (!data) {
//     myError;
//   }
//   if (data.length > 10) {
//     myNotice;
//   }
//   if (data.length > 2 && data.length < 10) {
//     refs.countryContainer.insertAdjacentHTML('beforeend', countryList(data));
//     myInfo;
//   }
//   if (data.length === 1) {
//     refs.countryContainer.insertAdjacentHTML('beforeend', countryInfo(data));
//     mySuccess;
//   }
// };
