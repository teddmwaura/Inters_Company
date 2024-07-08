/* login form */

const hero = document.querySelector('.hero');
const register = document.querySelector('.register-link');
const login = document.querySelector('.login-link');
const btn = document.querySelector('.button');
const closed = document.querySelector('.closed');
register.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default link behavior
    hero.classList.add('active');
});

login.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default link behavior
    hero.classList.remove('active');
})

btn.addEventListener('click', ()=>{
  hero.classList.add('active-popup');
});

closed.addEventListener('click', ()=>{
  hero.classList.remove('active-popup');
});

/* section 3 */

document.addEventListener('DOMContentLoaded', function() {
  const divisions = document.querySelectorAll('.division5, .division6, .division7, .division8');
  let currentIndex = 0;

  function showNextDivision() {
    // Remove the show class from all divisions
    divisions.forEach(division => division.classList.remove('show'));

    // Add the show class to the current division
    divisions[currentIndex].classList.add('show');

    // Increment the index to show the next division
    currentIndex = (currentIndex + 1) % divisions.length;
  }

  // Initial call to show the first division
  showNextDivision();

  // Set interval to show the next division every 3 seconds
  setInterval(showNextDivision, 3000); // Adjust the interval as needed
});

