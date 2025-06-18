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
