export default function decorate(block) {
  const cells = [...block.children].flatMap((row) => [...row.children]);
  block.replaceChildren();
  cells.forEach((cell) => {
    if (!cell.textContent.trim() && !cell.querySelector('picture, img')) return;
    const isMedia = cell.querySelector('picture, img') && !cell.querySelector('h1, h2');
    cell.classList.add(isMedia ? 'product-hero-media' : 'product-hero-copy');
    const buttons = [...cell.querySelectorAll(':scope > .button-wrapper')];
    if (buttons.length) {
      const actions = document.createElement('div');
      actions.className = 'product-hero-actions';
      buttons[0].before(actions);
      actions.append(...buttons);
    }
    block.append(cell);
  });
  const image = block.querySelector('img');
  if (image) {
    image.loading = 'eager';
    image.setAttribute('fetchpriority', 'high');
  }
}
