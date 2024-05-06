const hideAllTooltips = () => {
  const tooltips = document.querySelectorAll('.tooltip');
  tooltips.forEach(tooltip => {
      tooltip.style.display = 'none';
  })
}

const ampoules = document.querySelectorAll('.ampoule');

ampoules.forEach(ampoule => {
ampoule.addEventListener('click', (event) => {
  event.stopPropagation();
  
  hideAllTooltips();
  const tooltip = ampoule.nextElementSibling;
  const isVisible = window.getComputedStyle(tooltip).display !== 'none';
  if (!isVisible) {
    tooltip.style.display = 'block';
  } else {
    tooltip.style.display = 'none';
  }
});
});

document.addEventListener('click', (event) => {
const target = event.target;

if (!target.classList.contains('ampoule') && !target.classList.contains('tooltip')) {
  hideAllTooltips();
}
});
