function abbrevName(name) {
    const [firstName, lastName] = name.split(" ");
    return `${firstName.charAt(0)}.${lastName.charAt(0)}`;
  }
  /*
  La función recibe un string name que siempre incluye un espacio. Utiliza el método split para separar el string en dos partes: el nombre y el apellido, que quedan almacenados en las variables firstName y lastName, respectivamente.
  
  Luego, utiliza los métodos charAt para obtener la primera letra de cada parte y los une con un punto usando un template string.
  
  Para los ejemplos dados en la pregunta, se puede llamar a la función de la siguiente manera:
  abbrevName("Sam Harris"); // Devuelve "S.H"
  abbrevName("Evan Cole"); // Devuelve "E.C"
  abbrevName("David Mendieta"); // Devuelve "D.M"
  */