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

// Redirect Functionality
function redirectTo(page) {
    const urls = {
        // Service URLs
        'company-registration': '/services/company-registration.html',
        'domain-services': '/services/domain-services.html',
        'web-development': '/services/web-development.html',
        'smartphone-repairs': '/services/smartphone-repairs.html',
        
        // Investment URLs
        'basic-investment': '/investments/basic-plan.html',
        'growth-investment': '/investments/growth-plan.html',
        'premium-investment': '/investments/premium-plan.html',
        
        // Legal URLs
        'privacy-policy': 'https://g-kroon.github.io/GKroon/privacy-policy.html',
        'terms-conditions': 'https://g-kroon.github.io/GKroon/terms-conditions.html',
        'refund-policy': 'https://g-kroon.github.io/GKroon/refund-policy.html',
        'disclaimer': 'https://g-kroon.github.io/GKroon/disclaimer.html'
    };

    if (urls[page]) {
        window.location.href = urls[page];
    }
}
