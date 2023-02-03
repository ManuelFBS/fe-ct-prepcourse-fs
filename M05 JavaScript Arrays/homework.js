/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[0];
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[array.length - 1];
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length;
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   var sumarUno = array.map(elem => {
      return elem + 1;
   });
   return sumarUno;
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return array;
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   var frase = palabras.join(' ');
   return frase;
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   if (array.includes(elemento) === true) return true;
   else return false;
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   var sumaElementos = 0;
   for (var i = 0; i < arrayOfNums.length; i++) sumaElementos += arrayOfNums[i];

   return sumaElementos;
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   var sumaElementos = 0;
   var promedio = 0;
   for (var i = 0; i < resultadosTest.length; i++) sumaElementos += resultadosTest[i];

   promedio = sumaElementos / resultadosTest.length;
   return promedio;
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   var mayor = 0;
   for (var i = 1; i < arrayOfNums.length; i++) {
      if (arrayOfNums[i] > mayor) mayor = arrayOfNums[i];
   }
   return mayor;
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   if (arguments.length > 0) {
      var multiplicarTodos = 1;
      for (var i = 0; i < arguments.length; i++) {
         multiplicarTodos *= arguments[i];
      }
      return multiplicarTodos;
   }
   else return 0;
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   var cant = 0;
   for (var i = 0; i < array.length; i++) {
      if (array[i] > 18) cant++;
   }
   return cant;
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   /*if (numeroDeDia === 1 || numeroDeDia === 6) return "Es fin de semana";
   else return "Es dia laboral";*/
   if (numeroDeDia > 1 && numeroDeDia < 7) return "Es dia laboral";
   else return "Es fin de semana";
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   var numStr = num.toString();
   var array = numStr.split('');
   if (array[0] === '9') return true;
   return false;
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   var iguales;
   var elem = array[0];
   for (var i = 0; i < array.length; i++) {
      if (elem === array[i]) iguales = true
      else iguales = false;
   }
   return iguales;
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   var mesesSolicitados = [];
   for (var i = 0; i < array.length; i++) {
      if (array[i] === 'Enero') mesesSolicitados.push('Enero');
      if (array[i] === 'Marzo') mesesSolicitados.push('Marzo');
      if (array[i] === 'Noviembre') mesesSolicitados.push('Noviembre');
   }
   if (mesesSolicitados.includes('Enero') === true && 
      mesesSolicitados.includes('Marzo') === true && 
      mesesSolicitados.includes('Noviembre') === true) return mesesSolicitados;
   else return 'No se encontraron los meses pedidos';
}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   var tablaMultiplicarDe6 = [];
   var result = 0;
   for (var i = 0; i <= 10; i++) {
      result = 6 * i;
      tablaMultiplicarDe6.push(result);
   }
   return tablaMultiplicarDe6;
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   var mayoresDe100 = [];
   for (var i = 0; i < array.length; i++) {
      if(array[i] > 100) {
         mayoresDe100.push(array[i]);
      }
   }
   return mayoresDe100;
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   var arraySuma = [];
   var interrupcion = false;
   for (var i = 0; i < 10; i++) {
      num += 2;
      arraySuma.push(num);
      if (num === 10) {
         interrupcion = true;
         break;
      }
   }
   if (interrupcion) return 'Se interrumpió la ejecución';
   else return arraySuma;
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   var arraySuma = [];
   for (var i = 0; i < 10; i++) {
      if (i === 5) continue;
      num += 2;
      arraySuma.push(num);
   }
   return arraySuma;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
