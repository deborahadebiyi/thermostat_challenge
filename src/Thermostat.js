class Thermostat {

  constructor() {
    this.temperature = 20;
    this.minTemperature = 10;
    this.powerSaver = true;
    this.maxTemperature = 25;
  }

  up(){
    if (this.temperature < this.maxTemperature){
      this.temperature += 1;
    }
  }

  down(){
    if(this.temperature > this.minTemperature) {
      this.temperature -= 1;
    }
  }

  powerSaverSwitch() {
    if (this.powerSaver === true) {
      this.maxTemperature = 32;
      this.powerSaver = false;
    } else {
      if (this.temperature > 25) {
        this.temperature = 25;
      }
      this.maxTemperature = 25;
      this.powerSaver = true;
    }
  }

  reset(){
    this.temperature = 20;
  }

  checkUsage(){
    if(this.temperature < 18){
      return 'low-usage';
    } else if(this.temperature <= 25){
      return 'medium-usage';
    } else {
      return 'high-usage';
    }
  }
}
