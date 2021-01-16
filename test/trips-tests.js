import {expect} from 'chai';

import destinations from './test-data/destinations-data';
import trips from './test-data/trips-data';
import Trip from '../src/trip';

describe('Trip', function() {
  let trip;

  beforeEach(function() {
    trip = new Trip(trips[0]);
  })

  it('should initialize with an id', function() {
    expect(trip.id).to.eq(1);
  })

  it('should initialize with a userID', function() {
    expect(trip.userID).to.eq(1);
  })

  it('should initialize with a destinationID', function() {
    expect(trip.destinationID).to.eq(49);
  })

  it('should initialize with a number of travlers', function() {
    expect(trip.travelers).to.eq(1);
  })

  it('should initialize with a date', function() {
    expect(trip.date).to.eq("2019/09/16");
  })

  it('should initialize with a duration', function() {
    expect(trip.duration).to.eq(8);
  })

  it('should initialize with a status', function() {
    expect(trip.status).to.eq("approved");
  })

  it('should initialize with no suggestedActivities', function() {
    expect(trip.suggestedActivities).to.deep.eq([]);
  })

  it('should initialize $0 cost', function() {
    expect(trip.cost).to.eq(0);
  })

  it('should calculate the total cost of the trip', function() {
    trip.calculateTotalCostofTrip(destinations);
    expect(trip.cost).to.eq(5819);
  })
})
