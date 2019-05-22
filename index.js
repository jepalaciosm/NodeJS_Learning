// Ejercicio Semana 1 curso NodeJS Tecnologico de Antioquia
// Creardor : johnpalacios23@gmail.com
// Fecha: 19/05/2019

// Opciones para y elementos que se reciben a través de consola
const opciones ={
    cedula:{
        demand:true,
        alias:"c"
    },
    nombre:{
        demand:true,
        alias: "n"
    },
    id_curso:{
        demand:true,
        alias:"i"
    }
}

const argv = require('yargs')
        .command('inscribir',"Agregar un usuario a un curso", opciones)
        .argv;



const {cursos, buscarCurso, crearArchivo} = require ('./cursos');
// Acá hacemos la evaluación del código 
 
if(argv._=='inscribir')
{
    let idCurso= argv.i;
    let cursoInscripcion;

    buscarCurso(cursos,idCurso,function(resultado){        
       cursoInscripcion=resultado;
    });
    
    console.log("Id curso: "+cursoInscripcion.id+"\nEl curso se llama: "+cursoInscripcion.nombre+"\nDuracion: "+cursoInscripcion.duracion+" horas\nValor: "+cursoInscripcion.valor+"\n");

    crearArchivo(cursoInscripcion,argv);

}else{
    console.log("Los cursos disponibles son:\n");

    for (let i = 0; i <cursos.length; i++) {
        setTimeout(function(){    
            let idCurso = cursos[i].id;
            buscarCurso(cursos,idCurso,function(resultado){
                console.log("Id curso: "+resultado.id+"\nEl curso se llama: "+resultado.nombre+"\nDuracion: "+resultado.duracion+" horas\nValor: "+resultado.valor+"\n");
               
            });
        },(i+1)*2000);
    };
}
