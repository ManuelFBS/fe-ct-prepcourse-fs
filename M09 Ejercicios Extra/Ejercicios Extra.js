/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   return Object.entries(objeto);
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   let string1 = string.toLowerCase();
   string1 = string1.split('');
   string1.sort();
   string1 = string1.join('');
   const string2 = string1;
   let objetoString = {};
   let cont = 0;
   for (let i = 0; i < string2.length; i++) {
      for (let j = 0; j < string1.length; j++) {
         if (string2[i] === string1[j]) {
            cont++;
            objetoString[string2[i]] = cont;
         }
      }
      cont = 0;
   }
   return objetoString;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   const mayusculas = /[A-Z]/g;
   const minusculas = /[a-z]/g;
   let irComienzo = string.match(mayusculas).join('') + string.match(minusculas).join('');
   
   return irComienzo;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   let separacionDePalabras = frase.split(' ');
   let palabrasInvertidas = [];
   let nuevaFrase = [];        
   //
   String.prototype.reverse = function() {
      var stringInv = [];
      for (var i = this.length - 1; i >= 0; i--) {
         stringInv.push(this[i]);
      }
      return stringInv.join('');
   }
   //
   for (let i = 0; i < separacionDePalabras.length; i++) {
      palabrasInvertidas.push(separacionDePalabras[i].reverse());
   }
   nuevaFrase = palabrasInvertidas.join(' ');
   //
   return nuevaFrase;
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   let strNumInvertido = '';
   // 
   String.prototype.reverse = function() {
      var stringInv = [];
      for (var i = this.length - 1; i >= 0; i--) {
         stringInv.push(this[i]);
      }
      return stringInv.join('');
   }
   strNumInvertido = numero.toString().reverse();
   //
   if (numero.toString() === strNumInvertido) return 'Es capicua';
   else return 'No es capicua';
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   let array = string.split('');
   let nuevoArray = [];
   //
   for (let i = 0; i < array.length; i++) {
      if (array[i] === 'a' || array[i] === 'b' || array[i] === 'c') continue;
      else nuevoArray.push(array[i]);
   }
   let nuevoString = nuevoArray.join('');
   //
   return nuevoString;
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
