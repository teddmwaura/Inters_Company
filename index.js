const menu = document.querySelector('.menu');

const vid = document.querySelector('.vid');

const close = document.querySelector('.close');

/*here we create a function to check for navigation */

function isOpen()
{
  return vid.style.left === '0';
}

/* event listener for the menu button */

menu.addEventListener('click', () =>{
  if(!isOpen())
  {
    vid.style.left = '0';
    vid.classList.add('issubscribe')
  }
  else
  {
    vid.style.left = '-1000px';
    vid.classList.remove('issubscribe')
  }
});

/* event listener for the closing button */

close.addEventListener('click', () =>{
  if(!isOpen())
  {
    vid.style.left = '-1000px';
    vid.classList.add('closing')
  }
  else
  {
    vid.style.left = '0';
    vid.classList.remove('closing')
  }
});


const menus = document.querySelector('.menus');
const naving = document.querySelector('.naving');
const closes = document.querySelector('.closes');

/* Here we create a function to check for navigation */

function isOpen() {
  return naving.style.top === '0px'; // Ensure '0px' for comparison
}

/* Event listener for the menu button */

menus.addEventListener('click', (event) => {
  event.stopPropagation(); // Prevents the click from propagating to the document
  if (!isOpen()) {
    naving.style.top = '0';
    naving.classList.add('issubscribing');
  } else {
    naving.style.top = '-800px';
    naving.classList.remove('issubscribing');
  }
});

/* Event listener for the closing button */

closes.addEventListener('click', (event) => {
  event.stopPropagation(); // Prevents the click from propagating to the document
  if (isOpen()) {
    naving.style.top = '-800px';
    naving.classList.remove('issubscribing');
  }
});

/* Event listener for clicking anywhere on the webpage */

document.addEventListener('click', (event) => {
  // Check if the click is outside the navbar, the menu button, and the images
  if (!naving.contains(event.target) && !menus.contains(event.target) && !event.target.closest('.image-container') && isOpen()) {
    naving.style.top = '-800px';
    naving.classList.remove('issubscribing');
  }
});

// Assuming your images are within a container with a class '.image-container'
// Add this class to the images' container in your HTML




var scroll =new SmoothScroll('a[href*="#"]',{
  speed: 1000,
  speedAsDuration: true
  
  
  });

document.addEventListener("DOMContentLoaded", () => {
  let items = document.querySelectorAll('.slider .list .item');
  let next = document.getElementById('next');
  let prev = document.getElementById('prev');
  let thumbnails = document.querySelectorAll('.thumbnail .item');
  let countItem = items.length;
  let itemActive = 0;

  next.onclick = function() {
    itemActive = (itemActive + 1) % countItem;
    showSlider();
  };

  prev.onclick = function() {
    itemActive = (itemActive - 1 + countItem) % countItem;
    showSlider();
  };

  let refreshInterval = setInterval(() => {
    next.click();
  }, 5000);

  function showSlider() {
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    if (itemActiveOld) {
      itemActiveOld.classList.remove('active');
    }
    if (thumbnailActiveOld) {
      thumbnailActiveOld.classList.remove('active');
    }

    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');
  }

  thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
      itemActive = index;
      showSlider();
      clearInterval(refreshInterval);
      refreshInterval = setInterval(() => {
        next.click();
      }, 5000);
    });
  });

  showSlider();
});

let gallaries = document.querySelector('.gallaries');

let backBtn = document.getElementById('backBtn');
let nextBtn = document.getElementById('nextBtn');

// Scroll horizontally with the mouse wheel
gallaries.addEventListener('wheel', (evt) => {
  evt.preventDefault();
  gallaries.style.scrollBehavior = 'auto';
  gallaries.scrollLeft += evt.deltaY;
});

// Scroll left when back button is clicked
backBtn.addEventListener('click', () => {
  gallaries.style.scrollBehavior = 'smooth';
  gallaries.scrollLeft -= 900; // Adjust the value to set the scroll amount
});

// Scroll right when next button is clicked
nextBtn.addEventListener('click', () => {
  gallaries.style.scrollBehavior = 'smooth';
  gallaries.scrollLeft += 900; // Adjust the value to set the scroll amount
});





