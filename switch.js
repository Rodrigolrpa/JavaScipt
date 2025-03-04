var numero1 = 5;
var numero2 = 10;
var tipoOperacion = "resta";

switch(tipoOperacion){
    case "suma":
        console.log("La suma es: " + (numero1 + numero2))
        break;
    case "resta":
        console.log("La resta es: " + (numero1 - numero2));
        break;
    default:
        break;
}