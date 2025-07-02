// Tarea 1: Crear variable input
const input = "Trementina y tortugas";

// Tarea 2: Crear matriz vowels (constante)
const vowels = ['a', 'e', 'i', 'o', 'u'];

// Tarea 3: Crear resultArray vacío
const resultArray = [];

// Tarea 4: Bucle para recorrer input
for (let i = 0; i < input.length; i++) {
  // Tarea 5: Comprobar posición (comentado después de verificación)
  // console.log('Posición externa:', i);
  
  // Tarea 10: Duplicar 'e'
  if (input[i] === 'e') {
    resultArray.push(input[i]);
  }
  
  // Tarea 11: Duplicar 'u'
  if (input[i] === 'u') {
    resultArray.push(input[i]);
  }
  
  // Tarea 6: Bucle anidado para vowels
  for (let j = 0; j < vowels.length; j++) {
    // Tarea 7: Comprobar posición interna (comentado después de verificación)
    // console.log('Posición interna:', j);
    
    // Tarea 8: Comparar letras con vocales
    if (input[i] === vowels[j]) {
      // Tarea 9: Agregar coincidencias a resultArray
      resultArray.push(input[i]);
    }
  }
}

// Tarea 12: Mostrar resultArray
console.log("Array resultante:", resultArray);

// Tarea 13: Crear resultString en mayúsculas
const resultString = resultArray.join('').toUpperCase();

// Mostrar resultado final
console.log("Traducción marina:", resultString);