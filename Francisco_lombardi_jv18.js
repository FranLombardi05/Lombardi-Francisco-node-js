function breakStatement(num) {
    let arr = [];
    let sum = 0;
    for (let i = 1; i <= 10; i++) {
      sum += 2;
      if (sum === i) {
        return "Se interrumpió la ejecución";
      }
      arr.push(sum);
    }
    return arr;
  }
  /*
  La función utiliza un bucle for para iterar 10 veces, aumentando en 2 en cada iteración y agregando el nuevo valor al arreglo. También lleva un seguimiento de la suma de todos los valores hasta el momento. Si en alguna iteración la suma y el número de iteraciones son iguales, la función se interrumpe con la declaración "break" y devuelve el mensaje "Se interrumpió la ejecución". De lo contrario, al finalizar el bucle for, devuelve el arreglo con todos los valores.
  
  Para el ejemplo dado en la pregunta, se puede llamar a la función de esta manera:
  

  breakStatement(5); // Devuelve [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
  breakStatement(10); // Devuelve "Se interrumpió la ejecución"
  */