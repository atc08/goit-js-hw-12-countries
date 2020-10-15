import { alert, notice, info, success, error } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';

const myAlert = () =>
  alert({
    text: 'Please, enter country)',
    type: 'info',
    hide: true,
    delay: 1000,
  });

const mySuccess = () =>
  success({
    text: 'Yahoo, we find it',
    hide: true,
    delay: 1000,
  });

const myInfo = () =>
  info({
    text: 'Please, select from list)',
    hide: true,
    delay: 1000,
  });

const myNotice = () =>
  notice({
    text: 'Too many results. Please, specify) ',
    hide: true,
    delay: 1500,
  });

const myError = () =>
  error({
    text: 'No matches( Please, try again!',
    hide: true,
    delay: 1000,
  });

export { myAlert, mySuccess, myInfo, myNotice, myError };
