//IMAGES
import './images/world.png';

//CSS FILE
import './css/base.scss';

//JS FILES
import Traveler from './traveler.js';
import Trip from './trip.js';
import fetchAPI from './fetch.js';
import domUpdates from './domUpdates.js';

//QUERY SELECTORS
let bookAFlightBtn = document.querySelector('.book-now-btn');
let claculateNewTripCostBtn = document.querySelector('.calculate-cost-button');

//EVENT LISTENERS
window.addEventListener('load', generateUsersInfo);

bookAFlightBtn.addEventListener('click', function() {
  domUpdates.displayBookFlightForm(destinationsData);
});

claculateNewTripCostBtn.addEventListener('click', claculateNewTripCost);

//GLOBAL VARIABLES
let currentUser;
let destinationsData;

//FETCH DAT
function generateUsersInfo() {
  Promise.all([fetchAPI.fetchUserData(5), fetchAPI.fetchTripsData(), fetchAPI.fetchDestinationsData()])
    .then(data => {
      currentUser = new Traveler(data[0]);
      destinationsData = data[2];
      currentUser.findUsersTrips(data[1].trips, destinationsData);
      currentUser.calculateTotalSpent();
      domUpdates.generateWelcomeBanner(currentUser.getUsersFirstName());
      domUpdates.placeCardsInCorrectSection(currentUser.trips, destinationsData);
    })
}

function claculateNewTripCost() {
  let newTrip = {
    destinationID: `${document.querySelector('.destinations-list').value}`,
    duration: `${document.querySelector('.select-duration').value}`,
    travelers: `${document.querySelector('.select-travelers').value}`,
    cost: 0
  };
  let instantiateNewTrip = new Trip(newTrip);
  instantiateNewTrip.calculateTotalCostofTrip(destinationsData);
  domUpdates.displayNewTripCost(instantiateNewTrip);
}
