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
});
