(function(){
  var btn = document.getElementById('hamburgerBtn');
  var menu = document.getElementById('mobileMenu');
  if (btn && menu) {
    btn.addEventListener('click', function(){
      var isOpen = menu.classList.toggle('open');
      btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      menu.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
      document.documentElement.style.overflow = isOpen ? 'hidden' : '';
    });
    menu.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click', function(){
        menu.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
        menu.setAttribute('aria-hidden', 'true');
        document.documentElement.style.overflow = '';
      });
    });
  }

  document.querySelectorAll('.faq-q').forEach(function(q){
    q.addEventListener('click', function(){
      var faq = q.closest('.faq');
      faq.classList.toggle('open');
      q.setAttribute('aria-expanded', faq.classList.contains('open') ? 'true' : 'false');
    });
  });
})();
