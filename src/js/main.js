import {
  modals,
  sliders,
  forms,
  mask,
  checkTextInputs,
  showMoreStyle,
  calc,
  showMoreStyle,
  filter,
  pictureSize,
<<<<<<< HEAD
  accordion,
=======
>>>>>>> 811273a82b4579fc8e96cb8d7be0a4cb1c2e817d
} from './modules';

window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  modals();

  sliders({
    slides: '.feedback-slider-item',
    dir: 'horizonta',
    prev: '.main-prev-btn',
    next: '.main-next-btn',
  });

  sliders({
    slides: '.main-slider-item',
    dir: 'vertical',
  });

  forms();

  mask('[name="phone"]');

  checkTextInputs('[name="name"]');
  checkTextInputs('[name="message"]');

  calc({
    size: '#size',
    material: '#material',
    options: '#options',
    promocode: '.promocode',
    result: '.calc-price',
  });

  checkTextInputs('[name="name"]');
  checkTextInputs('[name="message"]');

  showMoreStyle({
    trigger: '.button-styles',
    wrapper: '#styles .row',
  });

  filter();

  pictureSize('.sizes-block')

  /* 1 solution
  accordion({
    triggersSelector: '.accordion-heading',
    blocksSelector: '.accordion-block',
  }); */
  // 2 solution
  accordion('.accordion-heading');
  showMoreStyle({
    trigger: '.button-styles',
    wrapper: '#styles .row',
  });

  pictureSize('.sizes-block');
});
