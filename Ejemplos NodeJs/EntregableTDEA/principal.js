/*
Criterios de aceptación
• Deben mostrar al menos tres cursos
• Al mostrar cada curso debe indicar el id, el nombre, la duración y el valor
• Al momento de listar los cursos, debe transcurrir un intervalo de tiempo de 2 segundos
entre cada curso
*/ 

const fs = require('fs');

let cursos = {
    curso1:{
        demand: true,
        id: 1,
    nombreCurso: 'Angular',
    duracion: '32 horas',
    valor: 700000,
    alias: 'a'
    },
    curso2:{
        demand: true,
        id: 2,
    nombreCurso: 'Python',
    duracion: '32 horas',
    valor: 800000,
    alias: 'p'
    },
    curso3:{
        demand: true,
        id: 3,
    nombreCurso: 'Machine Learning',
    duracion: '42 horas',
    valor: 1000000,
    alias: 'm'
    }
};


function curso1(){
    setTimeout(function(){
        console.log('El curso se llama Curso de ' + 
        cursos.curso1.nombreCurso + ' y tiene una duracion de '+ 
        cursos.curso1.duracion + ' y un valor de ' + 
        cursos.curso1.valor + ' el curso tiene un identificador de numero ' + cursos.curso1.id);
    },2000);
}


function curso2(){
    setTimeout(function(){
        console.log('El curso se llama Curso de ' + 
        cursos.curso2.nombreCurso + ' y tiene una duracion de '+ 
        cursos.curso2.duracion + ' y un valor de ' + 
        cursos.curso2.valor + ' el curso tiene un identificador de numero ' + cursos.curso2.id);
    },4000);
}


function curso3(){
    setTimeout(function(){
        console.log('El curso se llama Curso de ' + 
        cursos.curso3.nombreCurso + ' y tiene una duracion de '+ 
        cursos.curso3.duracion + ' y un valor de ' + 
        cursos.curso3.valor + ' el curso tiene un identificador de numero ' + cursos.curso3.id);
    },6000);
}

curso1();
curso2();
curso3();



    