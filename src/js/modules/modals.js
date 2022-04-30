export const modals = () => {
  const bindModal = ({
    triggerSelector,
    modalSelector,
    closeSelector,
    closeClickOverlay = true,
  }) => {
    const triggers = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector),
      close = document.querySelector(closeSelector),
      windows = document.querySelectorAll('[data-modal]'),
      scroll = calcScroll();

    const closeModal = () => {
      modal.style.display = 'none';
      document.body.style.overflow = '';
    };

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    });

    triggers.forEach((trigger) => {
      trigger.addEventListener('click', (e) => {
        if (e.target) {
          e.preventDefault();
        }

        windows.forEach((window) => {
          window.style.display = 'none';
        });

        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        document.body.style.marginRight = `${scroll}px`;
        // document.body.classList.add('modal-open');

        // const inputElement = document.querySelector(
        //   `${modalSelector} input:not([type='radio'])`
        // );
        // if (inputElement) {
        //   inputElement.focus();
        // }

        if (
          document.querySelector(`${modalSelector} input:not([type='radio'])`)
        ) {
          document
            .querySelector(`${modalSelector} input:not([type='radio'])`)
            .focus();
        }
      });
    });

    close.addEventListener('click', () => {
      windows.forEach((window) => {
        window.style.display = 'none';
      });

      closeModal();
      document.body.style.marginRight = `0px`;
      // document.body.classList.remove('modal-open');
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal && closeClickOverlay) {
        windows.forEach((window) => {
          window.style.display = 'none';
        });

        closeModal();
        document.body.style.marginRight = `0px`;
        // document.body.classList.remove('modal-open');
      }
    });
  };

  const showModalByTime = ({ selector, time }) => {
    const modalWindows = document.querySelectorAll('[data-modal]');
    setTimeout(() => {
      let display;
      
      modalWindows.forEach((window) => {
        if (getComputedStyle(window).display != 'none') {
          display = 'block';
        }
      });

      if (!display) {
        document.querySelector(selector).style.display = 'block';
        document.body.style.overflow = 'hidden';
        document.querySelector('#modalFocus').focus();
      }
    }, time);
  };

  const popupCalcBtns = document.querySelectorAll('.popup_calc_btn');
  const modalFocusCalc = () => {
    popupCalcBtns.forEach((popupCalcBtn) => {
      popupCalcBtn.addEventListener('click', () => {
        setTimeout(() => {
          document.querySelector('#width').focus();
        }, 100);
      });
    });
  };
  modalFocusCalc();

  const popupCalcProfileButtons = document.querySelectorAll(
    '.popup_calc_profile_button',
  );
  const endModlaFocusCalc = () => {
    popupCalcProfileButtons.forEach((popupCalcProfileButton) => {
      popupCalcProfileButton.addEventListener('click', () => {
        setTimeout(() => {
          document.querySelector('#endModlaFocusCalc').focus();
        }, 100);
      });
    });
  };
  endModlaFocusCalc();

  const calcScroll = () => {
    const div = document.createElement('div');

    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';

    document.body.appendChild(div);
    const scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    return scrollWidth;
  };

  bindModal({
    triggerSelector: '.button-design',
    modalSelector: '.popup-design',
    closeSelector: '.popup-design .popup-close',
  });

  bindModal({
    triggerSelector: '.button-consultation',
    modalSelector: '.popup-consultation',
    closeSelector: '.popup-consultation .popup-close',
  });

  showModalByTime({
    selector: '.popup-consultation',
    time: 1000,
  });
};
