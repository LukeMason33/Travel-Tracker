import domUpdates from './domUpdates.js';

const fetchAPI = {
  handleFetchError: (response) => {
    if(!response.ok) {
      throw response;
    }
    return response;
  },

  fetchUserData: (userID) => {
    return fetch (`http://localhost:3001/api/v1/travelers/${userID}`)
      .then(response => fetchAPI.handleFetchError(response))
      .then(response => response.json())
  },

  fetchTripsData: () => {
    return fetch("http://localhost:3001/api/v1/trips")
      .then(response => fetchAPI.handleFetchError(response))
      .then(response => response.json())
  },

  fetchDestinationsData: () => {
    return fetch("http://localhost:3001/api/v1/destinations")
      .then(response => fetchAPI.handleFetchError(response))
      .then(response => response.json())
  },

  postNewTrip: (trip) => {
    return fetch("http://localhost:3001/api/v1/trips", {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'id': trip.id,
        'userID': trip.userID,
        'destinationID': trip.destinationID,
        'travelers': trip.travelers,
        'date': trip.date,
        'duration': trip.duration,
        'status': trip.status,
        'suggestedActivities': trip.suggestedActivities
      })
    })
    .then(response => fetchAPI.handleFetchError(response))
    .then(response => response.json())
  }
}

export default fetchAPI;
