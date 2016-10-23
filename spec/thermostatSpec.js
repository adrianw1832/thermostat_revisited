describe('thermostat', () => {
  let thermostat;

  beforeEach(() => {
    thermostat = new Thermostat();
  });

  it('has a default starting temperature', () => {
    expect(thermostat.defaultTemperature).toEqual(20);
  });

  it('increases temperature by one when increase temperature method is called', () => {
    thermostat.increaseTemperature();
    expect(thermostat.defaultTemperature).toEqual(21);
  });

  it('decreases temperature by one when decrease temperature method is called', () => {
    thermostat.decreaseTemperature();
    expect(thermostat.defaultTemperature).toEqual(19);
  });

  it('has a minimum temperature of 10', () => {
    expect(thermostat.minimumTemperature).toEqual(10);
  });

  it('cannot go below a minimum temperature of 10', () => {
    for (let i = 0; i < 11; i++) {
      thermostat.decreaseTemperature();
    }
    expect(thermostat.defaultTemperature).toEqual(10);
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
    expect(thermostat.defaultTemperature).toEqual(35);
  });

  it('has a maximum temperature of 25 when powerSavingMode is on', () => {
    thermostat.togglePowerSavingMode();
    for (var i = 0; i < 6; i++) {
      thermostat.increaseTemperature();
    }
    expect(thermostat.defaultTemperature).toEqual(25);
  });
});
