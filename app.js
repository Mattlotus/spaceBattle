

// Determine min and max numbers
function generateRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min)
};

// CHARACTER CREATION. MARIO IS PLAYER 1

let p1 = {
    name: "Mario",
    hp: 100,
    firepower: 5 , 
    accuracy : 7 , 
};

let bowser = {
    name: "bowser",
    hp: 20,
    firepower: 7,
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
    firepower: 2,
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
    firepower: 5,
    accuracy: generateRandomNum (6,8)
 };

 let diddy = {
    name: "diddy",
    hp: 20,
    firepower: 2,
    accuracy: generateRandomNum (6,8)
 };

//  set up

let opponents = [ bowser, link, kirby, DK, samus, diddy ];
let counter = 0
let currentOpp = opponents[counter];
console.log(counter,":counter")

console.log ("currentOpp",currentOpp.name)

// attacking your first Opp
const startRound = () => {
    // console.log(currentOpp);
    let power = p1.firepower;
    let opponentLife = currentOpp.hp;
    let shot = (opponentLife -= power);
    currentOpp.hp = shot
    console.log(`${currentOpp.name} opp hit  with power of ${power}`);
    determineLifeOfOpp ();

};

// check mario health

const determineLifeOfMario = () => {
    
    if (p1.hp <= 0){
        alert("GAME OVER BUDDY")
        // location reload refreshes the page
        location.reload()
    } else{
        startRound(currentOpp)
    
    }
};
// opponents turn
const oppAttack = () => {
    if (currentOpp.accuracy <= 6){
        console.log (`${currentOpp.name} hits Mario`)
     p1.hp -= currentOpp.firepower;
     console.log(`${p1.name}Hp decreases to ${p1.hp}`)
    } else {
        console.log ("miss")
        startRound ()
    }
    
};

const switchOpp = () => {
    counter++
    if (counter > 5){
        console.log('%c winner winner chicken dinner', 'color:red; font-size:50px')
        setTimeout(() => {
            location.reload() 
        },5000)
        // location reload refreshes the page
        // location.reload()

    }else {
        console.log('keep fighting')
        currentOpp = opponents[counter]
    console.log("new challenger is...", currentOpp.name)
    alert("NEW CHALLENGER")
    }
    

   
}

const determineLifeOfOpp = () => {
    console.log(`${currentOpp.name}currentOpp hp is ${currentOpp.hp}`);

     if (currentOpp.hp <= 0){ 
        console.log (`%c${currentOpp.name} opp is dead`, 'color:purple;font-size:15px')
      switchOpp();
      console.log ("Current Opponent", currentOpp.name)
     } else {
        oppAttack ()
        determineLifeOfMario ()
     }

};

 const retreat = () => {
    alert ("You exited the game")
    // refreshes the page
    location.reload()
 }
  




// option to attack or retreat after destryoing opponent





 
 









