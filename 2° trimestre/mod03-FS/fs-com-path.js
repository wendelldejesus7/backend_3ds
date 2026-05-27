// importar PATH E FS
// Path possui (join para juntar caminhos e Resolve)
// para deduzir subdiretórios e 5.0.)
const fs = require('fs')
const path = require('path')

//console.log(path)

// Salvar o Caminho em um variavel
//const caminho = path.join(__dirname, 'README.md')//Markdown, text,
//console.log(caminho)

const caminho = path.resolve (__dirname, 'README.md' ) // Abrir, ler, deletar, editar
const arquivo = fs.readFileSync(caminho, 'utf-8')
console.log(arquivo)