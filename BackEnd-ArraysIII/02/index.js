const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
]
const resultado = cidades.reduce((contador, cidade) => {
    if (contador.length > cidades.length) {
        contador = cidade
    }
    return contador
})
console.log(resultado)