const { crearArchivo, listarTabla } = require('./multiplicar/multiply')
const { argv } = require('./config/yargs')
const colors = require('colors')



let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('listar'.yellow);


        listarTabla(argv.base, argv.limite)
            .then(tabla => console.log(tabla.yellow))
            .catch(e => console.log(e.red));




        break;
    case 'crear':

        crearArchivo(argv.base,argv.limite)
            .then(archivo => console.log(`archivo creado: ${archivo.green}`))
            .catch(err => console.log(err.red));
        break;
    default:
        console.log('comando no reconocido');
}











//node tiene el process que uno de sus atributos es argv



//le decimos a argv, oye tu valor sera este
// let argv2 = process.argv;
// let parametro = argv[2];//cogemos el de la segunda posicion que es el que nos interesa porque la primera y la segunda son direcciones de los diretorios d enode y la carpeta actual, el siguiente sera elque no nosotros añadimos
// let base = parametro.split('=')[1];//lo dividimos por el igual, asi cogemos el numeros


// console.log(argv.limite)





