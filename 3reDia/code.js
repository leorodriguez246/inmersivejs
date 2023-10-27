//Declaracion de variables peliculas
var anotherEarth = {title: "Another Earth", urlimg: "https://www.indiewire.com/wp-content/uploads/2017/09/another-earth-2011.jpg"};
var tronLegacy = {title:"Tron: Legacy", urlimg: "https://www.indiewire.com/wp-content/uploads/2017/09/arrival-2016.jpg"};
var inception = {title:"Inception", urlimg: "https://www.indiewire.com/wp-content/uploads/2017/09/inception-2010.jpg"};
var gravity = {title:"Gravity", urlimg: "https://www.indiewire.com/wp-content/uploads/2017/09/gravity-2013.jpg"};
var matrix = {title:"Matrix", urlimg: "https://moviesmedia.ign.com/movies/image/article/121/1216165/8-matrix_1326252101.jpg"};
var avatar = {title:"Avatar", urlimg: "https://hips.hearstapps.com/hmg-prod/images/mv5bmtywotewnjazml5bml5banbnxkftztcwodc5mtuwmwatat-v1-1589309872.jpg"};
var bladeRunner = {title:"Blade Runner", urlimg: "https://moviesmedia.ign.com/movies/image/article/121/1216165/1-blade-runner_1326170897.jpg"};

//Declaracion de Array de peliculas
var collectionMovies = [anotherEarth, tronLegacy, inception, gravity, matrix, avatar, bladeRunner];

//Metodo para recorrer arreglo de peliculas y mostrarlas en html.
document.write('<div class="container_todosFilmes">');
for (let i = 0; i < collectionMovies.length; i++) {
    let title = collectionMovies[i].title;
    let urlimg = collectionMovies[i].urlimg;
    document.write('<div class="container_filme">');
    document.write("<img src="+urlimg+"></img>");
    document.write("<p>"+title+"</p>");
    document.write("</div>");
}
document.write("</div>");


