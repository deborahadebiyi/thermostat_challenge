describe("Thermostat", function(){
  var thermostat;
  beforeEach(function(){
    thermostat = new Thermostat();
  });
  it("temperature starts at 20 degrees", function(){
    expect(thermostat.temperature).toEqual(20);
  });
  it("increases the temperature", function(){
    thermostat.up();
    expect(thermostat.temperature).toEqual(21);
  });
  it("decrease the temperature", function(){
    thermostat.down();
    expect(thermostat.temperature).toEqual(19);
  });
  it("minimum temp is set at 10 degrees", function(){
    for (var i=0; i <12; i++){
      thermostat.down();
    }
    expect(thermostat.temperature).toEqual(10);
  });
  it("power saving mode is on by default", function(){
    expect(thermostat.powerSaver).toBe(true);
  });
  it("switches power saving mode off", function(){
    thermostat.powerSaverSwitch();
    expect(thermostat.powerSaver).toBe(false);
  });
  it("switches power saving mode on after turning it off", function(){
    thermostat.powerSaverSwitch();
    expect(thermostat.powerSaver).toBe(false);
    thermostat.powerSaverSwitch();
    expect(thermostat.powerSaver).toBe(true);
  });
  it("with power saving mode on,max temp is 25 degrees", function(){
    for (var i=0; i<7; i++){
      thermostat.up();
    }
    expect(thermostat.temperature).toEqual(25);
  });
  it("with power saving mode off, max temp is 32 degrees", function(){
    thermostat.powerSaverSwitch();
    for (var i=0; i<14; i++){
      thermostat.up();
    }
    expect(thermostat.temperature).toEqual(32);
  })
  it("resets temperature to 20 degrees", function(){
      thermostat.up();
      thermostat.reset();
      expect(thermostat.temperature).toEqual(20);
  })
  describe("checks energy usage", function(){
    it("returns low usage", function(){
      thermostat.temperature = 17;
      expect(thermostat.checkUsage()).toEqual('low-usage')
    })
    it("returns medium usage", function(){
      thermostat.temperature = 25;
      expect(thermostat.checkUsage()).toEqual('medium-usage')
    })
    it("returns high usage", function(){
      thermostat.temperature = 29;
      expect(thermostat.checkUsage()).toEqual('high-usage')
    })
  })
});
