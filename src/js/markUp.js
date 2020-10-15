import countryInfo from '../tamplates/countryInfo.hbs';
import countryList from '../tamplates/countryList.hbs';
import refs from '../js/refs';
import { myAlert, mySuccess, myInfo, myNotice } from '../js/notification';

function inputMarkUp(data) {
  if (!data) {
    myAlert();
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
}

function clearCountryInfo() {
  refs.countryInfo.innerHTML = '';
}
function clearСountryList() {
  refs.countryList.innerHTML = '';
}

export default inputMarkUp;
