class Thermostat {

  constructor() {

    this.temperature = 20;
    this.minTemperature = 10;
    this.powerSaver = true;
    this.maxTemperatureOn = 25;
    this.maxTemperatureOff = 32;
  }

  up(){
    if(this.maxTemp()){
      return;
    }else{
    this.temperature += 1;
  };
  }

  down(){
    if(this.temperature < 10) {
      this.temperature = this.minTemperature;
    } else {
      this.temperature -= 1;
    }
  }

  powerSaverOn(){
   this.maxTemperatureOn;
   this.powerSaver = true;
  }

  powerSaverOff(){
    this.maxTemperatureOff = 32;
    this.powerSaver = false;
  }

  maxTemp(){
    if(this.powerSaver === false) {
      return this.temperature === this.maxTemperatureOff;
    } else {
      return this.temperature === this.maxTemperatureOn;
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
