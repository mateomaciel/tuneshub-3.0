let queryString = window.location.search
let objetoQuery = new URLSearchParams(queryString);
let albumId = objetoQuery.get('id');
console.log(albumId);

fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/' + albumId)
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(datos){

        let can = [datos]
        console.log(datos)

        let imgdelS = document.querySelector('#imgcancion');
        imgdelS.innerHTML += `<img id="imgsong" src="${datos.album.cover}" alt="">`;

        let namedelS = document.querySelector('#namecancion');
       namedelS.innerHTML += `<h3 id="namesong">${datos.title}</h3>`

       let namedelAR = document.querySelector('#nameart');
       namedelAR.innerHTML += `<a href="../detARTISTA/ARTISTA.html?id=${datos.artist.id}"  style="text-decoration: none;"><p id="nameartista">${datos.artist.name}</p>`

       let dur = document.querySelector('#duracion');
       dur.innerHTML += `<h3 id="duration" >${datos.duration}</h3>`

       let namedelAL = document.querySelector('#albumname');
       namedelAL.innerHTML += `<a href="/EXPLORAR/detALBUM/ALBUM.html?id=${datos.album.id}"  style="text-decoration: none;color:black"><p id="namealb">${datos.album.title}</p></a>`
       
       let repro = document.querySelector('#reproductor');
       repro.innerHTML += `<iframe scrolling="no" frameborder="0" allowTransparency="true" src="https://www.deezer.com/plugins/player?format=square&autoplay=false&playlist=false&width=300&height=300&color=007FEB&layout=dark&size=medium&type=tracks&id=${datos.id}&app_id=1" id="reproducir" width="300" height="300"></iframe>
       <div> </div>`

       let repropc = document.querySelector('#reproductorpc');
       repropc.innerHTML += `<iframe scrolling="no" frameborder="0" allowTransparency="true" src="https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=350&color=007FEB&layout=dark&size=medium&type=tracks&id=${datos.id}&app_id=1" id="reproducirpc" width="700" height="350"></iframe>`
    
       
})

    .catch(function(error){
        console.error(error);
    })


let añadir =document.querySelector("#botoncito");
console.log(añadir)


añadir.addEventListener("click", function(){
    if (window.localStorage.getItem("cancion") === null){

        window.localStorage.setItem("cancion", JSON.stringify(can))
        
    }else{
        let cancionObjeto = JSON.parse(window.localStorage.getItem("cancion"))
        
        cancionObjeto.push(datos)

        window.localStorage.setItem("cancion", JSON.stringify(cancionObjeto))
        
        console.log(cancionObjeto);
    }
})
