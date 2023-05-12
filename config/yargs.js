const { describe } = require('yargs');

const argv = require('yargs')
            .option('b',{
                alias: 'Base',
                type:'number',
                demandOption:true,
                describe:'Es la base de la tabla de multiplicar'
            })
            .option('l',{
                alias: 'Listar',
                type:'boolean',
                default:false,
                describe: 'Muestra la tabla en consola'
            })
            .option('h',{
                alias: 'Hasta',
                type:'number',
                demandOption:true,
                describe: 'Limite de tabla'
            })
            .check((argv, options)=>{
                if(isNaN(argv.b)){
                    throw 'La base tiene que ser un numero'
                }
                return true;
            })
            .argv;


module.exports=argv;
