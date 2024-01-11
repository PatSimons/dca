import './global';

window.Webflow ||= [];
window.Webflow.push(() => {
  const postList = document.querySelector<HTMLElement>('[cs-el="postList"]');
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

  // console.log(nextButton);
  // console.log(previousButton);
  // console.log(nextSrc);
  // console.log(previousSrc);

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
}); // End: Webflow Push
