//Creo jugador estudiante
var caballo = new Caballo ("Pegasus", "Negro Quiteño");

//Creo jugador robótico
var robot = new Caballo ("Tiro al blanco", "robot");

//Jugar
document.getElementById("btnjugar")
.addEventListener("click",function () {
        caballo.avanzar()
        return myMove()
});
document.getEvenListener("click", function(){
    robot.avanzar();
});


document.getElementById("mostrarGanador")
addEventListener("dbllick",function(){
    if(caballo.totalRecorrido()>robot.totalRecorrido()){
        console.log(caballo.nombre+ "Eres el Ganador");
    }else{
        console.log(robot.nombre+"Eres el Ganador");

        console.log("_____________________");
        
        console.log("resultado");

        console.log(caballo.nombrre+"recorrido"+caballo.totalRecorrido ());

        console.log(robot.nombre+"recorrido"+robot.totalRecorrido());
    }
});


//Se muestra el ganador

function myMove(){
    var elem = document.getElementById("animenme");
    var pos = 0;
    var id = setIntervail(frame,200);
    function frame(){
        if(pos == 1100){
            clearInterval(id);
        }else{
            pos++;
            //elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }
    }
}

function myMove1(){
    var elem = document.getElementById("animenme1");
    var pos = 0;
    var id = setInterval(frame,200);
    
    function frame() {
        if (pos == 1100) {
            clearInterval (id);
        }else{
            pos++;
            //elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }
    }
}