const opts = {
    base: {
        demand: false,
        alias: 'b'

    },
    limite: {
        alias: 'l',
        default: 10
    }
}


const argv = require('yargs')
    .command('listar', 'imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'crear una archivo con la tabalde mltiplicar de la base indicada y con el limite establecido', opts).help()
    .argv;


module.exports ={
    argv
}