//QUERY SELECTORS
const welcomeBanner = document.querySelector('.welcome-message');
const upcomingFlightsSection = document.querySelector('.upcoming-flights');
const pendingFlightsSection = document.querySelector('.pending-flights');
const pastFlightsSection = document.querySelector('.past-flights');
const mainDashboard = document.querySelector('.main-dashboard');
const bookAFlightSection = document.querySelector('.book-a-flight');
const bookAFlightForm = document.querySelector('.book-flight-form');
const destinationsDropdown = document.querySelector('.destinations-list');
const newTripCostSection = document.querySelector('.cost-of-trip-container');
const dashboardHeader = document.querySelector('.dashboard-header');
const loginPage = document.querySelector('.login-page');
const noInfoPendingMessage = document.querySelector('.no-info-pending');
const noInfoUpcomingMessage = document.querySelector('.no-info-upcoming');
const noInfoPastMessage = document.querySelector('.no-info-past');

//FUNCTIONS
const domUpdates = {
  generateWelcomeBanner(name) {
    welcomeBanner.innerText = `Welcome ${name}`;
  },

  generateTripCard(trip, dataSet, section, noInfoMessage) {
    let destination = trip.getDestinationInfoById(dataSet);
    section.classList.remove('hidden');
    noInfoMessage.classList.add('hidden');
    section.innerHTML += `
      <section class="flight-card">
        <h3 class="destination-header card-header">Destination:</h3>
          <p class="destination-name">${destination.destination}</p>
        <img class="destination-img" src=${destination.image} alt=${destination.alt}>
        <div class="trip-dates-container">
          <div class="start-date-container">
            <h3 class="start-date-header card-header">On:</h3>
            <p class="trip-start-date">${trip.date}</p>
          </div>
          <div class="end-date-container">
            <h3 class="end-date-header card-header">Duration: </h3>
            <p class="trip-end-date">${trip.duration} Days</p>
          </div>
        </div>
        <h3 class="trip-cost-header card-header">Cost:</h3>
          <p class="trip-cost">$${trip.cost}</p>
      </section>`;
  },

  placeCardsInCorrectSection(trips, destinations) {
    let currentTime = new Date().getTime();
    pendingFlightsSection.innerHTML = '';
    upcomingFlightsSection.innerHTML = '';
    pastFlightsSection.innerHTML = '';
    trips.forEach(trip => {
      let tripDateToNum = new Date(trip.date).getTime();
      if (trip.status === 'pending') {
        this.generateTripCard(trip, destinations, pendingFlightsSection, noInfoPendingMessage);
      } else if (tripDateToNum > currentTime) {
        this.generateTripCard(trip, destinations, upcomingFlightsSection, noInfoUpcomingMessage);
      } else {
        this.generateTripCard(trip, destinations, pastFlightsSection, noInfoPastMessage);
      }
    })
  },

  populateDestinationsForForm(destinationsData) {
    destinationsData.destinations.forEach(destination => {
      destinationsDropdown.innerHTML += `
        <option value="${destination.id}">${destination.destination}</option>`
    })
  },

  displayBookFlightForm(dataSet) {
    mainDashboard.classList.add('hidden');
    bookAFlightSection.classList.add('hidden');
    bookAFlightForm.classList.remove('hidden');
    this.populateDestinationsForForm(dataSet);
  },

  displayNewTripCost(trip) {
    if (document.querySelector('.select-duration').value === '' || document.querySelector('.select-travelers').value === '' || document.querySelector('.select-date').value === '') {
      this.displayErrorMessage();
    } else {
      newTripCostSection.classList.remove('hidden');
      document.querySelector('.new-trip-cost').innerText = `$${trip.cost}`;
    }
  },

  returnToDashboard() {
    mainDashboard.classList.remove('hidden');
    bookAFlightSection.classList.remove('hidden');
    bookAFlightForm.classList.add('hidden');
    newTripCostSection.classList.add('hidden');
  },

  showDashboardAfterLogin() {
    loginPage.classList.add('hidden');
    mainDashboard.classList.remove('hidden');
    bookAFlightSection.classList.remove('hidden');
    dashboardHeader.classList.remove('hidden');
    bookAFlightSection.classList.remove('hidden');
  },

  displayYearlyAmount(amount) {
    document.querySelector('.total-spent').innerText = `You have spent $${amount} this past year!`;
  },

  displayFetchError() {
    document.querySelector('body').innerHTML = `<p>We are unable to get the data at this time. Reload the site and try again!</p>`;
  },

  displayErrorMessage() {
    document.querySelector('.error-message').classList.remove('hidden');
    setTimeout(() => {
      document.querySelector('.error-message').classList.add('hidden');
    }, 5000);
  }
}

export default domUpdates;
