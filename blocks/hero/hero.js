// Container ship illustration (matches Figma hero visual)
const SHIP_SVG = `
<svg viewBox="0 0 520 420" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Container ship with global routes">
  <!-- dashed global routes + location markers -->
  <path d="M300 205 L362 152" stroke="rgba(255,255,255,0.22)" stroke-width="2" stroke-dasharray="3 7" stroke-linecap="round"/>
  <path d="M362 152 L442 182" stroke="rgba(255,255,255,0.22)" stroke-width="2" stroke-dasharray="3 7" stroke-linecap="round"/>
  <circle cx="300" cy="205" r="6" fill="#0f3a52" stroke="#3399db" stroke-width="2"/>
  <circle cx="362" cy="152" r="6" fill="#0f3a52" stroke="#3399db" stroke-width="2"/>
  <circle cx="442" cy="182" r="6" fill="#0f3a52" stroke="#3399db" stroke-width="2"/>
  <circle cx="500" cy="212" r="6" fill="#0f3a52" stroke="#3399db" stroke-width="2"/>

  <!-- shipping containers -->
  <g>
    <rect x="150" y="250" width="44" height="72" rx="3" fill="#e15554"/>
    <rect x="150" y="250" width="44" height="12" rx="3" fill="#c0392b"/>
    <rect x="206" y="250" width="44" height="72" rx="3" fill="#3399db"/>
    <rect x="206" y="250" width="44" height="12" rx="3" fill="#2478b5"/>
    <rect x="262" y="250" width="44" height="72" rx="3" fill="#e1a93c"/>
    <rect x="262" y="250" width="44" height="12" rx="3" fill="#c98e28"/>
    <rect x="318" y="250" width="44" height="72" rx="3" fill="#4da666"/>
    <rect x="318" y="250" width="44" height="12" rx="3" fill="#3d854f"/>
  </g>

  <!-- ship hull + deck -->
  <path d="M120 322 L400 322 L372 392 L148 392 Z" fill="#0b2233"/>
  <rect x="120" y="314" width="280" height="10" rx="2" fill="#16384f"/>

  <!-- water -->
  <ellipse cx="180" cy="398" rx="40" ry="8" fill="rgba(51,153,219,0.28)"/>
  <ellipse cx="260" cy="398" rx="40" ry="8" fill="rgba(51,153,219,0.28)"/>
  <ellipse cx="340" cy="398" rx="40" ry="8" fill="rgba(51,153,219,0.28)"/>
</svg>`;

export default function decorate(block) {
  // the authored cell holding headline, subtext, buttons and (optional) stats list
  const content = block.querySelector(':scope > div > div') || block.querySelector(':scope > div');
  if (!content) return;

  const container = document.createElement('div');
  container.className = 'hero-container';

  // left column: move all authored content across, preserving order
  const leftCol = document.createElement('div');
  leftCol.className = 'hero-content';
  while (content.firstElementChild) leftCol.append(content.firstElementChild);

  // trust badges: a bulleted list becomes the stats row
  const stats = leftCol.querySelector('ul');
  if (stats) stats.classList.add('hero-stats');

  // right column: ship illustration
  const rightCol = document.createElement('div');
  rightCol.className = 'hero-illustration';
  rightCol.innerHTML = SHIP_SVG;

  container.append(leftCol, rightCol);
  block.replaceChildren(container);
}
