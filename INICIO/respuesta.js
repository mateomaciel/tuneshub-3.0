let queryString = window.location.search
let objetoQuery = new URLSearchParams(queryString);
var resultado = objetoQuery.get('busqueda');

fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=" + resultado)
.then(function(response){
    return response.json()


})

.then(function(dato){

let answer = dato.data;
console.log (answer)

let tracks = document.querySelector('#resultados')

answer.forEach(function(dataCancion){
    tracks.innerHTML += `<div>
    <iframe id="track" scrolling="no" frameborder="0" allowTransparency="true" src="https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist
    =true&width=700&height=350&color=ff0000&layout=dark&size=medium&type=tracks&id=` + dataCancion.id +`&app_id=1"></iframe></div>`

if (answer == "null") {
//ak falta agregar que cuando sea null no se muestre nada



}

})
})
