
var db;
var gameState=0;
var playerCount,form,player,game;

function setup(){
    createCanvas(500,500);
    db=firebase.database();
    game=new Game();
    game.getState();
    game.start();
}

function draw(){
    
}


