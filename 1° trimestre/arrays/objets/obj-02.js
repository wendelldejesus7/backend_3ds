 // objetos sao estruturas do tipo chave-valor
 // podemos atriubir de forma dinamica, assim como em arrays
 // objetos tem indices nomeados
 // podemos usar (for of) ou (for in)

 const iphone = {
    nome: "iphone",
    modelo:  "17 pro max",
    cores:  ["branco","azul"],
    valor: "9.000",
    memoria:  "128gb",
 }
 iphone.nome = "iphone",
 iphone.modelo = "17 pro max",
iphone.cores = "branco",
iphone.valor = "9.000",
iphone.memoria = "128gb",

console.log(iphone.nome)
console.log(iphone.modelo)
console.log(iphone.cores)
console.log(iphone.valor)
console.log(iphone.memoria)