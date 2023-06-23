// Make two characters 
// Mario attacks bowser
// IF bowser survives , bowser attacks Mario

function generateRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min)
};

// CHARACTER CREATION. MARIO IS PLAYER 1

let p1 = {
    name: "Mario",
    hp: 20,
    firepower: 5 , 
    accuracy : 7 , 
};

let bowser = {
    name: "bowser",
    hp: 20,
    firepower: 18,
    accuracy : generateRandomNum (3,6),
};

let link = {
    name: "Link",
    hp: 20,
    firepower: 8,
    accuracy: generateRandomNum (2,4),
    
};
 let kirby = {
    name: "kirby",
    hp: 20,
    firepower: 6,
    accuracy: generateRandomNum (6,8)
 };

 let DK = {
    name: "DK",
    hp: 20,
    firepower: 6,
    accuracy: generateRandomNum (6,8)
 };

 let samus = {
    name: "samus",
    hp: 20,
    firepower: 6,
    accuracy: generateRandomNum (6,8)
 };

 let diddy = {
    name: "diddy",
    hp: 20,
    firepower: 6,
    accuracy: generateRandomNum (6,8)
 };

//  set up

let opponents = [ bowser, link, kirby, DK, samus, diddy ];

let currentOpp = bowser;
let counter = 0
console.log(counter,":counter")

console.log ("currentOpp",currentOpp)

// attacking your first Opp
const startRound = () => {
    console.log(currentOpp);
    let power = p1.firepower;
    let opponentLife = currentOpp.hp;
    let shot = (opponentLife -= power);
    currentOpp.hp = shot
    console.log(`${currentOpp.name} with power of ${power}`);
    determineLifeOfOpp ();

};
//  const oppTurn = () => {

//  }

// check mario health

const determineLifeOfMario = () => {
    
    if (p1.hp <= 0){
        alert("GAME OVER BUDDY")
    } else{
        startRound(currentOpp)
    }
};
const oppAttack = () => {
    if (currentOpp.accuracy <= 6){
        console.log ("hit")
        p1.hp -= currentOpp;
    } else {
        console.log ("miss")
        startRound ()
    }
    
};

const switchOpp = () => {
    console.log("switch")
   
}

const determineLifeOfOpp = () => {
    console.log(currentOpp.hp);
     if (currentOpp.hp <= 0){ 
      switchOpp();
      counter++
      currentOpp = opponents [counter]
      console.log ("Current Opponent", currentOpp)
     } else {
        oppAttack ()
        determineLifeOfMario ()
     }

};




// option to attack or retreat after destryoing opponent





 
 









