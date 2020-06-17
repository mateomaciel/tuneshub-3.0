console.log("terminon de funcionar")

let queryString = window.location.search

let objetoQuery = new URLSearchParams(queryString);

var resultado = objetoQuery.get('busqueda');

console.log(resultado)

fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=" + resultado)
.then(function(response){
    return response.json()
})
.then(function(data){
console.log(data)
})