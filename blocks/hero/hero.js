export default function decorate(block) {
  const rows = [...block.children];
  const [bgCell, carCell] = rows[0].children;
  const titleRow = rows[1];
  const textRow = rows[2];
  const btnsRow = rows[3];

  block.innerHTML = '';

  const bgPicture = bgCell?.querySelector('picture, img');
  if (bgPicture) {
    const bg = document.createElement('div');
    bg.classList.add('hero-bg');
    bg.append(bgPicture.closest('picture') ?? bgPicture);
    block.append(bg);
  }

  const content = document.createElement('div');
  content.classList.add('hero-content');

  if (titleRow?.firstElementChild) content.append(titleRow.firstElementChild);
  if (textRow?.firstElementChild) content.append(textRow.firstElementChild);

  if (btnsRow) {
    const btnWrapper = document.createElement('div');
    btnWrapper.classList.add('hero-buttons');
    [...btnsRow.children].forEach((cell, i) => {
      const a = cell.querySelector('a');
      if (a) {
        a.classList.add('hero-btn', i === 0 ? 'hero-btn-primary' : 'hero-btn-secondary');
        btnWrapper.append(a);
      }
    });
    content.append(btnWrapper);
  }

  block.append(content);

  const carPicture = carCell?.querySelector('picture, img');
  if (carPicture) {
    const car = document.createElement('div');
    car.classList.add('hero-car');
    car.append(carPicture.closest('picture') ?? carPicture);
    block.append(car);
  }
}
