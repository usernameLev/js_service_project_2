import {
  modals,
  sliders,
  forms,
  mask,
  checkTextInputs,
  calc,
  showMoreStyle,
  accordion,
  filter,
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

  /* 1 solution
  accordion({
    triggersSelector: '.accordion-heading',
    blocksSelector: '.accordion-block',
  }); */
  // 2 solution
  accordion('.accordion-heading');
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
});
