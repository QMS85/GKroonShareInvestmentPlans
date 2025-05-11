// Smooth Scroll for Navbar Links
document.querySelectorAll('.navbar a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').slice(1);
    const target = document.getElementById(targetId);

    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// Glow Effect on Hover
const cards = document.querySelectorAll('.card, .plan');
cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.boxShadow = '0 0 20px 2px #4caf50';
  });
  card.addEventListener('mouseleave', () => {
    card.style.boxShadow = '';
  });
});
