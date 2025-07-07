
(function() {
  emailjs.init('sPy1v8lFaIkkwNtqU');
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  emailjs.sendForm('service_a0wb29c', 'template_cwxghdl', this)
    .then(function() {
      document.getElementById('form-message').textContent = "Message sent successfully!";
      document.getElementById('contact-form').reset();
    }, function(error) {
      document.getElementById('form-message').textContent = "Failed to send message. Please try again.";
      console.error('FAILED...', error);
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('active');
    }
  }
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

document.getElementById('dark-mode-toggle').addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
});

document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.classList.add('hovered');
  });
  card.addEventListener('mouseleave', () => {
    card.classList.remove('hovered');
  });
});

// Starry sky background for full viewport
function createStars() {
  const canvas = document.getElementById('star-canvas');
  const ctx = canvas.getContext('2d');
  // Set canvas size to viewport
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Generate stars
  const numStars = 180; // Adjust for density
  for (let i = 0; i < numStars; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const radius = Math.random() * 1.2 + 0.2;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fillStyle = "white";
    ctx.globalAlpha = Math.random() * 0.8 + 0.2;
    ctx.fill();
    ctx.globalAlpha = 1;
  }
}

// Redraw stars on resize
window.addEventListener('resize', createStars);
window.addEventListener('DOMContentLoaded', createStars);
