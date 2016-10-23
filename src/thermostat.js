let Thermostat = function Thermostat() {
  this.defaultTemperature = 20;
};

Thermostat.prototype.increaseTemperature = function() {
  this.defaultTemperature += 1;
};
