//import { alugarFilme, devolverFilme } from './mod-esm-videos'
import * as Videoteca from './mod-esm-videos.js'

console.log(Videoteca.alugarFilme('Ainda Estou Aqui', '04-05-2023'))
console.log(Videoteca.devolverFilme('Ainda Estou Aqui', '04-04-2023'))

 console.log(Videoteca.alugarFilme('Mario', '06-07-2024','27,99'))
console.log(Videoteca.devolverFilme('Mario', '06-08-2024'))