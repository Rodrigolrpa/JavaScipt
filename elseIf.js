//Si la edad es menor a 10 años es un niño
//Si la edad es mayor a 10 años y menor a 17 es un adolescente
//Si la edad es mayor o igual a 18 años es un adulto

var edad = 15;
if(edad < 10){
    console.log("Es un niño");
}
else if(edad > 10 && edad <= 17){
    console.log("Es un adolescente")
}
else if(edad >= 18){
    console.log("Es un adulto")
}
else{
    console.log("Digite correctamente")
}
