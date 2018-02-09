var warriorHP = 10;
var guardHP = 8;
var damage = Math.floor((Math.random() * 8) + 1);
document.getElementById('attack').addEventListener("click",doDamage);

function doDamage() {
  guardHP = guardHP - damage;
    document.getElementById('demo').innerHTML =
    "You inflict " + damage + " points of damage!"; 
  document.getElementById('demo').style.display = 'block';
}