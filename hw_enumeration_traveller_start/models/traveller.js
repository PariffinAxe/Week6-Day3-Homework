const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const journeysStarts = this.journeys.map((journey) => {
    return journey.startLocation;
  });
  return journeysStarts;
};

Traveller.prototype.getJourneyEndLocations = function () {
  const journeysEnds = this.journeys.map((journey) => {
    return journey.endLocation;
  });
  return journeysEnds;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const journeysTransports = this.journeys.filter((journey) => {
    return journey.transport === transport;
  });
  return journeysTransports;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const journeysOverX = this.journeys.filter((journey) => {
    return journey.distance >= minDistance;
  });
  return journeysOverX;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const totalDistance = this.journeys.reduce((runningTotal, journey) => {
    return runningTotal + journey.distance;
  }, 0);
  return totalDistance
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  const journeysTransports = this.journeys.map((journey) => {
    return journey.transport;
  });
  const uniqueJourneyTransports = new Set(journeysTransports);
  return Array.from(uniqueJourneyTransports);
};


module.exports = Traveller;
