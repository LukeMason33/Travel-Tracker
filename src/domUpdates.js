//QUERY SELECTORS
let welcomeBanner = document.querySelector('.welcome-message');
let upcomingFlightsSection = document.querySelector('.upcoming-flights');

//FUNCTIONS
const domUpdates = {
  generateWelcomeBanner(name) {
    welcomeBanner.innerText = `Welcome ${name}`;
  }

  generateTripCard(trips) {

  }
}

export default domUpdates;
