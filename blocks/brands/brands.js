export default function decorate(block) {
  const row = block.firstElementChild;
  const wrapper = document.createElement('div');
  wrapper.classList.add('brands-list');

  [...row.children].forEach((cell) => {
    const img = cell.querySelector('picture, img');
    if (img) {
      const item = document.createElement('div');
      item.classList.add('brands-item');
      item.append(img.closest('picture') ?? img);
      wrapper.append(item);
    }
  });

  block.textContent = '';
  block.append(wrapper);
}
