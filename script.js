const url = "https://pokeapi.co/api/v2/pokemon/384"
const resultado = document.getElementById('resultado')
const campoBusca = document.getElementById('campoBusca')
const btnBuscar = document.getElementById('btnBuscar')
const btnAnterior = document.getElementById('btnBuscar')
const btnAleatorio = document.getElementById('btnAleatorio')
const btnProximo = document.getElementById('btnProximo')
var pokemonAtual = 1;
buscarPokemon(1)

// Forma Compacta, usando arrow function
const resposta = fetch(url)
                    .then(resposta => resposta.json())
                    .then(resposta => resultado.innerHTML = `
                        <img src="${resposta.sprites.front_default}"/>
                        <p>#${resposta.id}</p>
                        <h2>${resposta.name}</h2>
                    `)
    function buscarPokemon(termo) {
       const url = "https://pokeapi.co/api/v2/pokemon/" + termo
       const resposta = await fetch(url)
        if (resposta.ok) {
            const pokemon = await resposta.json()
            pokemonAtual = pokemon.id
            resposta.innerHTML = 
            <img src="${resposta.sprites.front_default}"/>
             <p>#${resposta.id}</p>
             <h2>${resposta.name}</h2>
        } else {
            resultado.innerHTML = '<h2>Pokemon Não Encontrado</h2>
        }
        
            .then(resposta => resposta.json())
            .then(resposta => resultado.innerHTML = `
        `)
 }

async function buscarPokemon(termo) {
    const url = "https://pokeapi.co/api/v2/pokemon/" + termo
    const resposta = await fetch(url)
    const pokemon = await resposta.json()

    pokemonAtual = pokemon.id
    resultado.innerHTML = `
        <img src="${pokemon.sprites.front_default}"/>
        <p>#${pokemon.id}</p>
        <h2>${pokemon.name}</h2>
    `
}

btnBuscar.addEventListener('click', () => {
    console.log("Fui clicado buscando pokemon " + campoBusca.value)
    pokemonAtual = campoBusca.value
    buscarPokemon(pokemonAtual)
});

campoBusca.addEventListener('keyup', evento => {
    if (evento.key == "Enter") {
        btnBuscar.click()
    }
})
btnProximo.addEventListener('click' , () => {
    console.log('Buscando Proximo Pokemon')
    if (pokemonAtual <1025 ){
    pokemonAtual++
    buscarPokemon(pokemonAtual)
}})
btnAnterior.addEventListener('click' , () => {
    console.log('Buscando Pokemon Anterior')
    if (pokemonAtual >1 ) {
        pokemonAtual > 
        pokemonAtual--
    buscarPokemon(pokemonAtual)
    
 }})

 btnAleatorio.addEventListener('click' , () => {
    console.log('Buscando Pokemon Aleatorio')
    pokemonAtual =  Math.floor(Math.random() * 1025) + 1;
    buscarPokemon(pokemonAtual)
 })
