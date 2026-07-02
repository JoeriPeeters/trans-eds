import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  // authored as a 2-column row: cell 1 = text content, cell 2 = image (optional)
  const row = block.querySelector(':scope > div');
  if (!row) return;

  const cells = [...row.children];
  const imageCell = cells.find((cell) => cell.querySelector('picture'));
  const contentCell = cells.find((cell) => cell !== imageCell) || cells[0];

  const container = document.createElement('div');
  container.className = 'hero-container';

  // left column: headline, subtext, buttons, trust badges
  const leftCol = document.createElement('div');
  leftCol.className = 'hero-content';
  while (contentCell?.firstElementChild) leftCol.append(contentCell.firstElementChild);

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
