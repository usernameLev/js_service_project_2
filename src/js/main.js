import {
  modals,
  sliders,
  forms,
  mask,
  checkTextInputs,
  showMoreStyle,
  calc,
  filter,
  pictureSize,
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

  filter();

  showMoreStyle({
    trigger: '.button-styles',
    wrapper: '#styles .row',
  });

  pictureSize('.sizes-block');
});
