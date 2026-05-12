// Grupo de valores indexados a partir
// do ZERO ate infinito
// iterável, homogêneo/heterogêneo
// possui métodos nativos
 // !=

const time = [ "Julius", "Chis"]
// indices         0        1
time[5] // undefined
time[6] = "Victor" // atribuiçao dinâmicos

for (const jogador of time){
       if (jogador != undefined) {
        console.log(jogador)
       }
}

console.log(time)
console.log(time [1])
