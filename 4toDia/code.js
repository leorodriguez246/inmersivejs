function agregarPelicula(){
    let urlimg = document.getElementById("pelicula").value;
    if(urlimg == "" || urlimg == null){
        alert("Falta ingresar una URL  ");
    }else{
        let divListaPeliculas = document.getElementById("listaPeliculas")
        divListaPeliculas.innerHTML = divListaPeliculas.innerHTML + "<img src="+urlimg+">";
        document.getElementById("pelicula").value = "";
    }
};