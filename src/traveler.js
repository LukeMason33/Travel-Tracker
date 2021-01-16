class Traveler {
  constructor(user) {
    this.id = user.id;
    this.name = user.name;
    this.travelerType = user.travelerType;
    this.trips = [];
    this.totalSpent = 0
  }

  findUsersTrips (dataSet) {
    dataSet.filter(data => {
      if (data.userID === this.id) {
        this.trips.push(data);
      }
    })
  }

  calculateTotalSpent() {
    this.totalSpent = his.trips.reduce((total, trip) => {
      acc += trip.cost;
      return total;
    }, 0)
  }
}
