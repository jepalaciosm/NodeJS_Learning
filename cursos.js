// Ejercicio Semana 1 curso NodeJS Tecnologico de Antioquia
// Creardor : johnpalacios23@gmail.com
// Fecha: 19/05/2019

// Listado de cursos
let cursos = [{
    id:1,
    nombre:"Power Bi",
    duracion: 30,
    valor:30000
},
{
    id:2,
    nombre:"NodeJS",
    duracion: 24,
    valor:500000 
},
{
    id:3,
    nombre:"Excel Avanzado",
    duracion: 18,
    valor:18000
}];

// Función que busca cursos
const fs = require('fs');
let buscarCurso=(cursos, idCurso, callback)=>{       
        let mostrarCurso=cursos.find(cursoTodos=>cursoTodos.id==idCurso);
        callback(mostrarCurso);
}
// Funcion para crear archivo
let crearArchivo=(curso,usuario) =>{
    let texto = "El usuario con cédula: "+usuario.cedula+" y nombre: " +usuario.nombre + "\n" +
            "Se inscribió al curso: "+curso.id+"\nEl curso se llama: "+curso.nombre+"\nDuracion: "+curso.duracion+" horas\nValor: "+curso.valor+"\n";

    fs.writeFile('./inscripcion.txt',texto,(err)=>{
        if(err) throw(err);
        console.log("Se ha creado el archivo");
    })
}

module.exports = {
    cursos,
    buscarCurso,
    crearArchivo
}