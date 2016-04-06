var scene;

var planets = [{
    initSpeed: 0.5,
    src: "./assets/images/space/planet4.svg",
    initWidth: 350,
    initHeight: 350,
    get initX() {
        return this.initWidth/6;
    },
    get initY() {
        return this.initHeight/5;
    }
}];

var starObj  = {
    initSpeed: 10,
    src: "./assets/images/space/star3.svg",
    initWidth: 25,
    initHeight: 25,
    get initX() {
        return Math.random() * (-9000 - 1000) + 1000;
    },
    get initY() {
        return Math.random() * (1 - -10) + -10;
    }
}


function Planet(planetObj) {
    
    Sprite.call(this, scene, planetObj.src,  planetObj.initWidth, planetObj.initHeight);
    this.setPosition(planetObj.initX, planetObj.initY);
    this.setSpeed(planetObj.initSpeed);
    this.setBoundAction(BOUNCE);
    this.setMoveAngle(120)
}

function Star(starObj) {    
    this.initSpeed = Math.random() * (25 - 10) + 10;
    this.src = "./assets/images/space/star3.svg";
    this.initWidth = 5;
    this.initHeight = 5;
    this.xPos = function() {
        return Math.random() * (500-1) + 1;
    },
    this.yPos = function() {
        return Math.random() * (500 - -10) + -10;
    }

    Sprite.call(this, scene, this.src,  this.initWidth, this.initHeight);
    this.setPosition(starObj.initX, starObj.initY);
    this.setSpeed(this.initSpeed);
    this.setBoundAction(DIE);
    this.setMoveAngle(120);
    this.setImgAngle(90);
}

function init() {
    scene = new Scene('game-canvas');
    //scene.setBG("green");
    //scene.setSizePos(400, 300, 0, 0)

    planet1 = new Planet(planets[0]);
    star1 = new Star(starObj);

    scene.start();
}

var stars = [];
function update() {
    var num = Math.random() + 3;

    for(var i=0; i<=num;i++) {
        stars.push(new Star(starObj));
    }

    scene.clear();

    

    for (var j=0; j<stars.length; j++) {
        stars[j].update();
    }

    planet1.update();
}


window.onload = function() {
    init();
};