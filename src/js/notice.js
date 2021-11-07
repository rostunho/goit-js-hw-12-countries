import { info } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

function noticePopup() {
  info({
    text: 'Please enter more characters to search.',
    shadow: true,
    width: '450px',
    minHeight: '20px',
    delay: 3000,
  });
}

export default noticePopup;
