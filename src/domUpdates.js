//QUERY SELECTORS
let welcomeBanner = document.querySelector('.welcome-message');
let upcomingFlightsSection = document.querySelector('.upcoming-flights');
let pendingFlightsSection = document.querySelector('.pending-flights');
let pastFlightsSection = document.querySelector('.past-flights');

//FUNCTIONS
const domUpdates = {
  generateWelcomeBanner(name) {
    welcomeBanner.innerText = `Welcome ${name}`;
  },

  generateTripCard(trip, dataSet, section) {
    let destination = trip.getDestinationInfoById(dataSet);
    section.innerHTML += `
      <section class="flight-card">
        <h3 class="destination-header card-header">Destination:</h3>
          <p class="destination-name">${destination.destination}</p>
        <img class="destination-img" src=${destination.image} alt=${destination.alt}>
        <div class="trip-dates-container">
          <div class="start-date-container">
            <h3 class="start-date-header card-header">From:</h3>
            <p class="trip-start-date">${trip.date}</p>
          </div>
          <div class="end-date-container">
            <h3 class="end-date-header card-header">To:</h3>
            <p class="trip-end-date">Lovely Island</p>
          </div>
        </div>
        <h3 class="trip-cost-header card-header">Cost:</h3>
          <p class="trip-cost">$${trip.cost}</p>
      </section>`;
  },

  placeCardsInCorrectSection (trips, destinations) {
    let currentTime = new Date().getTime();
    trips.forEach(trip => {
      let tripDateToNum = new Date(trip.date).getTime();
      if (trip.status === 'pending') {
        this.generateTripCard(trip, destinations, pendingFlightsSection);
      } else if (tripDateToNum > currentTime) {
        this.generateTripCard(trip, destinations, upcomingFlightsSection);
      } else {
        this.generateTripCard(trip, destinations, pastFlightsSection);
      }
    })
  }
}

export default domUpdates;
