//requires
const fs = require('fs');//nativos
// const fs = require('express');//no nativos
const colors = require('colors')
// const fs = require('./archivo');//ruta nuestro proyecto


let listarTabla = (base,limite = 10) =>{
    return new Promise((resolve,reject)=>{
        if(!Number(base)){
            reject('no es un numero');
            return;
        }

        let data = '';


        for (let index = 1; index <= limite; index++) {
            data += `${base} * ${index} = ${base * index}\n`;

        }
        resolve(data);

    })
}



let crearArchivo = (base,limite = 10) => {
    return new Promise((resolve, reject) => {

        if(!Number(base) || !Number(limite)){
            reject('no es un numero');
            return;
        }

        let data = '';


        for (let index = 1; index <= limite; index++) {
            data += `${base} * ${index} = ${base * index}\n`;

        }


        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err)
            else
                resolve(`tabla-${base}.txt`);
            
        });
    })
}


module.exports = {
    crearArchivo,
    listarTabla
}


