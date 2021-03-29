const buildImageSlider = () => {
  buildNavArrows();
  buildNavCircles();
}

const buildNavArrows = () => {
  console.log('in build nav arrows');
  const imageSlider = document.getElementById('imageSlider');
  const rightArrow = document.createElement('img');
  rightArrow.src = '../src/images/icons/rightArrow.svg';
  rightArrow.classList.add('rightArrow','sliderArrow');
  
  console.log('before left arrow');
  const leftArrow = document.createElement('img');
  leftArrow.src = '../src/images/icons/leftArrow.svg';
  leftArrow.classList.add('leftArrow','sliderArrow');
  
  imageSlider.append(rightArrow, leftArrow);
  rightArrow.addEventListener('click', nextImageRight);
  leftArrow.addEventListener('click', nextImageLeft);
};

const buildNavCircles = () => {
  const navigationCircles = document.getElementById('navCircleHolder');
  const sliderImages = document.querySelectorAll('.sliderImage');
  const sliderImagesArray = [...sliderImages];
  removeAllChildNodes(navigationCircles);
  
  sliderImagesArray.forEach((image) => { 
    console.log('in loop');
    const navCircle = document.createElement('div');
    navCircle.classList.add('navCircle');
    navigationCircles.appendChild(navCircle);
    
    if (image.classList.contains('imageVisible')) {
      console.log('on this image');
      navCircle.classList.add('onImage');
    }
  })
}

const nextImageRight = () => {
  console.log('nextImageRight');
  const sliderImages = document.querySelectorAll('.sliderImage');
  const sliderImagesArray = [...sliderImages];
  const currentIndex = sliderImagesArray.findIndex((image) => image.classList.contains('imageVisible'));
  const nextIndex = currentIndex + 1;
  console.log(sliderImagesArray.length);
  console.log(sliderImagesArray[currentIndex]);
  console.log(sliderImagesArray[nextIndex]);
  if (nextIndex < sliderImagesArray.length) {
    sliderImagesArray[currentIndex].classList.remove('imageVisible');
    sliderImagesArray[currentIndex].classList.add('imageHidden');
    sliderImagesArray[nextIndex].classList.remove('imageHidden');
    sliderImagesArray[nextIndex].classList.add('imageVisible');
  }

  buildNavCircles();
}

const nextImageLeft = () => {
  const sliderImages = document.querySelectorAll('.sliderImage');
  const sliderImagesArray = [...sliderImages];
  const currentIndex = sliderImagesArray.findIndex((image) => image.classList.contains('imageVisible'));
  const nextIndex = currentIndex - 1;
  console.log(sliderImagesArray.length);
  console.log(sliderImagesArray[currentIndex]);
  console.log(sliderImagesArray[nextIndex]);
  if (nextIndex > -1) {
    sliderImagesArray[currentIndex].classList.remove('imageVisible');
    sliderImagesArray[currentIndex].classList.add('imageHidden');
    sliderImagesArray[nextIndex].classList.remove('imageHidden');
    sliderImagesArray[nextIndex].classList.add('imageVisible');
  }
  
  buildNavCircles();
}

const removeAllChildNodes = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

export default { buildImageSlider }