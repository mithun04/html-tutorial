/**
 * Created by mithun on 5/4/17.
 */
var location1 = 3;
var location2 = 4;
var location3 = 5;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

while(isSunk == false){
    guess = prompt("Ready, Aim, Fire! (Enter a number from 0-6:");
    if(guess<0 || guess>6){
        alert("Please enter a valid number!");
    }
    else {
        guesses = guesses +1;
        if(guess==location1 || guess==location2 || guess==location3){
            hits = hits +1;
            alert("Hit!");
            if(hits==3){
                isSunk=true;
                alert("You sank my battleship");
            }
        }
        else {
            alert("Miss!");
        }
    }
}
var stats = "You took " +guesses+ "guesses to sink my battleship";
alert(stats);
