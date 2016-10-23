describe('thermostat', () => {
  let thermostat;

  beforeEach(() => {
    thermostat = new Thermostat();
  });

  it('has a default starting temperature', () => {
    expect(thermostat.currentTemperature).toEqual(20);
  });

  it('increases temperature by one when increase temperature method is called', () => {
    thermostat.increaseTemperature();
    expect(thermostat.currentTemperature).toEqual(21);
  });

  it('decreases temperature by one when decrease temperature method is called', () => {
    thermostat.decreaseTemperature();
    expect(thermostat.currentTemperature).toEqual(19);
  });

  it('has a minimum temperature of 10', () => {
    expect(thermostat.minimumTemperature).toEqual(10);
  });

  it('cannot go below a minimum temperature of 10', () => {
    for (let i = 0; i < 11; i++) {
      thermostat.decreaseTemperature();
    }
    expect(thermostat.currentTemperature).toEqual(10);
  });

  it('has a default power saving mode off', () => {
    expect(thermostat.powerSavingMode).toBe(false);
  });

  describe('#powerSavingMode', () => {
    it('toggles to on when it is called once', () => {
      thermostat.togglePowerSavingMode();
      expect(thermostat.powerSavingMode).toBe(true);
    });

    it('toggles to off when it is called twice', () => {
      thermostat.togglePowerSavingMode();
      thermostat.togglePowerSavingMode();
      expect(thermostat.powerSavingMode).toBe(false);
    });
  });

  it('has a maximum temperature of 35 when powerSavingMode is off', () => {
    for (let i = 0; i < 16; i++) {
      thermostat.increaseTemperature();
    }
    expect(thermostat.currentTemperature).toEqual(35);
  });

  it('has a maximum temperature of 25 when powerSavingMode is on', () => {
    thermostat.togglePowerSavingMode();
    for (var i = 0; i < 6; i++) {
      thermostat.increaseTemperature();
    }
    expect(thermostat.currentTemperature).toEqual(25);
  });

  it('has a reset fucntion that retuns the temperature to 20', () => {
    thermostat.increaseTemperature();
    thermostat.increaseTemperature();
    thermostat.resetTemperature();
    expect(thermostat.currentTemperature).toEqual(20);
  });

  it('has a red colour when the current temperature is above 24', () => {
    for (var i = 0; i < 5; i++) {
      thermostat.increaseTemperature();
    }
    expect(thermostat.colourState).toEqual('Red');
  });

  it('has a yellow colour when the current temperature is between 18 and 24', () => {
    expect(thermostat.colourState).toEqual('Yellow');
  });

  it('has a green colour when the current temperature is below 18', () => {
    for (var i = 0; i < 5; i++) {
      thermostat.decreaseTemperature();
    }
    expect(thermostat.colourState).toEqual('Green');
  });
});
