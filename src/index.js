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
const bookAFlightBtn = document.querySelector('.book-now-btn');
const claculateNewTripCostBtn = document.querySelector('.calculate-cost-button');
const returnToDashboardBtn = document.querySelector('.return-to-dashboard');
const submitTripBtn = document.querySelector('.submit-request');
const formDestinationInput = document.querySelector('.destinations-list');
const formDurationInput = document.querySelector('.select-duration');
const formTravelersInput = document.querySelector('.select-travelers');
const formDateInput = document.querySelector('.select-date');

//EVENT LISTENERS
window.addEventListener('load', generateUsersInfo);
bookAFlightBtn.addEventListener('click', function() {
  domUpdates.displayBookFlightForm(destinationsData);
});
claculateNewTripCostBtn.addEventListener('click', claculateNewTripCost);
returnToDashboardBtn.addEventListener('click', domUpdates.returnToDashboard);
submitTripBtn.addEventListener('click', addTripRequest);

//GLOBAL VARIABLES
let currentUser;
let destinationsData;
let tripsData;

//FETCH DAT
function generateUsersInfo() {
  Promise.all([fetchAPI.fetchUserData(6), fetchAPI.fetchTripsData(), fetchAPI.fetchDestinationsData()])
    .then(data => {
      currentUser = new Traveler(data[0]);
      tripsData = data[1];
      destinationsData = data[2];
      currentUser.findUsersTrips(tripsData.trips, destinationsData);
      currentUser.calculateTotalSpent();
      domUpdates.generateWelcomeBanner(currentUser.getUsersFirstName());
      domUpdates.placeCardsInCorrectSection(currentUser.trips, destinationsData);
    })
}

function claculateNewTripCost() {
  let newTrip = {
    destinationID: `${formDestinationInput.value}`,
    duration: `${formDurationInput.value}`,
    travelers: `${formTravelersInput.value}`,
    cost: 0
  };
  let instantiateNewTrip = new Trip(newTrip);
  instantiateNewTrip.calculateTotalCostofTrip(destinationsData);
  domUpdates.displayNewTripCost(instantiateNewTrip);
}

function addTripRequest() {
  let convertDate = new Date(formDateInput.value).toLocaleDateString('en-ZA');
  let newTrip = {
    id: tripsData.trips.length + 1,
    userID: currentUser.id,
    destinationID: Number(formDestinationInput.value),
    duration: Number(formDurationInput.value),
    travelers: Number(formTravelersInput.value),
    date: convertDate,
    status: 'pending',
    suggestedActivities: []
  };
  fetchAPI.postNewTrip(newTrip);
  fetchAPI.fetchTripsData()
    .then(trips => {
      tripsData = trips;
      currentUser.findUsersTrips(tripsData.trips, destinationsData);
      currentUser.calculateTotalSpent();
      domUpdates.placeCardsInCorrectSection(currentUser.trips, destinationsData);
    });
}
