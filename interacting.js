let tigger = {character: 'Tigger',greet: function(){
    console.log("I am orange");
    }};
let pooh = {character:'Winnie the Pooh',greet: function(){
    console.log("I love Honey!");
    }};
let piglet = {character:'Piglet',greet: function(){
    console.log("I am pink!");
    }};
let bees = {character:'Bees',greet: function(){
    console.log("I am yellow!");
    }};
let christopherRobin  = {character:'Christopher Robin',greet: function(){
    console.log("I am a person!");
    }};
let owl = {character:'Owl',greet: function(){
    console.log("I love night!");
    }};
let rabbit = {character: 'Rabbit',greet: function(){
    console.log("I love carrots");
    }};
let gopher = {character: 'Gopher',greet: function(){
    console.log("I love cheese!");
    }};
let kanga ={character: 'Konga',greet: function(){
    console.log("I love leafs");
    }};
let eeyore = {character:'Eeyore',greet: function(){
    console.log("I am black");
    }};
let heffalumps ={character:'Heffalumps',greet: function(){
    console.log("I am an Elephant");
    }};
Object = "none";

//tigger
tigger.north = pooh;

//pooh
pooh.south = tigger;
pooh.west = piglet;
pooh.east = bees;
pooh.north = christopherRobin;

//piglet
piglet.north = owl;
piglet.east = pooh;

//bees
bees.north = rabbit;
bees.west = pooh;

//gopher
gopher.west = rabbit;

//christopherRobin
christopherRobin.north = kanga;
christopherRobin.south = pooh;
christopherRobin.west = owl;
christopherRobin.east = rabbit;

//owl
owl.east = christopherRobin;
owl.south = piglet;

//rabbit
rabbit.west = christopherRobin;
rabbit.east = gopher;
rabbit.south = bees;

//kanga

kanga.south = christopherRobin;
kanga.north = eeyore;

//eeyore
eeyore.south = kanga;
eeyore.east = heffalumps;


//huffalumps
heffalumps.west = eeyore;


var player = { location : tigger }

function move(direction){
    if(direction == "north" ){
        if(player.location.north == undefined){
            console.log("Something went wrong")
        }
        else {
            player.location = player.location.north;
            console.log("You are now at " + player.location.character + "'s house");
            
        }
    }
    if(direction == "south" ){
        if(player.location.south == undefined){
            console.log("Something went wrong")
        }
        else {
            player.location = player.location.south;
            console.log("You are now at " + player.location.character + "'s house ");
            
        }
    }
    if(direction == "east" ){
        if(player.location.east == undefined){
            console.log("Something went wrong")
        }
        else {
            player.location = player.location.east;
            console.log("You are now at " + player.location.character + "'s house ");
          
        }
    }
    if(direction == "west" ){
        if(player.location.west == undefined){
            console.log("Something went wrong")
        }
        else {
            player.location = player.location.west;
            console.log("You are now at " + player.location.character + "'s house ");
        }
    }
}

move("south");
move("north");
move("east");
move("west");
move("north");