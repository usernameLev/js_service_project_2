import {
  modals,
  sliders,
  forms,
  mask,
  checkTextInputs,
  calc,
  showMoreStyle,
  filter,
  pictureSize,
  accordion,
  drop,
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

  filter();

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

  drop();
});
