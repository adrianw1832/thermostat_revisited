let Thermostat = function Thermostat() {
  this.defaultTemperature = 20;
  this.minimumTemperature = 10;
};

Thermostat.prototype.increaseTemperature = function() {
  this.defaultTemperature += 1;
};

Thermostat.prototype.decreaseTemperature = function() {
  if (this.defaultTemperature > this.minimumTemperature) {
    this.defaultTemperature -= 1;
  }
};
