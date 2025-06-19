// Rating Stars
document
  .querySelectorAll('.choice-content__card-rating')
  .forEach((ratingEl) => {
    const rating = parseInt(ratingEl.dataset.rating, 10) || 0;
    let stars = '';
    for (let i = 1; i <= 5; i++) {
      stars += `<span class="star${
        i <= rating ? ' filled' : ''
      }">&#9733;</span>`;
    }
    ratingEl.innerHTML = stars;
  });

// Reviews Slider
const dots = document.querySelectorAll('.reviews-slider__dots .dot');
const slides = document.querySelectorAll('.reviews-slider__item');

dots.forEach((dot, idx) => {
  dot.addEventListener('click', () => {
    slides.forEach(slide => slide.style.display = 'none');
    dots.forEach(d => d.classList.remove('active'));
    slides[idx].style.display = '';
    dot.classList.add('active');
  });
});

slides.forEach((slide, idx) => {
  slide.style.display = idx === 0 ? '' : 'none';
});
