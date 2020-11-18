
$(document).ready(function(){
  let thermostat = new Thermostat();

  $('.button-up').click( function(){
      thermostat.up();
      draw_page();
  });

  $('.button-down').click( function(){
      thermostat.down();
      draw_page();
  });

  $('.button-reset').click( function(){
    thermostat.reset();
    draw_page();
  });

  $('.button-saver').click( function(){
    thermostat.powerSaverSwitch()
    $('.button-saver').toggleClass('power-saver-off');
    draw_page()
  });

  function draw_page(){
    $('.temp').text(thermostat.temperature);
    // used id in usage because of the 3 different classes,
    // could prob be done better
    $('#usage').removeClass();
    $('#usage').addClass(thermostat.checkUsage());
  }

  draw_page();
})
