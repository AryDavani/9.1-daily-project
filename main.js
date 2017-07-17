//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype

//  I guess this is wrong:
//
// function Dog (status, hungry, color, owner) {
//   status = status || "normal";
//   hungry = hungry || false;
// };
//

function Dog(status, hungry, color, owner) {
  this.status = status || "normal";
  this.hungry = hungry || true;
  this.color = color || "black";
  this.owner = owner || undefined;
};

let sadie = new Dog();
sadie.hungry = false;
let moonshine = new Dog();
let atticus = new Dog();


// Instances of Dog
// Needed: sadie, moonshine, atticus

//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human (cool) {
  this.cool = cool || false;
};

Human.prototype.pet = function(dog) {
  this.dog = dog;
  dog.status = "happy";
};

Human.prototype.feed = function(dog) {
  this.dog = dog;
  dog.hungry = false;
};

// Instances of Human

let mason = new Human();

let julia = new Human(true);
// Needed: mason, julia
