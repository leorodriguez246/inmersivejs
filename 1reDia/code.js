//Declaracion de variables constantes
const valorDolar = 936.56;
const valorRB = 186.45;
const valorEuro = 997.85;
const valorArg = 2.67;

//Funcion para conversion de divisas
function conversor(){
    let ingresado = document.getElementById("ingresado");
    if(ingresado.value == ""){
        alert("Favor de ingresar un valor para conversion.");
    }else{
        let seleccion = document.getElementById("selector");
        let conversion;
        let result;
        switch (seleccion.value){
            case "0":
                result = "Favor de elegir una opcion para convertir.";
                document.getElementById("resultado").innerHTML = result;
                break;
            case "usd":
                conversion = (ingresado.value/valorDolar).toFixed(2);
                result = "$"+conversion.toString()+" Dolares";
                document.getElementById("resultado").innerHTML = result;
                break;
            case "euro":
                conversion = (ingresado.value/valorEuro).toFixed(2);
                result = "$"+conversion.toString()+" Euros";
                document.getElementById("resultado").innerHTML = result;
                break;
            case "arg":
                conversion = (ingresado.value/valorArg).toFixed(2);
                result = "$"+conversion.toString()+" Pesos Argentinos";
                document.getElementById("resultado").innerHTML = result;
                break;  
            case "br":
                conversion = (ingresado.value/valorRB).toFixed(2);
                result = "$"+conversion.toString()+" Reales Brasileños";
                document.getElementById("resultado").innerHTML = result;
                break;      
        }
    }
};

//Funcion para conversion de temperatura
function temperatura(){
    let ingresado = document.getElementById("ingresado2");
    if(ingresado.value == ""){
        alert("Favor de ingresar un valor para conversion.");
    }else{
        let seleccion = document.getElementById("selector2");
        let conversion;
        let result;
            switch (seleccion.value){
                case "0":
                    result = "Favor de elegir una opcion para convertir.";
                    document.getElementById("resultado2").innerHTML = result;
                    break;
                case "fahrenheit":
                    conversion = ((ingresado.value*9/5)+32).toFixed(2);
                    result = conversion.toString()+" °F";
                    document.getElementById("resultado2").innerHTML = result;
                    break;
                case "kelvin":
                    conversion = (parseInt(ingresado.value)+273.15).toFixed(2);
                    result = conversion.toString()+" °K";
                    document.getElementById("resultado2").innerHTML = result;
                    break;
            }
    }
};



/* Codigo prueba de funcionamiento

var pesoChileno = prompt("Ingrese cantidad de Pesos Chilenos a convertir: ");
if(pesoChileno == null){
    pesoChileno = prompt("Ingrese cantidad de Pesos Chilenos a convertir: ");
}
var conversor = (pesoChileno/valorDolar).toFixed(2);
alert("$"+pesoChileno+" pesos chilenos son un total de: $"+conversor+" dolares.");

*/

