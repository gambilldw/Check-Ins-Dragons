var enemyWizard = {};


var bravery = 6;

var goblinBravery = 5;
var goblinHealth = 10;
var goblinFullHealth = 10;
//var goblinCurrentHealth = Math.floor(goblinfullhealth-goblinHealth);
//let goblinlifebar = Math.floor((goblinHealth/goblinfullhealth*100);
//var goblincurrenthealth = {goblinHealth-enemydmg};

var currenthealth = 30;


function healthMonitor() {
  // if goblin health less than 0 you win increment win loss
  if (goblinHealth <= 0) {
        alert("Stop, he's already dead!");
    //} else {
        //$("#castResult").html("Successful cast!");
    }
  //else if your health less than 0 you lose increment win loss

  // reset game stats to play again if win or loss determined
}

var d3 = {
    sides: 3,
    roll: function() {
        var randomNumber = Math.floor(Math.random() * this.sides) + 1;
        return randomNumber;
    }
};

var d6 = {
    sides: 6,
    roll: function() {
        var randomNumber = Math.floor(Math.random() * this.sides) + 1;
        return randomNumber;
    }
};



//Prints dice roll to the page

function printNumber(number) {
    var placeholder = document.getElementById('placeholder');
    placeholder.innerHTML = number;
}

//Lore of Light Spell//
var b1 = document.getElementById('b1');

b1.onclick = function() {
    var result = d6.roll() + d6.roll();
    printNumber(result);
    if (result < 4) {
        $("#castResult").html("Failed to cast!");
    } else {
        $("#castResult").html("Successful cast!");
    }
};

//Lore of Heavens Spell//
var b2 = document.getElementById('b2');

//Does d3 damage to enemy, roll d6, if 6, repeat//
b2.onclick = function() {
     var result = d6.roll() + d6.roll();
     var d3damage = d3.roll();
    printNumber(result);
    if (result < 6) {
        $("#castResult").html("Failed to cast!");
    } else {
        $("#castResult").html("Successful cast!");
        goblinHealth -= d3damage;
        console.log(d3damage +" damage");
        result = d6.roll();
        //if (result >= 6) {
          //goblinHealth -= d3damage;
            //console.log(d3damage + " damage chain");
        //}
        while(result=6){
            
            break;
        }
        console.log (goblinHealth);
        //healthMonitor();
    }
};

//Lore of Metal Spell//
var b3 = document.getElementById('b3');

b3.onclick = function() {
    var result = d6.roll() + d6.roll();
    printNumber(result);
    if (result < 8) {
        $("#castResult").html("Failed to cast!");
    } else {
        $("#castResult").html("Successful cast!");
    }
};

//Lore of Life Spell//
var b4 = document.getElementById('b4');

//Healing Spell//
b4.onclick = function() {
    var result = d6.roll() + d6.roll();
    printNumber(result);
    if (result < 5) {
        $("#castResult").html("Failed to cast!");
    } else {
        $("#castResult").html("Successful cast!");
          currentHealth += d6.roll();
          console.log("Healed " + d6.roll());
        console.log (currentHealth);
        //healthMonitor();
    }
};

//Lore of Beasts Spell//
var b5 = document.getElementById('b5');

b5.onclick = function() {
    var result = d6.roll() + d6.roll();
    printNumber(result);
    if (result < 8) {
        $("#castResult").html("Failed to cast!");
    } else {
        $("#castResult").html("Successful cast!");
    }
};

//Lore of Fire Spell//
var b6 = document.getElementById('b6');

//Most basic damage spell against enemy, different damage levels//
b6.onclick = function() {
    var result = d6.roll() + d6.roll();
    var adamage =1;
    var d3damage = d3.roll();
    var d6damage = d6.roll();
    printNumber(result);
    if (result < 5) {
        $("#castResult").html("Failed to cast!");
        $("#castDamage").html("");
    } else {
        $("#castResult").html("Successful cast!");
        result = d6.roll();
        //
        if (result <= 2) {
          goblinHealth -= 1;
            console.log(adamage + " damage");
            $("#castDamage").html(adamage + " damage");
        } 
        //
        else if (result <= 4) {
          goblinHealth -= d3damage;
            console.log(d3damage + " damage");
            $("#castDamage").html(d3damage + " damage");
        }
        //
        else {
          goblinHealth -= d6damage;
            console.log(d6damage + " damage");
            $("#castDamage").html(d6damage + " damage");
        }
        console.log (goblinHealth + " Health Remaining");
        $("#goblinHealth").width(goblinHealth*10 + "%" );
        healthMonitor();
    }
};

//Lore of Shadow Spell//
var b7 = document.getElementById('b7');

b7.onclick = function() {
    var result = d6.roll() + d6.roll();
    printNumber(result);
    if (result < 8) {
        $("#castResult").html("Failed to cast!");
    } else {
        $("#castResult").html("Successful cast!");
    }
};

//Lore of Death Spell//
var b8 = document.getElementById('b8');

b8.onclick = function() {
    var result = d6.roll() + d6.roll();
    printNumber(result);
    if (result < 8) {
        $("#castResult").html("Failed to cast!");
    } else {
        $("#castResult").html("Successful cast!");
    }
};