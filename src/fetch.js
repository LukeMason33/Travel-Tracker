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
  }
}

export default fetchAPI;
