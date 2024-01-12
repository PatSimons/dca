import { gsap } from 'gsap';
//export { gsap };
import { initFaqs } from 'src/components/faqs';
import { initSliders } from 'src/components/sliders';

window.Webflow ||= [];
window.Webflow.push(() => {
  initSliders();
  initFaqs();
  // Review Template - Set Nav
  const postList = document.querySelector<HTMLElement>('[cs-el="postList"]');
  if (postList) {
    const current = postList?.querySelector('.w--current');
    const nextElement = current?.parentElement?.nextElementSibling;
    const previousElement = current?.parentElement?.previousElementSibling;

    // Get the 'href' attribute of the <a> element from the next sibling
    const nextSrc = nextElement?.querySelector('a')?.getAttribute('href');

    // Get the 'href' attribute of the <a> element from the previous sibling
    const previousSrc = previousElement?.querySelector('a')?.getAttribute('href');

    // Select the next and previous buttons
    const nextButton = document.querySelector<HTMLAnchorElement>('[cs-el="nextPost"]');
    const previousButton = document.querySelector<HTMLAnchorElement>('[cs-el="previousPost"]');

    // Set the 'href' attribute of the next and previous buttons accordingly
    if (nextButton && nextSrc) {
      nextButton.href = nextSrc;
    } else {
      nextButton?.classList.add('is-muted');
    }

    if (previousButton && previousSrc) {
      previousButton.href = previousSrc;
    } else {
      previousButton?.classList.add('is-muted');
    }
  }
  // Reviews - Set Stars
  const reviewStars = document.querySelectorAll<HTMLElement>('[cs-el="reviewStars"]');
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
}); // End: Webflow Push
