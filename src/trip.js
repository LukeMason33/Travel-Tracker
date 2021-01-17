class Trip {
  constructor(trip) {
    this.id = trip.id;
    this.userID = trip.userID;
    this.destinationID = trip.destinationID;
    this.travelers = trip.travelers;
    this.date = trip.date;
    this.duration = trip.duration;
    this.status = trip.status;
    this.suggestedActivities = trip.suggestedActivities;
    this.cost = 0
  }

  calculateTotalCostofTrip (dataSet) {
    let tripDestination = dataSet.find(data => this.destinationID === data.id);
    let totalLodgingCost = (this.duration * tripDestination.estimatedLodgingCostPerDay);
    let totalFlightCost = (this.travelers * tripDestination.estimatedFlightCostPerPerson);
    let agentFee = (totalLodgingCost + totalFlightCost) * 0.1;
    return this.cost = (totalLodgingCost + totalFlightCost + agentFee);
  }
}

export default Trip;
