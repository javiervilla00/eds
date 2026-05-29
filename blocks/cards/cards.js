import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  const ul = document.createElement('ul');
  ul.classList.add('cards-list');
  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    li.classList.add('cards-card');
    const [imageCell, titleCell, authorCell, btnsCell] = row.children;

    const picture = imageCell?.querySelector('picture, img');
    if (picture) {
      const imageWrapper = document.createElement('div');
      imageWrapper.classList.add('cards-card-image');
      imageWrapper.append(picture.closest('picture') ?? picture);
      li.append(imageWrapper);
    }

    const content = document.createElement('div');
    content.classList.add('cards-card-content');

    if (titleCell) {
      const h2 = document.createElement('h2');
      h2.classList.add('cards-card-title');
      h2.textContent = titleCell.textContent.trim();
      content.append(h2);
    }

    if (authorCell) {
      const p = document.createElement('p');
      p.classList.add('cards-card-desc');
      p.textContent = authorCell.textContent.trim();
      content.append(p);
    }

    if (btnsCell) {
      const btnWrapper = document.createElement('div');
      btnWrapper.classList.add('cards-card-buttons');
      btnsCell.querySelectorAll('a').forEach((a, i) => {
        a.classList.add('cards-btn', i === 0 ? 'cards-btn--primary' : 'cards-btn--secondary');
        btnWrapper.append(a);
      });
      content.append(btnWrapper);
    }

    li.append(content);
    ul.append(li);
  });
  block.textContent = '';
  block.append(ul);
}
