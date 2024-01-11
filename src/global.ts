import { gsap } from 'gsap';
export { gsap };

import { initSliders } from 'src/components/sliders';

window.Webflow ||= [];
window.Webflow.push(() => {
  const reviewStars = document.querySelectorAll<HTMLElement>('[cs-el="reviewStars"]');
  console.log(reviewStars.length);
  if (reviewStars.length > 0) {
    reviewStars.forEach((el) => {
      const maxRating = 5;
      const rating = el?.getAttribute('rating');
      if (rating !== null) {
        for (let i = 0; i < maxRating; i++) {
          const childElement = el.children[i] as HTMLElement;
          const ratingValue = parseInt(rating, 10);
          if (i < ratingValue) {
            childElement.classList.add('is-active');
          } else {
            childElement.classList.remove('is-active');
          }
        }
      }
    });
  }

  initSliders();
}); // End: Webflow Push
