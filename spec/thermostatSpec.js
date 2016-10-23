describe('thermostat', () => {
  it('has a default starting temperature', () => {
    let thermostat = new Thermostat();
    expect(thermostat.defaultTemperature).toEqual(20);
  });

  it('increases temperature by one when increase temperature method is called', () => {
    let thermostat = new Thermostat();
    thermostat.increaseTemperature();
    expect(thermostat.defaultTemperature).toEqual(21);
  });
});
