const fetchAPI = {
  handleFetchError: (response) => {
    if(!response.ok) {
      throw 'We are having difficulty getting the data right now!';
    }
    return response;
  },

  fetchUserData: (userID) => {
    return fetch (`http://localhost:3001/api/v1/travelers/${userID}`)
      .then(response => fetchAPI.handleFetchError(response))
      .then(response => response.json())
      .catch(error => console.log(error));
  },

  fetchTripsData: () => {
    return fetch("http://localhost:3001/api/v1/trips")
      .then(response => fetchAPI.handleFetchError(response))
      .then(response => response.json())
      .catch(error => console.log(error));
  },

  fetchDestinationsData: () => {
    return fetch("http://localhost:3001/api/v1/destinations")
      .then(response => fetchAPI.handleFetchError(response))
      .then(response => response.json())
      .catch(error => console.log(error));
  },

  postNewTrip: (trip) => {
    return featch("http://localhost:3001/api/v1/trips", {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        id: trip.id,
        userID: trip.userID,
        destinationID: trip.destinationID,
        travelers: trip.travelers,
        date: trip.date,
        duration: trip.duration,
        status: 'pending',
        suggestedActivities: []
      })
    })
    .then(response => fetchAPI.handleFetchError(response))
    .then(response => response.json())
    .catch(error => console.log(error));
  }
}

export default fetchAPI;
