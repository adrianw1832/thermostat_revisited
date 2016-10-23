describe('thermostat', () => {
  it('has a default starting temperature', () => {
    let thermostat = new Thermostat();
    expect(thermostat.defaultTemperature).toEqual(20);
  });
});
