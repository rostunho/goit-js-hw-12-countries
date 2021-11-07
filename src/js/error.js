import { error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

function onFetchError() {
  error({
    text: 'ERROR',
    shadow: true,
    width: '250px',
    minHeight: '20px',
    delay: 3000,
  });
}

export default onFetchError;
