let Thermostat = function Thermostat() {
  this.defaultTemperature = 20;
  this.minimumTemperature = 10;
  this.maximumTemperature = 35;
  this.powerSavingMode = false;
};

Thermostat.prototype.increaseTemperature = function() {
  if (this.defaultTemperature < this.maximumTemperature) {
    this.defaultTemperature += 1;
  }
};

Thermostat.prototype.decreaseTemperature = function() {
  if (this.defaultTemperature > this.minimumTemperature) {
    this.defaultTemperature -= 1;
  }
};

Thermostat.prototype.togglePowerSavingMode = function() {
  this.powerSavingMode = !this.powerSavingMode;
  if (this.powerSavingMode) {
    this.maximumTemperature = 25;
  } else {
    this.maximumTemperature = 35;
  }
};
