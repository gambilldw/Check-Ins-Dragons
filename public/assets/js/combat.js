var goblinHealth = 10;
var goblinFullHealth = 10;
//var goblinCurrentHealth = Math.floor(goblinfullhealth-goblinHealth);
//let goblinlifebar = Math.floor((goblinHealth/goblinfullhealth*100);
//var goblincurrenthealth = {goblinHealth-enemydmg};

var currentHealth = 10;
var fullHealth = 10;

function injuryMonitor() {

    if (currentHealth <= 0) {
        alert("Oh no... you died!");
    }
}

function healthMonitor() {
    // if goblin health less than 0 you win increment win loss
    if (goblinHealth <= 0) {
        alert("Stop, he's already dead!");
        //} else {
        //$("#AttackResult").html("Successful attack!");
    }
    //else if your health less than 0 you lose increment win loss

    // reset game stats to play again if win or loss determined
}

var d3 = {
    sides: 3,
    roll: function () {
        var randomNumber = Math.floor(Math.random() * this.sides) + 1;
        return randomNumber;
    }
};

var d6 = {
    sides: 6,
    roll: function () {
        var randomNumber = Math.floor(Math.random() * this.sides) + 1;
        return randomNumber;
    }
};



//Prints dice roll to the page

function printNumber(number) {
    var placeholder = document.getElementById('placeholder');
    placeholder.innerHTML = number;
}


//Standard Attack//
var attackbutton = document.getElementById('attackbutton');
var strength = (4);
var luck = (4);
var enemydefense = (2);


attackbutton.onclick = function () {
    var randomroll = d6.roll();
    var luckroll = luck * randomroll;
    var luckreturn = 0;
    if (randomroll === 6) {
        luckreturn++;
    }
    console.log(luckroll, luckreturn);
    var result = strength + randomroll + luckreturn - (enemydefense + 3);


    printNumber(result);
    console.log(randomroll);
    if (result <= 0) {
        $("#attackResult").html("Attack failed!");
        $("#attackDamage").html("");
        var currentHealth = fullHealth - 3;
        console.log(currentHealth);
        $("#currentHealth").width(currentHealth * 10 + "%");
        injuryMonitor();
    } else {
        $("#attackResult").html("Successful attack!");
        //
        if (result > 0) {
            goblinHealth -= result;
            console.log(result + " damage");
            $("#attackDamage").html(result + " damage");
        }
        console.log(goblinHealth + " Health Remaining");
        $("#goblinHealth").width(goblinHealth * 10 + "%");
        healthMonitor();
    }
};


//Heavy Attack//
var heavybutton = document.getElementById('heavybutton');
var strength = (4);
var luck = (4);
var enemyagility = (3);


heavybutton.onclick = function () {
    var randomroll = d6.roll();
    var luckroll = luck * randomroll;
    var luckreturn = 0;
    if (randomroll === 6) {
        luckreturn++;
    }
    console.log(luckroll, luckreturn);
    var result = strength + randomroll + luckreturn - (enemyagility + 3);


    printNumber(result);
    console.log(randomroll);
    if (result <= 0) {
        $("#attackResult").html("Attack failed!");
        $("#attackDamage").html("");
        var currentHealth = fullHealth - 3;
        console.log(currentHealth);
        $("#currentHealth").width(currentHealth * 10 + "%");
        injuryMonitor();
    } else {
        $("#attackResult").html("Successful attack!");
        //
        if (result > 0) {
            goblinHealth -= result;
            console.log(result + " damage");
            $("#attackDamage").html(result + " damage");
        }
        console.log(goblinHealth + " Health Remaining");
        $("#goblinHealth").width(goblinHealth * 10 + "%");
        healthMonitor();
    }
};

//Swift Attack//
var swiftbutton = document.getElementById('swiftbutton');
var agility = (5);
var luck = (4);
var enemydefense = (2);


swiftbutton.onclick = function () {
    var randomroll = d6.roll();
    var luckroll = luck * randomroll;
    var luckreturn = 0;
    if (randomroll === 6) {
        luckreturn++;
    }
    console.log(luckroll, luckreturn);
    var result = agility + randomroll + luckreturn - (enemydefense + 3);


    printNumber(result);
    console.log(randomroll);
    if (result <= 0) {
        $("#attackResult").html("Attack failed!");
        $("#attackDamage").html("");
        var currentHealth = fullHealth - 3;
        console.log(currentHealth);
        $("#currentHealth").width(currentHealth * 10 + "%");
        injuryMonitor();
    } else {
        $("#attackResult").html("Successful attack!");
        //
        if (result > 0) {
            goblinHealth -= result;
            console.log(result + " damage");
            $("#attackDamage").html(result + " damage");
        }
        console.log(goblinHealth + " Health Remaining");
        $("#goblinHealth").width(goblinHealth * 10 + "%");
        healthMonitor();
    }
};

//Spell Attack//
var spellbutton = document.getElementById('spellbutton');
var intellect = (4);
var luck = (4);
var enemydefense = (2);


spellbutton.onclick = function () {
    var randomroll = d6.roll();
    var luckroll = luck * randomroll;
    var luckreturn = 0;
    if (randomroll === 6) {
        luckreturn++;
    }
    console.log(luckroll, luckreturn);
    var result = intellect + randomroll + luckreturn - (enemydefense + 3);


    printNumber(result);
    console.log(randomroll);
    if (result <= 0) {
        $("#attackResult").html("Attack failed!");
        $("#attackDamage").html("");
        var currentHealth = fullHealth - 3;
        console.log(currentHealth);
        $("#currentHealth").width(currentHealth * 10 + "%");
        injuryMonitor();
    } else {
        $("#attackResult").html("Successful attack!");
        //
        if (result > 0) {
            goblinHealth -= result;
            console.log(result + " damage");
            $("#attackDamage").html(result + " damage");
        }
        console.log(goblinHealth + " Health Remaining");
        $("#goblinHealth").width(goblinHealth * 10 + "%");
        healthMonitor();
    }
};

//mind Attack//
var mindbutton = document.getElementById('mindbutton');
var intellect = (4);
var luck = (4);
var enemyintellect = (2);


spellbutton.onclick = function () {
    var randomroll = d6.roll();
    var luckroll = luck * randomroll;
    var luckreturn = 0;
    if (randomroll === 6) {
        luckreturn++;
    }
    console.log(luckroll, luckreturn);
    var result = intellect + randomroll + luckreturn - (enemyintellect + 3);


    printNumber(result);
    console.log(randomroll);
    if (result <= 0) {
        $("#attackResult").html("Attack failed!");
        $("#attackDamage").html("");
        var currentHealth = fullHealth - 3;
        console.log(currentHealth);
        $("#currentHealth").width(currentHealth * 10 + "%");
        injuryMonitor();
    } else {
        $("#attackResult").html("Successful attack!");
        //
        if (result > 0) {
            goblinHealth -= result;
            console.log(result + " damage");
            $("#attackDamage").html(result + " damage");
        }
        console.log(goblinHealth + " Health Remaining");
        $("#goblinHealth").width(goblinHealth * 10 + "%");
        healthMonitor();
    }
};