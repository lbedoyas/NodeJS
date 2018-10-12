var numero = 1;
console.log(numero);
console.log(typeof(numero));
numero = 'hola';
console.log(typeof(numero));

//string 
//parte un string y o convierte en un array de cada elemento del string
console.log("texto de prueba".split(''));
//
var textoLargo1 = 
    'linea\n' + 
    'linea2\n';

console.log(textoLargo1);

//join en javascript

var textoLargo2 = [
    'linea 1', 'linea 2'
].join('\n');
console.log(textoLargo2);


//creacion de objetos
var objetos1 = {
    numero: 1,
    texto: "hola",
    esCero: function(v)
    {
            return v + 2;
    }
}

console.log(objetos1.numero);

console.log(objetos1.texto);

console.log(objetos1.esCero(5));


//array
var array = [
    1,"hola",
    function(v){
        return v +2;
    },
    {valor: "hola"}
];

console.log(array);

console.log(array[2](500));

//hoisting
var x = 100;

function y(){
    //el var x se pone en en la posicion de la 59 de acuerdo a este ejemplo
    if(x == 20)
    {
        var x = 30;
    }
    return x;
}

console.log(x,y());

