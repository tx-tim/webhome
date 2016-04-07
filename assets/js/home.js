var scene,
    timer,
    planet,
    stars = [];

var planets = [{
    initSpeed: .15,
    src: "./assets/images/space/planetsolid.svg",
    initWidth: 150,
    initHeight: 128,
    get initX() {
        return this.initWidth * 1.75;
    },
    get initY() {
        return this.initHeight/1.5;
    }
}];

var starObj  = {
    initSpeed: 10,
    src: "./assets/images/space/star3.svg",
    initWidth: 25,
    initHeight: 25,
    get initX() {
        return Math.random() * (1000 - 1) + 1;
    },
    get initY() {
        return Math.random() * (1 - -90) + -90;
    }
}


function Planet(planetObj) {
    
    Sprite.call(this, scene, planetObj.src,  planetObj.initWidth, planetObj.initHeight);
    
    this.setPosition(planetObj.initX, planetObj.initY);
    this.setSpeed(planetObj.initSpeed);
    this.setBoundAction(BOUNCE);
    this.setMoveAngle(70);
}

function Star(starObj) {    
    this.initSpeed = Math.random() * (25 - 10) + 10;
    this.src = "./assets/images/space/5ptstarsolid.svg";
    this.initWidth = 15;
    this.initHeight = 15;
    this.xPos = function() {
        return Math.random() * (800-500) + 500;
    },
    this.yPos = function() {
        return Math.random() * (100 - -10) + -10;
    }

    Sprite.call(this, scene, this.src,  this.initWidth, this.initHeight);
    this.setPosition(starObj.initX, starObj.initY);
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

    if(timer.getElapsedTime() > 3) {
        stars.push(new Star(starObj));
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