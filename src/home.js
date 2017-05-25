
var ocean = new Array(7);
for (var i = 0; i < 7; i++) {
  ocean[i] = new Array(7);
}

ocean[Math.floor(Math.random()*7)][Math.floor(Math.random()*7)] = 1;
ocean[Math.floor(Math.random()*7)][Math.floor(Math.random()*7)] = 1;
ocean[Math.floor(Math.random()*7)][Math.floor(Math.random()*7)] = 1;
ocean[Math.floor(Math.random()*7)][Math.floor(Math.random()*7)] = 1;

var count =0;
var hits =0;
var validAttempts = 10;
var shipsToDistroy = 4;


function locateShip(id,cordinateX,cordinateY) {
    if(count < validAttempts){
            if(ocean[cordinateX][cordinateY] == 1) {
            document.getElementById(id).src="../assets/image/ship.png";
            hits++;  
            }

            else {
            document.getElementById(id).src="../assets/image/miss.png";
            }

            count++;
            if(hits == shipsToDistroy) {
            alert("YOU WIN !!!!!!!!!!!1");
            }
        } 

    else {
           alert("OOOOOPPPSSS LOSER");
    }

}







