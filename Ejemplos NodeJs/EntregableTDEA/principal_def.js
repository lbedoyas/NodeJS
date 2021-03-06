/*Criterios de aceptación
• Debe obligatoriamente ingresar el id del curso, nombre del interesado y cedula
• Debe buscar la información del curso y retonarme la información del mismo
• Debe generar en un archivo de texto con la información del curso en conjunto con la mía
• Generar un mensaje de alerta en caso de no encontrar un id.
• En caso de no estar interesado debe mostrarme la lista de cursos, en caso de escribir
“inscribir” debe hacer el proceso de inscripción */



const fs = require('fs');


//Defincion de archivo JSON
const cursos = {
    id:{
        demand: true,
        alias: 'i',
        ids: {
            idCurso1: 1,
            idCurso2: 2,
            idCurso3: 3
        }
    },
    nombre: {
        demand: true,
        alias: 'n',
        nombreCursos: {
            Ncurso1: 'Angular',
            Ncurso2: 'Python',
            Ncurso3: 'Machine_Learning'
        }
    },
    duracion: {
        Dcurso1: '32 horas',
        Dcurso2: '40 horas',
        Dcurso3: '42 horas'
    },
    valor: {
        Vcurso1: 700000,
        Vcurso2: 800000,
        Vcurso3: 1200000

    },
    cedula: {
        demand: true,
        alias: 'x'
    }


}




function curso1(){
    setTimeout(function(){
        console.log('El curso se llama Curso de ' + 
        cursos.nombre.nombreCursos.Ncurso1 + ' y tiene una duracion de '+ 
        cursos.duracion.Dcurso1 + ' y un valor de ' + 
        cursos.valor.Vcurso1 + ' el curso tiene un identificador de numero ' + cursos.id.ids.idCurso1);
    },2000);
}


function curso2(){
    setTimeout(function(){
        console.log('El curso se llama Curso de ' + 
        cursos.nombre.nombreCursos.Ncurso2 + ' y tiene una duracion de '+ 
        cursos.duracion.Dcurso2 + ' y un valor de ' + 
        cursos.valor.Vcurso2 + ' el curso tiene un identificador de numero ' + cursos.id.ids.idCurso2);
    },4000);
}


function curso3(){
    setTimeout(function(){
        console.log('El curso se llama Curso de ' + 
        cursos.nombre.nombreCursos.Ncurso3 + ' y tiene una duracion de '+ 
        cursos.duracion.Dcurso3 + ' y un valor de ' + 
        cursos.valor.Vcurso3 + ' el curso tiene un identificador de numero ' + cursos.id.ids.idCurso3);
    },6000);
}





//console.log(cursos.nombre.nombreCursos.Ncurso1);


const argv = require('yargs')
.command('inscribir','matriculas ', cursos)
.argv
if(argv.id == 1){
console.log(argv);
let crearArchivos = (cursos) => {
texto = 'el estudiante ' + argv.nombre + '\n con cedula '+ 
argv.cedula + ' \n se matriculado al curso de Angular' + '\n' +
'y tiene una duracion de 40 horas Un valor de 800000 ';
fs.writeFile('archivoCurso1.txt',texto,(err)=> {
if(err) throw (err);
console.log('se a creado los archivos');
});
}

    crearArchivos();
    curso1();
    

}
else
{
    //console.log('error!!!')
}



if(argv.id == 2){
    console.log(argv);
    let crearArchivos = (cursos) => {
    texto = 'el estudiante ' + argv.nombre + '\n con cedula '+ 
    argv.cedula + ' \n se matriculado al curso de Python'+
    ' y tiene una duracion de 32 horas Un valor de 700000 ';
    fs.writeFile('archivoCurso2.txt',texto,(err)=> {
    if(err) throw (err);
    console.log('se a creado los archivos');
    });
    }
    
        crearArchivos();
        curso2();
    
    }
    else
    {
        //console.log('error!!!')
    }



    if(argv.id == 3){
        console.log(argv);
        let crearArchivos = (cursos) => {
        texto = 'el estudiante ' + argv.nombre + '\n con cedula '+ 
        argv.cedula + '\n se matriculado al curso de Machine Learning'
        + ' y tiene una duracion de 32 horas Un valor de 1200000 ';
        fs.writeFile('archivoCurso3.txt',texto,(err)=> {
        if(err) throw (err);
        console.log('se a creado los archivos');
        });
        }
        
            crearArchivos();
            curso3();
        
        }
        else
        {
            //console.log('error!!!')
        }


        if(argv.id != 1 && argv.id != 2 && argv.id != 3){
            console.log('Ha ingresado un id que no corresponde a ningun curso');
            curso1();
            curso2();
            curso3();
        }


