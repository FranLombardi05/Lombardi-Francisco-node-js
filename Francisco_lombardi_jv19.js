function toTime(seconds) {
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);
    let hoursStr = hours === 1 ? " hour" : " hours";
    let minutesStr = minutes === 1 ? " minute" : " minutes";
    return `${hours} ${hoursStr} and ${minutes} ${minutesStr}`;
  }
  /*
  La función utiliza operaciones matemáticas para calcular la cantidad de horas y minutos que corresponden a la cantidad de segundos que se le haya pasado como parámetro. Luego, se utiliza un operador ternario para determinar si las cadenas de texto "hour" y "minute" deben estar en singular o en plural, dependiendo del valor de las variables de horas y minutos.
  
  Para el ejemplo dado en la pregunta, se puede llamar a la función de esta manera:
  

  toTime(3600); // Devuelve "1 hour and 0 minutes"
  toTime(3500); // Devuelve "0 hours and 58 minutes"
  toTime(323500); // Devuelve "89 hours and 51 minutes"
  */