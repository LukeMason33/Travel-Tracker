//QUERY SELECTORS
let welcomeBanner = document.querySelector('.welcome-message');

//FUNCTIONS
const domUpdates = {
  generateWelcomeBanner(name) {
    welcomeBanner.innerText = `Welcome ${name}`;
  }
}

export default domUpdates;
