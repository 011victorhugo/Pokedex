const resultado = document.getElementById('resultado')
const campoBusca = document.getElementById('campoBusca')
const btnBuscar = document.getElementById('btnBuscar')
var pokemonAtual = 1;
buscarPokemon(1)

// function buscarPokemon(termo) {
//    const url = "https://pokeapi.co/api/v2/pokemon/" + termo
//     fetch(url)
//             .then (resposta => resposta.json())
//             .then (resposta => resultado.innerHTML =`
//                 <img src="${resposta.sprites.front_default}"/> 
//                 <p>#${resposta.id}</p>
//                 <h2>${resposta.name}</h2>
//             `)
// }

async function buscarPokemon(termo) {
    const url = "https://pokeapi.co/api/v2/pokemon/" + termo
    const resposta = await fetch(url)
    const pokemon = await resposta.json()

    resultado.innerHTML = `
        <img src="${resposta.sprites.front_default}"/> 
        <p>#${resposta.id}</p>
        <h2>${resposta.name}</h2>
        `
}

btnBuscar.addEventListener('click', () => {
    console.log("Fui clicado buscando pokemon" + campoBusca.value)
    pokemonAtual = campoBusca.value
    buscarPokemon(campoBusca.value)
});

btnBuscar.addEventListener('keyup' , evento => {
    if(evento.key == "Enter") {
        btnBuscar.click()
    }
})