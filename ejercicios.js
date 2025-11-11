// FUNDAMENTOS DE PROGRAMACIÃ“N - PRÃCTICA
// Nombre del estudiante: _________________
// Fecha: _________________

// ============================================
// SECCIÃ“N 1: VARIABLES Y TIPOS DE DATOS (10 puntos)
// ============================================

/**
 * Ejercicio 1.1: Declarar variables (2 puntos)
 * Crea tres variables con tu informaciÃ³n personal
 * @returns {Object} - Objeto con nombre, edad y carrera
 */
function miInformacion() {
  // TODO: Declara las variables nombre, edad y carrera
  // Ejemplo: const nombre = "Juan";
  
  const nombre = "Euruviel";
  const edad = 19;
  const carrera = "TSW";
  
  return { nombre, edad, carrera };
}
//ejercicio 1 terminado jejejj

/**
 * Ejercicio 1.2: Operaciones aritmÃ©ticas bÃ¡sicas (3 puntos)
 * @param {number} a - Primer nÃºmero
 * @param {number} b - Segundo nÃºmero
 * @returns {Object} - Objeto con suma, resta, multiplicaciÃ³n y divisiÃ³n
 */
function operacionesBasicas(a, b) {
  // TODO: Calcula suma, resta, multiplicaciÃ³n y divisiÃ³n de a y b
  //operaciones basicas 
  const suma = a + b;
  const resta = a - b;
  const multiplicacion = a * b;
  const division = b !== 0 ? a / b : null; // null es más apropiado que 0
  
  return { suma, resta, multiplicacion, division };

}

/**
 * Ejercicio 1.3: Ãrea de un rectÃ¡ngulo (2 puntos)
 * @param {number} base - Base del rectÃ¡ngulo
 * @param {number} altura - Altura del rectÃ¡ngulo
 * @returns {number} - Ãrea del rectÃ¡ngulo
 */
function areaRectangulo(base, altura) {
  // TODO: Calcula y retorna el Ã¡rea (base * altura)
  return base * altura; //retorna el area
}

/**
 * Ejercicio 1.4: ConversiÃ³n de temperatura (3 puntos)
 * Convierte grados Celsius a Fahrenheit
 * FÃ³rmula: F = C * 9/5 + 32
 * @param {number} celsius - Temperatura en Celsius
 * @returns {number} - Temperatura en Fahrenheit
 */
function celsiusAFahrenheit(celsius) {
  // TODO: Implementa la conversiÃ³n
  if (typeof celsius !== 'number') {
    throw new Error('La temperatura debe ser un número');
  }
  return (celsius * 9/5) + 32; //retorna la temperatura en fahrenheit

}

// ============================================
// SECCIÃ“N 2: CONDICIONALES (15 puntos)
// ============================================

/**
 * Ejercicio 2.1: NÃºmero par o impar (3 puntos)
 * @param {number} numero - NÃºmero a evaluar
 * @returns {string} - "par" o "impar"
 */
function parOImpar(numero) {
  // TODO: Usa el operador % (mÃ³dulo) para determinar si es par o impar
  // Pista: Un nÃºmero es par si numero % 2 === 0
  //retorna si el numero es par o impar 
  return numero % 2 === 0 ? "par" : "impar";

}

/**
 * Ejercicio 2.2: CalificaciÃ³n (4 puntos)
 * @param {number} nota - Nota del 0 al 100
 * @returns {string} - "Aprobado" si nota >= 60, "Reprobado" si no
 */
function evaluarNota(nota) {
  // TODO: Implementa la lÃ³gica con if/else
    //evaluar nota
  if (nota >= 60) {
    return "Aprobado";
  } else {
    return "Reprobado";
  }
}


/**
 * Ejercicio 2.3: El mayor de tres nÃºmeros (4 puntos)
 * @param {number} a - Primer nÃºmero
 * @param {number} b - Segundo nÃºmero
 * @param {number} c - Tercer nÃºmero
 * @returns {number} - El nÃºmero mayor
 */
function mayorDeTres(a, b, c) {
  // TODO: Encuentra y retorna el mayor de los tres nÃºmeros
  
  return Math.max(a, b, c);

}

/**
 * Ejercicio 2.4: ClasificaciÃ³n de edad (4 puntos)
 * @param {number} edad - Edad de la persona
 * @returns {string} - "menor" (0-17), "adulto" (18-64), "mayor" (65+)
 */
function clasificarEdad(edad) {
  // TODO: Implementa la clasificaciÃ³n con if/else if/else
//clasificar edad
  
  if (edad <= 17) return "menor";
    else if (edad <= 64) return "adulto";
    else return "mayor";


}

// ============================================
// SECCIÃ“N 3: FUNCIONES Y BUCLES (20 puntos)
// ============================================

/**
 * Ejercicio 3.1: Factorial (5 puntos)
 * Calcula el factorial de un nÃºmero (n! = n * (n-1) * (n-2) * ... * 1)
 * Ejemplo: factorial(5) = 5 * 4 * 3 * 2 * 1 = 120
 * @param {number} n - NÃºmero entero positivo
 * @returns {number} - Factorial de n
 */
function factorial(n) {
  // TODO: Implementa usando un bucle for
// factorial   
  if (n === 0 || n === 1) return 1;
  let resultado = 1;
  for (let i = 2; i <= n; i++) {
    resultado *= i;
  }
  return resultado;//retorna el factorial

}

/**
 * Ejercicio 3.2: Suma de nÃºmeros del 1 al n (4 puntos)
 * @param {number} n - NÃºmero lÃ­mite
 * @returns {number} - Suma de 1 + 2 + 3 + ... + n
 */
function sumaHastaN(n) {
  // TODO: Usa un bucle para sumar todos los nÃºmeros desde 1 hasta n
  
  // Fórmula matemática más eficiente: n * (n + 1) / 2
  return (n * (n + 1)) / 2;

}

/**
 * Ejercicio 3.3: Tabla de multiplicar (5 puntos)
 * @param {number} numero - NÃºmero para generar su tabla
 * @returns {Array} - Array con los resultados de numero x 1 hasta numero x 10
 * Ejemplo: tablaMultiplicar(3) debe retornar [3, 6, 9, 12, 15, 18, 21, 24, 27, 30]
 */
function tablaMultiplicar(numero) {
  // TODO: Genera un array con la tabla de multiplicar
  // Ejemplo: tablaMultiplicar(3) 
  return Array.from({ length: 10 }, (_, i) => numero * (i + 1));
}

/**
 * Ejercicio 3.4: NÃºmeros pares hasta n (6 puntos)
 * @param {number} n - NÃºmero lÃ­mite
 * @returns {Array} - Array con todos los nÃºmeros pares desde 2 hasta n
 * Ejemplo: numerosPares(10) debe retornar [2, 4, 6, 8, 10]
 */
function numerosPares(n) {
  // TODO: Crea un array con todos los nÃºmeros pares hasta n
  // Ejemplo: numerosPares(10)
  return Array.from({ length: Math.floor(n / 2) }, (_, i) => (i + 1) * 2);

}

// ============================================
// SECCIÃ“N 4: ARRAYS (25 puntos)
// ============================================

/**
 * Ejercicio 4.1: Suma de elementos de un array (4 puntos)
 * @param {Array<number>} numeros - Array de nÃºmeros
 * @returns {number} - Suma de todos los elementos
 */
function sumaArray(numeros) {
  // TODO: Suma todos los elementos del array
  
  
  return numeros.reduce((suma, num) => suma + num, 0);

}

/**
 * Ejercicio 4.2: Promedio de un array (5 puntos)
 * @param {Array<number>} numeros - Array de nÃºmeros
 * @returns {number} - Promedio de los nÃºmeros
 */
function promedioArray(numeros) {
  // TODO: Calcula el promedio (suma total / cantidad de elementos)
  if (!Array.isArray(numeros) || numeros.length === 0) {
    return 0;
  }
  
  return numeros.reduce((suma, num) => suma + num, 0) / numeros.length;

}

/**
 * Ejercicio 4.3: Encontrar el mÃ¡ximo (6 puntos)
 * @param {Array<number>} numeros - Array de nÃºmeros
 * @returns {number} - El nÃºmero mÃ¡s grande del array
 */
function encontrarMaximo(numeros) {
  // TODO: Encuentra y retorna el nÃºmero mÃ¡s grande
  // Pista: Puedes usar Math.max(...numeros) o hacerlo con un bucle
  if (!Array.isArray(numeros) || numeros.length === 0) {
    throw new Error('El array no puede estar vacío');
  }
  
  return Math.max(...numeros);

}

/**
 * Ejercicio 4.4: Filtrar nÃºmeros mayores a un valor (5 puntos)
 * @param {Array<number>} numeros - Array de nÃºmeros
 * @param {number} limite - Valor lÃ­mite
 * @returns {Array<number>} - Nuevo array solo con nÃºmeros mayores al lÃ­mite
 * Ejemplo: filtrarMayores([1, 5, 3, 8, 2], 4) debe retornar [5, 8]
 */
function filtrarMayores(numeros, limite) {
  // TODO: Crea un nuevo array con solo los nÃºmeros mayores al lÃ­mite
  if (!Array.isArray(numeros)) {
    throw new Error('El primer parámetro debe ser un array');
  }
  
  return numeros.filter(num => num > limite);

}

/**
 * Ejercicio 4.5: Invertir un array (5 puntos)
 * @param {Array} arr - Array a invertir
 * @returns {Array} - Nuevo array con los elementos en orden inverso
 * Ejemplo: invertirArray([1, 2, 3, 4]) debe retornar [4, 3, 2, 1]
 */
function invertirArray(arr) {
  // TODO: Invierte el orden de los elementos
  // Pista: Puedes usar arr.reverse() o hacerlo manualmente
  if (!Array.isArray(arr)) {
    throw new Error('El parámetro debe ser un array');
  }
  
  return [...arr].reverse();

}

// ============================================
// SECCIÃ“N 5: ARRAYS BIDIMENSIONALES (30 puntos)
// PreparaciÃ³n para matrices
// ============================================

/**
 * Ejercicio 5.1: Crear una matriz (6 puntos)
 * Crea una matriz de filas x columnas llena de ceros
 * @param {number} filas - NÃºmero de filas
 * @param {number} columnas - NÃºmero de columnas
 * @returns {Array<Array<number>>} - Matriz de ceros
 * Ejemplo: crearMatriz(2, 3) debe retornar [[0, 0, 0], [0, 0, 0]]
 */
function crearMatriz(filas, columnas) {
  // TODO: Crea una matriz de filas x columnas llena de ceros
  if (!Number.isInteger(filas) || !Number.isInteger(columnas) || filas <= 0 || columnas <= 0) {
    throw new Error('Filas y columnas deben ser números enteros positivos');
  }
  
  return Array.from({ length: filas }, () => Array(columnas).fill(0));

}

/**
 * Ejercicio 5.2: Suma de elementos de una matriz (6 puntos)
 * @param {Array<Array<number>>} matriz - Matriz de nÃºmeros
 * @returns {number} - Suma de todos los elementos
 * Ejemplo: sumaMatriz([[1, 2], [3, 4]]) debe retornar 10
 */
function sumaMatriz(matriz) {
  // TODO: Suma todos los elementos de la matriz
  // NecesitarÃ¡s dos bucles: uno para las filas y otro para las columnas
  if (!Array.isArray(matriz) || matriz.length === 0) {
    throw new Error('Debe ser una matriz válida');
  }
  
  return matriz.reduce((total, fila) => 
    total + fila.reduce((suma, num) => suma + num, 0), 0
  );

}

/**
 * Ejercicio 5.3: Obtener una fila (5 puntos)
 * @param {Array<Array<number>>} matriz - Matriz
 * @param {number} indiceFila - Ãndice de la fila (empezando en 0)
 * @returns {Array<number>} - La fila especificada
 * Ejemplo: obtenerFila([[1, 2], [3, 4], [5, 6]], 1) debe retornar [3, 4]
 */
function obtenerFila(matriz, indiceFila) {
  // TODO: Retorna la fila indicada
  if (!Array.isArray(matriz) || indiceFila < 0 || indiceFila >= matriz.length) {
    throw new Error('Índice de fila inválido');
  }
  
  return [...matriz[indiceFila]]; // Retorna una copia

}

/**
 * Ejercicio 5.4: Obtener una columna (7 puntos)
 * @param {Array<Array<number>>} matriz - Matriz
 * @param {number} indiceColumna - Ãndice de la columna (empezando en 0)
 * @returns {Array<number>} - Array con los elementos de la columna
 * Ejemplo: obtenerColumna([[1, 2], [3, 4], [5, 6]], 0) debe retornar [1, 3, 5]
 */
function obtenerColumna(matriz, indiceColumna) {
  // TODO: Extrae todos los elementos de la columna indicada
  if (!Array.isArray(matriz) || matriz.length === 0) {
    throw new Error('Matriz inválida');
  }
  
  if (indiceColumna < 0 || indiceColumna >= matriz[0].length) {
    throw new Error('Índice de columna inválido');
  }
  
  return matriz.map(fila => fila[indiceColumna]);

}

/**
 * Ejercicio 5.5: Transponer una matriz (6 puntos)
 * La transpuesta intercambia filas por columnas
 * @param {Array<Array<number>>} matriz - Matriz original
 * @returns {Array<Array<number>>} - Matriz transpuesta
 * Ejemplo: transponer([[1, 2, 3], [4, 5, 6]]) debe retornar [[1, 4], [2, 5], [3, 6]]
 */
function transponer(matriz) {
  // TODO: Crea la matriz transpuesta
  if (!Array.isArray(matriz) || matriz.length === 0 || !Array.isArray(matriz[0])) {
    throw new Error('Debe ser una matriz válida');
  }
  
  const numColumnas = matriz[0].length;
  
  return Array.from({ length: numColumnas }, (_, j) =>
    matriz.map(fila => fila[j])
  );

}

// ============================================
// NO MODIFIQUES ESTA LÃNEA - NECESARIA PARA LOS TESTS
// ============================================
module.exports = {
  miInformacion,
  operacionesBasicas,
  areaRectangulo,
  celsiusAFahrenheit,
  parOImpar,
  evaluarNota,
  mayorDeTres,
  clasificarEdad,
  factorial,
  sumaHastaN,
  tablaMultiplicar,
  numerosPares,
  sumaArray,
  promedioArray,
  encontrarMaximo,
  filtrarMayores,
  invertirArray,
  crearMatriz,
  sumaMatriz,
  obtenerFila,
  obtenerColumna,
  transponer
};
