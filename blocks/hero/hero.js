import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  // find the image regardless of authoring shape: 2 cols in 1 row, or 2 rows
  const cells = [...block.querySelectorAll(':scope > div > div')];
  const imageCell = cells.find((cell) => cell.querySelector('picture'));

  const container = document.createElement('div');
  container.className = 'hero-container';

  // left column: every authored cell that isn't the image cell
  const leftCol = document.createElement('div');
  leftCol.className = 'hero-content';
  cells.forEach((cell) => {
    if (cell === imageCell) return;
    while (cell.firstElementChild) leftCol.append(cell.firstElementChild);
  });

  // trust badges: a bulleted list becomes the stats row
  const stats = leftCol.querySelector('ul');
  if (stats) stats.classList.add('hero-stats');

  // right column: authored illustration image
  const rightCol = document.createElement('div');
  rightCol.className = 'hero-illustration';
  const img = imageCell?.querySelector('img');
  if (img) {
    rightCol.append(createOptimizedPicture(img.src, img.alt, true, [{ width: '1000' }]));
  }

  container.append(leftCol, rightCol);
  block.replaceChildren(container);
}
