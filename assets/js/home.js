var bg,
    scene,
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

function ShootingStar() {    
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

}

function Star() {
    Shape.call(this, scene, 20, 20);
}

function scatterStars(scene) {
    var ctx = scene.canvas.getContext('2d')
        canvas = scene.canvas;

    ctx.beginPath();
    for(var n=0;n<100;n++){
        var x=parseInt(Math.random()*canvas.width);
        var y=parseInt(Math.random()*canvas.height);
        var radius=Math.random();
        var opacity = Math.random();
        ctx.arc(x,y,radius,0,Math.PI*2,false);
        ctx.closePath();
        ctx.fillStyle="rgba(150,150,150," + opacity + ")";
        ctx.fill();
    }
}

function init() {
    bg = new Scene('static-canvas');
    scatterStars(bg);
    scene = new Scene('game-canvas');
    planet = new Planet(planets[0]);
    planet.setImgAngle(222);
    timer = new Timer();
    scene.start();
}

function update() {
    
    if(timer.getElapsedTime() > elapsedTimeSpaceing) {
        stars.push(new ShootingStar());
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