//IMAGES
import './images/world.png';

//CSS FILE
import './css/base.scss';

//JS FILES
import Traveler from './traveler.js';
import fetchAPI from './fetch.js';

//QUERY SELECTORS

//EVENT LISTENERS
window.addEventListener('load', generateUsersInfo);

//GLOBAL VARIABLES
let currentUser;
let tripsData;
let destinationsData;

//FETCH DATA
function generateUsersInfo() {
  Promise.all([fetchAPI.fetchUserData(1), fetchAPI.fetchTripsData(), fetchAPI.fetchDestinationsData()])
    .then(data => {
      currentUser = new Traveler(data[0]);
      tripsData = data[1];
      destinationsData = data[2];
      console.log(destinationsData)

      currentUser.findUsersTrips(tripsData, destinationsData);
      console.log(currentUser);
    })
}
