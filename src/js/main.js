import { modals, sliders } from './modules';

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
});
