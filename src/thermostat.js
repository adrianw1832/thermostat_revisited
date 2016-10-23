const defaultTemperature = 20;
const minimumTemperature = 10;
const maxTempWithPowerSaving = 25;
const maxTempWithoutPowerSaving = 35;
const defaultPowerSavingMode = false;

let Thermostat = function Thermostat() {
  this.currentTemperature = defaultTemperature;
  this.minimumTemperature = minimumTemperature;
  this.maximumTemperature = maxTempWithoutPowerSaving;
  this.powerSavingMode = defaultPowerSavingMode;
  this.colourState = 'Yellow';
};

Thermostat.prototype.increaseTemperature = function() {
  if (this.currentTemperature < this.maximumTemperature) {
    this.currentTemperature += 1;
    this._adjustColourState();
  }
};

Thermostat.prototype.decreaseTemperature = function() {
  if (this.currentTemperature > this.minimumTemperature) {
    this.currentTemperature -= 1;
    this._adjustColourState();
  }
};

Thermostat.prototype.togglePowerSavingMode = function() {
  this.powerSavingMode = !this.powerSavingMode;
  if (this.powerSavingMode) {
    this.maximumTemperature = maxTempWithPowerSaving;
  } else {
    this.maximumTemperature = maxTempWithoutPowerSaving;
  }
};

Thermostat.prototype.resetTemperature = function() {
  this.currentTemperature = defaultTemperature;
};

Thermostat.prototype._adjustColourState = function() {
  if (this.currentTemperature > 24) {
    this.colourState = 'Red';
  } else if (this.currentTemperature < 18) {
    this.colourState = 'Green';
  } else {
    this.colourState = 'Yellow';
  }
};
