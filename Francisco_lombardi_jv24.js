function pluck(arr, property) {
    return arr.map(obj => obj[property]);
  }
  /*
  Esta función toma un arreglo de objetos y el nombre de una propiedad y devuelve un nuevo arreglo solo con los valores dentro de la propiedad recibida. La función utiliza el método map() para iterar sobre el arreglo y obtener el valor de la propiedad especificada en cada objeto, y luego devuelve el arreglo resultante.

  var productos = [{ name: 'TV LCD', price: 100}, { name: 'Computadora', price: 500 }];
  
  console.log(pluck(productos, 'name')); // ['TV LCD', 'Computadora']
  console.log(pluck(productos, 'price')); // [100, 500]
  */