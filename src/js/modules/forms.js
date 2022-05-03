import { postData } from '../services/requests';

export const forms = () => {
  const forms = document.querySelectorAll('form'),
    inputs = document.querySelectorAll('input'),
    uploads = document.querySelectorAll('[name="upload"]');

  const message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с Вами свяжемся',
    failure: 'Что-то пошло не так...',
    spinner: 'assets/img/spinner.gif',
    ok: 'assets/img/ok.png',
    fail: 'assets/img/fail.png',
  };

  const path = {
    designer: 'assets/server.php',
    question: 'assets/question.php',
  };

  const clearInputs = () => {
    inputs.forEach((input) => {
      input.value = '';
    });
    uploads.forEach((upload) => {
      upload.previousElementSibling.textContent = 'Файл не выбран';
    });
  };

  uploads.forEach((upload) => {
    upload.addEventListener('input', () => {
      console.log(upload.files[0]);
      let dots;
      const arr = upload.files[0].name.split('.');

      arr[0].length > 6 ? (dots = '...') : (dots = '.');
      const name = arr[0].substring(0, 6) + dots + arr[1];
      upload.previousElementSibling.textContent = name;
    });
  });

  forms.forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const statusMessage = document.createElement('div');
      statusMessage.classList.add('status');
      form.parentNode.append(statusMessage);

      form.classList.add('animated', 'fadeOutUp');
      setTimeout(() => {
        form.style.display = 'none';
      }, 400);

      const statusImg = document.createElement('img');
      statusImg.setAttribute('src', message.spinner);
      statusImg.classList.add('animated', 'fadeInUp');
      statusMessage.append(statusImg);

      const textMessage = document.createElement('div');
      textMessage.textContent = message.loading;
      statusMessage.append(textMessage);

      const formData = new FormData(form);
      let api;
      form.closest('.popup-design') || form.classList.contains('calc_form')
        ? (api = path.designer)
        : (api = path.question);
      console.log(api);

      postData(api, formData)
        .then((res) => {
          console.log(res);
          statusImg.setAttribute('src', message.ok);
          textMessage.textContent = message.success;
        })
        .catch(() => {
          statusImg.setAttribute('src', message.fail);
          textMessage.textContent = message.failure;
        })
        .finally(() => {
          clearInputs();
          setTimeout(() => {
            statusMessage.remove();
            form.style.display = 'block';
            form.classList.remove('fadeOutUp');
            form.classList.add('fadeInUp');
          }, 5000);
        });
    });
  });
};
