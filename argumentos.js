function prueba(parametro, parametro2){
    if(arguments.length < 2){
        console.log("Te falto un parametro");
    }
    else{
        console.log("Parametros correctos: ");
    }
}

prueba(1,2);