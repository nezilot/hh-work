  const header = document.querySelector('.intro-header');
  const placeholder = document.createElement('div');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      if (!header.classList.contains('scrolled')) {
        placeholder.style.height = `${header.offsetHeight}px`;
        header.parentNode.insertBefore(placeholder, header);
        header.classList.add('scrolled');
      }
    } else {
      if (header.classList.contains('scrolled')) {
        header.classList.remove('scrolled');
        if (placeholder.parentNode) {
          placeholder.parentNode.removeChild(placeholder);
        }
      }
    }
  });
