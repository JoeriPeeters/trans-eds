export default function decorate(block) {
  // CTA block: single cell with headline, subtext, and buttons.
  // Wrap content for centered layout.
  const inner = block.querySelector(':scope > div > div') || block.querySelector(':scope > div');
  if (inner) inner.classList.add('cta-content');
}
