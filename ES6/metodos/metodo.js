
// ejemplo1 crea un nuevo array con el doble de este

var array = [1,2,3,4,5,6,7,8,9];

var arrayDoble = [];
for(i in array) {
    arrayDoble.push(array[i] * 2);
}

console.log(arrayDoble);

// sintaxis
    /* nombre deArray.map(() => {
        return array;
    }) */
     


let numeros = [1,2,3,4,5,6,7,8,9];

let doble = numeros.map(numero => numero *2 ); 

console.log(doble);

let personas = [
    {nombre: "liliam" , edad : 45},
    {nombre: "Marcos" , edad : 15},
    {nombre: "Luana" , edad : 24},
    {nombre: "Roxana" , edad : 38},
    {nombre: "Luz Maria" , edad : 36}
]



let mostrarPersona = personas.map(nombrePersona => nombrePersona.nombre );

let mostrarEdad = personas.map(edadPersona => edadPersona.edad);

console.log(mostrarPersona);
console.log(mostrarEdad);

let estudiantes = [
    {
      nombre: 'Alvaro',
      nota: 10,
    },
    {
      nombre: 'Daniel',
      nota: 16,
    },
    {
      nombre: 'Alexys',
      nota: 12,
    },
    {
      nombre: 'Rafa',
      nota: 17,
    },
    {
      nombre: 'Alejandro',
      nota: 8,
    },
    {
      nombre: 'Sofia',
      nota: 9,
    }
]


let aprobados = estudiantes.filter ( estudiante => estudiante.nota >10)
                                .map(nombreAprobado => nombreAprobado.nombre);

console.log(aprobados)


let estudiantesAprobados = [];                              
for(i in estudiantes) {
    if(estudiantes[i].nota >10) {
        estudiantesAprobados.push(estudiantes[i]);
    }
}

let nombreEstudiantesAprobados = [];
for( i in estudiantesAprobados) {
    nombreEstudiantesAprobados.push(estudiantesAprobados[i].nombre);
} 

console.log(nombreEstudiantesAprobados);










