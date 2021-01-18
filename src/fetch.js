const fetchAPI = {
  handleFetchError: (response) => {
    if(!response.ok) {
      throw 'We are having difficulty getting the data right now!';
    }
  },

  fetchUserData: (userID) => {
    return fetch (`http://localhost:3001/api/v1/travelers/${userID}`)
      .then(this.handleFetchError(response))
      .then(response => response.json())
      .catch(error => console.log(error));
  },

  fetchTripsData: () => {
    return fetch("http://localhost:3001/api/v1/trips")
      .then(this.handleFetchError(response))
      .then(response => response.json())
      .catch(error => console.log(error));
  },

  fetchDestinationsData: () => {
    return fetch("http://localhost:3001/api/v1/destinations")
      .then(this.handleFetchError(response))
      .then(response => response.json())
      .catch(error => console.log(error));
  }
}
