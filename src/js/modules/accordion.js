/* 1 solution
  export const accordion = ({ triggersSelector, blocksSelector }) => {
  const btns = document.querySelectorAll(triggersSelector),
    blocks = document.querySelectorAll(blocksSelector);

  blocks.forEach((block) => {
    block.classList.add('animated', 'fadeInDown');
  });

  btns.forEach((btn) => {
    btn.addEventListener('click', function () {
      if (!this.classList.contains('active')) {
        btns.forEach((btn) => {
          btn.classList.remove('active', 'active-style');
        });
        this.classList.add('active', 'active-style');
      }
    });
  });
};
 */

// 2 solution
export const accordion = (triggersSelector) => {
  const btns = document.querySelectorAll(triggersSelector);

  btns.forEach((btn) => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('active-style');
      btn.nextElementSibling.classList.toggle('active-content');

      if (btn.classList.contains('active-style')) {
        btn.nextElementSibling.style.maxHeight =
          btn.nextElementSibling.scrollHeight + 80 + 'px';
      } else {
        btn.nextElementSibling.style.maxHeight = '0px';
      }
    });
  });
};
