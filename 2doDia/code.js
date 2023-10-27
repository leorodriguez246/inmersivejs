//Declaracion de variables 
var numeroRandom = parseInt((Math.random()*100)+1);
var contador = 10;
//Funcion para adivinar con el numero ingresado
function adivinar(){
    if(contador >= 1){
        let ingresado = document.getElementById("nIngresado");
        document.getElementById("nIntentos").innerHTML = contador;
        if(ingresado.value == 0 || ingresado.value == "" || ingresado.value >= 101 ){
            let error = "Ingresa un numero valido entre 1 y 100.";
            document.getElementById("error").innerHTML = error;
            document.getElementById("nIntentos").innerHTML = contador;
        }else {
            if(ingresado.value == numeroRandom){
                let resultado = "Acertaste al numero, juega otra vez";
                document.getElementById("resultado").innerHTML = resultado;
                numeroRandom = parseInt((Math.random()*100)+1);
                document.getElementById("nIntentos").innerHTML = contador;
                if(contador == 10){
                    let resultado = "Acertaste al numero, y en tu primer intento.";
                    document.getElementById("resultado").innerHTML = resultado;
                    numeroRandom = parseInt((Math.random()*100)+1);
                    console.log(numeroRandom);
                    contador = 10;
                    document.getElementById("nIntentos").innerHTML = contador;
                } else{
                    contador = 10;
                    document.getElementById("nIntentos").innerHTML = contador;
                }
            }else{
                if(ingresado.value < numeroRandom){
                    let resultado = "No has acertado, el numero secreto es mayor a "+ingresado.value+".";
                    document.getElementById("resultado").innerHTML = resultado;
                    contador--;
                    document.getElementById("nIntentos").innerHTML = contador;
                }
                if(ingresado.value > numeroRandom){
                    let resultado = "No has acertado, el numero secreto es menor a "+ingresado.value+".";
                    document.getElementById("resultado").innerHTML = resultado; 
                    contador--;
                    document.getElementById("nIntentos").innerHTML = contador;
                }
            }
        }
    }else{
        let error = "Te has quedado sin intentos.";
        document.getElementById("error").innerHTML = error;
    }
};





