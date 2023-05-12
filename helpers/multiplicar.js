const fs = require('fs');
const { argv } = require('process');
const colors= require('colors');



const crearArchivo = async(base,Listar,Hasta) =>{
try {   
    let salida, consola='';
    
    for (i= 1; i <= Hasta; i++){
        salida+=(`${base} x ${i} = ${base*i}\n`)
        consola+=(`${base} ${'x'.red} ${i} ${'='.red} ${base*i}\n`)
    }
    
    
            if(Listar){
                console.log("===============".rainbow);
                console.log('Tabla del'.underline.brightCyan, (base));
                console.log("===============".rainbow);
                console.log(consola);
             }
      
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        
        return`tabla-${base}.txt `;
        
            
} catch (err) {
    throw err;
}
} 

module.exports= {
    crearArchivo
}