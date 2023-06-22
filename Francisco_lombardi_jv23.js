function arregloDeObjetos(num) {
    let arr = [];
    for(let i=1; i<=num; i++) {
      arr.push({valor: i});
    }
    return arr;
  }
 /*
  arregloDeObjetos(5); // [{valor: 1}, {valor: 2}, {valor: 3}, {valor: 4}, {valor: 5}]
  arregloDeObjetos(3); // [{valor: 1}, {valor: 2}, {valor: 3}]
  */