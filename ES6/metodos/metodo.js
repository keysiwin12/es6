
// // ejemplo1 crea un nuevo array con el doble de este

// var array = [1,2,3,4,5,6,7,8,9];

// var arrayDoble = [];
// for(i in array) {
//     arrayDoble.push(array[i] * 2);
// }

// console.log(arrayDoble);

// // sintaxis
//     /* nombre deArray.map(() => {
//         return array;
//     }) */
     


// let numeros = [1,2,3,4,5,6,7,8,9];

// let doble = numeros.map(numero => numero *2 ); 

// console.log(doble);

// let personas = [
//     {nombre: "liliam" , edad : 45},
//     {nombre: "Marcos" , edad : 15},
//     {nombre: "Luana" , edad : 24},
//     {nombre: "Roxana" , edad : 38},
//     {nombre: "Luz Maria" , edad : 36}
// ]



// let mostrarPersona = personas.map(nombrePersona => nombrePersona.nombre );

// let mostrarEdad = personas.map(edadPersona => edadPersona.edad);

// console.log(mostrarPersona);
// console.log(mostrarEdad);

// let estudiantes = [
//     {
//       nombre: 'Alvaro',
//       nota: 10,
//     },
//     {
//       nombre: 'Daniel',
//       nota: 16,
//     },
//     {
//       nombre: 'Alexys',
//       nota: 12,
//     },
//     {
//       nombre: 'Rafa',
//       nota: 17,
//     },
//     {
//       nombre: 'Alejandro',
//       nota: 8,
//     },
//     {
//       nombre: 'Sofia',
//       nota: 9,
//     }
// ]


// let aprobados = estudiantes.filter ( estudiante => estudiante.nota >10)
//                                 .map(nombreAprobado => nombreAprobado.nombre);

// console.log(aprobados)


// let estudiantesAprobados = [];                              
// for(i in estudiantes) {
//     if(estudiantes[i].nota >10) {
//         estudiantesAprobados.push(estudiantes[i]);
//     }
// }

// let nombreEstudiantesAprobados = [];
// for( i in estudiantesAprobados) {
//     nombreEstudiantesAprobados.push(estudiantesAprobados[i].nombre);
// } 

// console.log(nombreEstudiantesAprobados);



let personas = [
  {nombre: "Liliam", edad:45},
  {nombre: "Marcos", edad:15},
  {nombre: "Luana", edad:24},
  {nombre: "Roxana", edad:13},
  {nombre: "Luz Maria", edad:36},
]

console.log(personas);
let nuevoPersonas = personas.find((element) => {
  return element.edad <20;
}
);

let nuevoPersonas2 = personas.find( element => element.edad >20);

console.log(nuevoPersonas);
console.log(nuevoPersonas2);

let trabajadores = [
  { usuario: 1, nombre: 'Ricardo', descripcion:"es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum", edad: 25,venta: 70 },
  { usuario: 4, nombre: 'Daniel', descripcion:"El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo", edad: 55,venta: 46},
  { usuario: 1, nombre: 'Maria', descripcion:"Al contrario del pensamiento popular, el texto de Lorem Ipsum no es simplemente texto aleatorio. ", edad: 17,venta: 12},
  { usuario: 2, nombre: 'Teofilo', descripcion:"Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles,  ", edad: 26,venta: 67},
  { usuario: 3, nombre: 'Juan', descripcion:"cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera ", edad: 45,venta: 83},
  {usuario: 1, nombre: 'Flor', descripcion:"el texto de Lorem Ipsum no es simplemente texto aleatorio. ", edad: 21,venta: 94},
  {usuario: 4, nombre: 'Patrick', descripcion:"combinadas con estructuras muy útiles de sentencias, para generar texto de Lorem Ipsum que parezca razonable. ", edad: 37,venta: 12},
  {usuario: 6, nombre: 'Rafael', descripcion:"Las secciones 1.10.32 y 1.10.33 de por Cicero son también reproducidas ", edad: 33,venta: 67},
  {usuario: 2, nombre: 'Dante', descripcion:"Lorem Ipsum viene de las secciones 1.10.32 y 1.10.33 de gregtegrregerg", edad: 20,venta: 83},
  {usuario: 1, nombre: 'Miguel', descripcion:" Este libro es un tratado de teoría de éticas, muy popular durante el Renacimiento. La primera linea del Lorem Ipsum,  ", edad: 18,venta: 94}
 ]
 
 
let usuarios = trabajadores.map(trabajador => trabajador);

console.log(usuarios);

let primerUsuario4 = trabajadores.find(trabajador =>trabajador.usuario === 4);
                      
console.log(primerUsuario4);


let texto = "Hola soy keysi";

let existe1 = texto.includes("soy");

console.log(existe1);

let oracion = "Huancayo es una ciudad";

let nuevaOracion = oracion.split("");

console.log(nuevaOracion);

let frase = "Rosa fue al mercado";

 // primera letra // charAt(0);

 let primeraLetra = frase.charAt(0);  //si no se pone parametro dacharAt() te duevleve el primero por defecto
                                      // si se da un parametro que no existe se devuelve vacio
 console.log(primeraLetra);

 let ultimaLetra = frase.charAt(frase.length-1);
 console.log(ultimaLetra);

 // Metodo toUpperCase :::> Nos permite convertir el string de miniscula a mayuscula


 let animal = "estamos desarrallando";
 let mayuscula = animal.toUpperCase();

 console.log(mayuscula);

// Metodo toLoweCase ::::> Nos permite convertir el string de mayuscula a minuscula

 let animal2 = "GATITO";

 let minuscula = animal2.toLowerCase();

 console.log(minuscula);

// PARAMETROS POR DEFECTO

let mostrarPelicula = (nombre,diretor,clasificacion ="gola") => {
  console.log(nombre);
  console.log(diretor);
  console.log(clasificacion);
}

mostrarPelicula("titanic","Mario");

//DESTRUCTURING
// mostrar los valores cada uno de las propiedades

const peliculas = {
  id : 1,
  nombre : "El sexto sentido",
  director : "M . Nigt Shyamlan",
  clasificacion : "Drama"
}

let id1 = peliculas.id;

let nombre1 = peliculas.nombre;

let director1 = peliculas.director;

let clasificacion1 = peliculas.clasificacion;


// mostrar informacion datos
// console.log(id1);
// console.log(nombre1);
// console.log(director1);
// console.log(clasificacion1);

let {id,nombre,director,clasificacion}  = peliculas ;

console.log(id);
console.log(nombre);
console.log(director);
console.log(clasificacion);

// rest

//mostrar informacion //(...datos)

const persona = (nombre,edad,curso) =>{
  console.log(nombe,edad,curso);
}

const persona2 = (...datos) => {
  console.log(datos);
} 

persona2("nefeli",23,"js","ceviche",5);















