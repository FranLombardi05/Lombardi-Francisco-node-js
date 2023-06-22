function nuevoArreglo(num) {
    let arr = [];
    for (let i = 1; i <= num; i++) {
      arr.push(i);
    }
    return arr;
  }
  /*
  La función crea un nuevo arreglo vacío y luego utiliza un bucle for para agregar elementos al arreglo, comenzando desde 1 hasta el número que se le haya pasado como parámetro.
  
  Para el ejemplo dado en la pregunta, se puede llamar a la función de esta manera:
  
  nuevoArreglo(5); // Devuelve [1, 2, 3, 4, 5]
  nuevoArreglo(10); // Devuelve [1, 2, 3, 4, 5, 6, 7, 8, 9, 10
  */