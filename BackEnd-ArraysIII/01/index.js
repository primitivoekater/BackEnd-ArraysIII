const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"]
const resultado = frutas.sort((a, b) => {
    tamanho1 = a.length
    tamanho2 = b.length
    return tamanho1 - tamanho2
})
console.log(resultado)