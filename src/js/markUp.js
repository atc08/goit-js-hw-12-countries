import countryInfo from '../tamplates/countryInfo.hbs';
import countryList from '../tamplates/countryList.hbs';
import refs from '../js/refs';
import { myError, mySuccess, myInfo, myNotice } from '../js/notification';

const inputMarkUp = data => {
  if (!data) {
    myError();
    return;
  }
  if (data.length > 10) {
    clearСountryList(), clearCountryInfo(), myNotice();
  }
  if (data.length > 2 && data.length < 11) {
    refs.countryList.insertAdjacentHTML('beforeend', countryList(data)),
      clearCountryInfo(),
      myInfo();
  }
  if (data.length === 1) {
    refs.countryInfo.insertAdjacentHTML('beforeend', countryInfo(data)),
      clearСountryList(),
      mySuccess();
  }
};

const clearCountryInfo = () => {
  refs.countryInfo.innerHTML = '';
};
const clearСountryList = () => {
  refs.countryList.innerHTML = '';
};

export { inputMarkUp, clearСountryList, clearCountryInfo };
