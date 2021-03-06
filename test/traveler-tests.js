import {expect} from 'chai';

import destinations from './test-data/destinations-data';
import traveler from './test-data/traveler-data';
import trips from './test-data/trips-data';
import Traveler from '../src/traveler';

describe ('Traveler', function () {
  let user;

  beforeEach(function() {
    user = new Traveler(traveler);
  });

  it('should be a function', function() {
    expect(Traveler).to.be.a('function');
  })

  it('should initialize with an id', function() {
    expect(user.id).to.eq(1);
  })

  it('should initialize with a name', function() {
    expect(user.name).to.eq('Ham Leadbeater');
  })

  it('should initialize with a traveler type', function() {
    expect(user.travelerType).to.eq('relaxer');
  })

  it('should initialize with no trips', function() {
    expect(user.trips).to.deep.eq([]);
  })

  it('should initialize with $0 spent', function() {
    expect(user.totalSpentThisYear).to.eq(0);
  })

  it('should be able to find the user specific trips', function() {
    user.findUsersTrips(trips, destinations);
    expect(user.trips).to.deep.eq([{
        "id": 1,
        "userID": 1,
        "destinationID": 49,
        "travelers": 1,
        "date": "2019/09/16",
        "duration": 8,
        "status": "approved",
        "suggestedActivities": [],
        "cost": 5819
    },
    {
        "id": 3,
        "userID": 1,
        "destinationID": 22,
        "travelers": 4,
        "date": "2020/05/22",
        "duration": 17,
        "status": "pending",
        "suggestedActivities": [],
        "cost": 4543
    },
    {
        "id": 5,
        "userID": 1,
        "destinationID": 29,
        "travelers": 3,
        "date": "2020/04/30",
        "duration": 18,
        "status": "approved",
        "suggestedActivities": [],
        "cost": 5214
    }]);
  })

   it('should calculate the total amount spent by traveler', function() {
     user.findUsersTrips(trips, destinations);
     user.calculateTotalSpent();
     expect(user.totalSpentThisYear).to.eq(9757);
   })
})
