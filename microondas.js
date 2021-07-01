function microondas(alimento, segundos) {
    switch(alimento){

        /* Pipoca */
        case 'Pipoca':
            if (segundos == 10) {
                console.log("Sua Pipoca esta pronta, bom apetite!!!")
            } else if (segundos >= 2*10 && segundos <= 29) {
                console.log('Sua Pipoca queimou')
            } else if (segundos < 10) {
                console.log('Tempo insulficiente')
            } else if (segundos >= 3*10) {
                console.log('Kabuuumm')
            }
        break;

        /* Macarrão */
        case 'Macarrão':
            if (segundos == 8) {
                console.log("Seu Macarrão esta Pronto, bom apetite!!!")
            } else if (segundos >= 2*8 && segundos <= 23) {
                console.log('Seu Macarrão queimou')
            } else if (segundos < 8) {
                console.log('Tempo insulficiente')
            } else if (segundos >= 3*8) {
                console.log('Kabuuumm')
            }
        break;

        /* Carne */
        case 'Carne':
            if (segundos == 15) {
                console.log("Sua Carne esta pronta, bom apetite!!!")
            } else if (segundos >= 2*15 && segundos <= 44) {
                console.log('Sua Carne queimou')
            } else if (segundos < 15) {
                console.log('Tempo insulficiente')
            } else if (segundos >= 3*15) {
                console.log('Kabuuumm')
            }
        break;

        /* Feijão */
        case 'Feijão':
            if (segundos == 12) {
                console.log("Seu Feijão esta pronto, bom apetite!!!")
            } else if (segundos >= 2*12 && segundos <= 35) {
                console.log('Seu Feijão queimou')
            } else if (segundos < 12) {
                console.log('Tempo insulficiente')
            } else if (segundos >= 3*12) {
                console.log('Kabuuumm')
            }
        break;

        /* Brigadeiro */
        case 'Brigadeiro':
            if (segundos == 8) {
                console.log("Seu Brigadeiro esta pronto, bom apetite!!!")
            } else if (segundos >= 2*8 && segundos < 23) {
                console.log('Seu Brigadeiro queimou')
            } else if (segundos < 8) {
                console.log('Tempo insulficiente')
            } else if (segundos >= 3*8) {
                console.log('Kabuuumm')
            } 
        break;
        default: console.log('Prato Inexistente')
        }   
}

console.log('')
/* Pipoca */
microondas('Pipoca', 10)
microondas('Pipoca', 20)
microondas('Pipoca', 1)
microondas('Pipoca', 35)
console.log('')

/* Macarrão */
microondas('Macarrão', 8)
microondas('Macarrão', 16)
microondas('Macarrão', 1)
microondas('Macarrão', 24)
console.log('')

/* Carne */
microondas('Carne', 15)
microondas('Carne', 30)
microondas('Carne', 1)
microondas('Carne', 45)
console.log('')

/* Feijão */
microondas('Feijão', 12)
microondas('Feijão', 24)
microondas('Feijão', 1)
microondas('Feijão', 36)
console.log('')

/* Brigadeiro */
microondas('Brigadeiro', 8)
microondas('Brigadeiro', 16)
microondas('Brigadeiro', 1)
microondas('Brigadeiro', 24)
console.log('')

microondas('lasanha', 24)
