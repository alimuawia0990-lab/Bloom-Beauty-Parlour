// Bloom Beauty Parlour — shared behaviour

document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.getElementById('nav-toggle');
  var closeBtn = document.getElementById('nav-close');
  var mobileNav = document.getElementById('mobile-nav');
  var overlay = document.getElementById('nav-overlay');

  function openNav() {
    mobileNav.classList.add('open');
    overlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }
  function closeNav() {
    mobileNav.classList.remove('open');
    overlay.classList.add('hidden');
    document.body.style.overflow = '';
  }
  if (toggle) toggle.addEventListener('click', openNav);
  if (closeBtn) closeBtn.addEventListener('click', closeNav);
  if (overlay) overlay.addEventListener('click', closeNav);

  // Contact form -> builds a WhatsApp message from the fields
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = document.getElementById('cf-name').value.trim();
      var phone = document.getElementById('cf-phone').value.trim();
      var service = document.getElementById('cf-service').value;
      var when = document.getElementById('cf-when').value.trim();

      var lines = [
        'Hello Bloom Beauty Parlour, I would like to request an appointment.',
        'Name: ' + name,
        'Phone: ' + phone,
        'Service: ' + service,
        'Preferred date/time: ' + when
      ];
      var message = encodeURIComponent(lines.join('\n'));
      window.open('https://wa.me/923119007449?text=' + message, '_blank');
    });
  }
});
