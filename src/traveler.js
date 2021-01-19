import Trip from './trip';

class Traveler {
  constructor(user) {
    this.id = user.id;
    this.name = user.name;
    this.travelerType = user.travelerType;
    this.trips = [];
    this.totalSpent = 0
  }

  getUsersFirstName() {
    let usersFullName = this.name.split(' ');
    return usersFullName[0];
  }

  findUsersTrips (tripsData, destinationData) {
    this.trips = [];
    tripsData.filter(trip => {
      if (trip.userID === this.id) {
        this.trips.push(new Trip(trip));
      }
    })
    this.trips.forEach(trip => trip.calculateTotalCostofTrip(destinationData));
  }

  calculateTotalSpent() {
    this.totalSpent = this.trips.reduce((total, trip) => {
      total += trip.cost;
      return total;
    }, 0)
  }
}

export default Traveler;
