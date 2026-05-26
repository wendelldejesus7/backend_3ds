const fs = require('fs')

console.log(fs)

const arquivo = fs.readFileSync('./README.md','')
// /workspaces/backend_3ds/2° trimestre/mod03-FS/README.md
// 2° TRIMESTRE/modulos/mod03-FS/REALME.md
const arquivoFinal = fs.readFileSync(_dirname + "/REALME.md", 'utf-8')
console.log(arquivoFinal)