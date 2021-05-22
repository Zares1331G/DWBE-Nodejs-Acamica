const { resta, multiplicacion, division} = require('./Lib/calculator')
const fs = require('fs');

fs.appendFile('log.txt', 
`7 x 4 = ${multiplicacion(7, 4)} \n
10 - 4 = ${resta(10, 4)} \n
15 / 3 = ${division(15, 3)}`, 
()=>{
console.log('exito')
})

