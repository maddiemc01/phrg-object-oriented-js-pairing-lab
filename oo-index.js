const eventArea = document.getElementById('event_area')
const imageArea = document.getElementById('image_area')
const restartButton = document.getElementById('restart').addEventListener("click",()=> Unicorn.prototype.restart())
const attackButton = document.getElementById('attack').addEventListener("click",()=> Unicorn.prototype.attack())
const defendButton = document.getElementById('defend').addEventListener("click",()=> Unicorn.prototype.defend())
const healButton = document.getElementById('heal').addEventListener("click",()=> Unicorn.prototype.heal())
const breakdanceButton = document.getElementById('breakdance').addEventListener("click",()=> Unicorn.prototype.breakdance())
const eatButton = document.getElementById('eat').addEventListener("click",()=> Unicorn.prototype.eatCronut())

class Unicorn {
  constructor(name, occupation) {
    this.name = name;
    this.occupation = occupation;
    this.health = 1000
  }

}


Unicorn.prototype.restart = function() {
  while (eventArea.hasChildNodes()) {
    eventArea.removeChild(eventArea.lastChild);
}
var div = document.createElement("div");
div.appendChild(document.createTextNode("Out on the street, ready to go!"));
eventArea.prepend(div);
imageArea.className = 'new';
}


Unicorn.prototype.attack = function() {
  var div = document.createElement("div");
  div.appendChild(document.createTextNode("'ATTAAAAAAAAAK!''"));
  eventArea.prepend(div);
  imageArea.className = 'attack';
}


Unicorn.prototype.defend = function() {
  var div = document.createElement("div");
  div.appendChild(document.createTextNode("You put sunglasses on."));
  eventArea.prepend(div);
  imageArea.className = 'defend';
}


Unicorn.prototype.heal = function() {
  var div = document.createElement("div");
  div.appendChild(document.createTextNode("You feel refreshed after yoga."));
  eventArea.prepend(div);
  imageArea.className = 'heal';
}


Unicorn.prototype.breakdance = function() {
  var div = document.createElement("div");
  div.appendChild(document.createTextNode("It's really spinning class"));
  eventArea.prepend(div);
  imageArea.className = 'breakdance';
}



Unicorn.prototype.eatCronut = function() {
  var div = document.createElement("div");
  div.appendChild(document.createTextNode("You've gained 1000 health points."));
  eventArea.prepend(div);
  imageArea.className = 'eat';
}

