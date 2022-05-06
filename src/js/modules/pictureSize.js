export const pictureSize = (imgSelector) => {
  const blocks = document.querySelectorAll(imgSelector);

  const showImg = (pBlocks) => {
    const img = pBlocks.querySelector('img');
    img.src = `${img.src.slice(0, -4)}-1.png`;
    pBlocks.querySelectorAll('p:not(.sizes-hit)').forEach((pBlock) => {
      pBlock.style.display = 'none';
    });
  };

  const hideImg = (pBlocks) => {
    const img = pBlocks.querySelector('img');
    img.src = `${img.src.slice(0, -6)}.png`;
    pBlocks.querySelectorAll('p').forEach((pBlock) => {
      pBlock.style.display = 'block';
    });
  };

  blocks.forEach((block) => {
    block.addEventListener('mouseover', () => showImg(block));
    block.addEventListener('mouseout', () => hideImg(block));
  });
};
