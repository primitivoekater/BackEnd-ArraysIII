const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44]
const resultado = numeros.reduce((contador, item) => {

    if (contador < item) {
        contador = item
    }
    return contador
})
console.log(resultado)
