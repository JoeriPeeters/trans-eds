export default function decorate(block) {
  // Hero block structure from markdown:
  // - First div contains headline, subtext, and CTA buttons
  // - Transform into two-column layout

  const content = block.querySelector('div');
  if (!content) return;

  // Extract elements
  const h1 = content.querySelector('h1');
  const p = content.querySelector('p');
  const buttons = content.querySelector('p.button-container') || content.querySelector('.button-container');

  // Clear the block
  block.innerHTML = '';

  // Create two-column container
  const container = document.createElement('div');
  container.className = 'hero-container';

  // Left column - content
  const leftCol = document.createElement('div');
  leftCol.className = 'hero-content';

  if (h1) leftCol.appendChild(h1);
  if (p && p !== buttons) leftCol.appendChild(p);
  if (buttons) leftCol.appendChild(buttons);

  // Right column - illustration placeholder
  const rightCol = document.createElement('div');
  rightCol.className = 'hero-illustration';
  // Illustration will be added via CSS or as a background image

  container.appendChild(leftCol);
  container.appendChild(rightCol);
  block.appendChild(container);
}
