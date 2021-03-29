const removeAllChildNodes = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};

const buildNavCircles = () => {
  const navigationCircles = document.getElementById('navCircleHolder');
  const sliderImages = document.querySelectorAll('.sliderImage');
  const sliderImagesArray = [...sliderImages];
  removeAllChildNodes(navigationCircles);

  sliderImagesArray.forEach((image, index) => {
    const navCircle = document.createElement('div');
    navCircle.classList.add('navCircle');
    navCircle.dataset.imageid = index;
    navigationCircles.appendChild(navCircle);

    if (image.classList.contains('imageVisible')) {
      navCircle.classList.add('onImage');
    }

    if (!image.classList.contains('imageVisible')) {
      navCircle.addEventListener('click', goToImage);
    }
  });
};

const goToImage = (event) => {
  const sliderImages = document.querySelectorAll('.sliderImage');
  const sliderImagesArray = [...sliderImages];
  const currentIndex = sliderImagesArray.findIndex((image) => image.classList.contains('imageVisible'));
  const nextIndex = event.target.dataset.imageid;
  sliderImagesArray[currentIndex].classList.remove('imageVisible');
  sliderImagesArray[currentIndex].classList.add('imageHidden');
  sliderImagesArray[nextIndex].classList.remove('imageHidden');
  sliderImagesArray[nextIndex].classList.add('imageVisible');

  buildNavCircles();
};

const nextImageRight = () => {
  const sliderImages = document.querySelectorAll('.sliderImage');
  const sliderImagesArray = [...sliderImages];
  const currentIndex = sliderImagesArray.findIndex((image) => image.classList.contains('imageVisible'));
  let nextIndex = currentIndex + 1;
  if (nextIndex === sliderImagesArray.length) {
    nextIndex = 0;
  }

  sliderImagesArray[currentIndex].classList.remove('imageVisible');
  sliderImagesArray[currentIndex].classList.add('imageHidden');
  sliderImagesArray[nextIndex].classList.remove('imageHidden');
  sliderImagesArray[nextIndex].classList.add('imageVisible');

  buildNavCircles();
};

const nextImageLeft = () => {
  const sliderImages = document.querySelectorAll('.sliderImage');
  const sliderImagesArray = [...sliderImages];
  const currentIndex = sliderImagesArray.findIndex((image) => image.classList.contains('imageVisible'));
  let nextIndex = currentIndex - 1;
  if (nextIndex === -1) {
    nextIndex = sliderImagesArray.length - 1;
  }

  sliderImagesArray[currentIndex].classList.remove('imageVisible');
  sliderImagesArray[currentIndex].classList.add('imageHidden');
  sliderImagesArray[nextIndex].classList.remove('imageHidden');
  sliderImagesArray[nextIndex].classList.add('imageVisible');

  buildNavCircles();
};

const buildNavArrows = () => {
  const imageSlider = document.getElementById('imageSlider');
  const rightArrow = document.createElement('img');
  rightArrow.src = '../src/images/icons/rightArrow.svg';
  rightArrow.classList.add('rightArrow', 'sliderArrow');

  const leftArrow = document.createElement('img');
  leftArrow.src = '../src/images/icons/leftArrow.svg';
  leftArrow.classList.add('leftArrow', 'sliderArrow');

  imageSlider.append(rightArrow, leftArrow);
  rightArrow.addEventListener('click', nextImageRight);
  leftArrow.addEventListener('click', nextImageLeft);
};

const buildImageSlider = () => {
  buildNavArrows();
  buildNavCircles();
  setInterval(nextImageRight, 5000);
};

export default { buildImageSlider };
