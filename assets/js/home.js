var scene,
    timer,
    planet,
    stars = [],
    elapsedTimeSpaceing = 2.5;

var planets = [{
    initSpeed: .15,
    src: "./assets/images/space/planetsolid.svg",
    initWidth: 130,
    initHeight: 111,
    get initX() {
        return this.initWidth * 1.75;
    },
    get initY() {
        return this.initHeight/1.5;
    }
}];


function Planet(planetObj) {
    Sprite.call(this, scene, planetObj.src,  planetObj.initWidth, planetObj.initHeight);
    this.setPosition(planetObj.initX, planetObj.initY);
    this.setSpeed(planetObj.initSpeed);
    this.setBoundAction(BOUNCE);
    this.setMoveAngle(70);
}

function Star() {    
    this.initSpeed = Math.random() * (30 - 15) + 15;
    this.src = "./assets/images/space/5ptstarsolid.svg";
    this.initWidth = 15;
    this.initHeight = 15;
    this.xPos = function() {
        return Math.random() * (800-500) + 500;
    },
    this.yPos = function() {
        return Math.random() * (0 - -50) + -10;
    }

    Sprite.call(this, scene, this.src,  this.initWidth, this.initHeight);
    this.setPosition(this.xPos(), this.yPos());
    this.setSpeed(this.initSpeed);
    this.setBoundAction(DIE);
    this.setMoveAngle(240);
    //this.setImgAngle(90);
}



function init() {
    scene = new Scene('game-canvas');
    planet = new Planet(planets[0]);

    planet.setImgAngle(222);
    timer = new Timer();
    scene.start();
}


function update() {
    
    if(timer.getElapsedTime() > elapsedTimeSpaceing) {
        stars.push(new Star());
        elapsedTimeSpaceing += 2; 
        timer.reset();
    }
    
    scene.clear();
    
    for (var j=0; j<stars.length; j++) {
        stars[j].update();
    }

    planet.update();

}


window.onload = function() {
    init();
};