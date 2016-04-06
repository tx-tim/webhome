var scene;
var critter;


// function Critter(scene) {
//     var height, width, source = "./assets/js/6/critter.gif";
//     var tCritter = new Sprite(game, "./assets/js/6/critter.gif", 30, 30);
//     tCritter.setSpeed(0);
//     return tCritter;
// }

// function Critter() {
//     var src = "./assets/js/6/critter.gif";
//     Sprite.call(this, game, src, 30, 30);
//     this.setSpeed(0);
// }

function Fly() {
    var src = "./assets/js/7/fly.png";
    Sprite.call(this, scene, src, 15, 15);
    this.setSpeed(12);
    this.wriggle = function() {
        //change direction by a random amount
        var newDir = Math.random() * 90-45;

        this.changeAngleBy(newDir);
    };
}

function Frog() {
    var src = "./assets/js/7/frog.png";
    var maxSpeed = 10;
    var minSpeed = 0;
    Sprite.call(this, scene, src, 30, 30);
    this.setSpeed(0);

    this.checkKeys = function() {
        //K_LEFT = 37; K_RIGHT = 39; K_UP = 38;K_DOWN = 40; K_SPACE = 32;
        if (keysDown[K_LEFT]) {
            this.changeAngleBy(-15);
        }
        if (keysDown[K_RIGHT]) {
            this.changeAngleBy(15);
        }
        if (keysDown[K_UP]) {
            if((this.speed + 1) <= maxSpeed) {
                this.changeSpeedBy(1);

                this.calcVector();


            }
        }
        if (keysDown[K_DOWN]) {
            if((this.speed - 1) >= minSpeed) {
                this.changeSpeedBy(-1);
            }
        }
    };
}

function init() {
    scene = new Scene('game-canvas');
    scene.setBG("green");

    fly = new Fly();
    frog = new Frog();
    scene.start();
}

function update() {
    scene.clear();
    fly.wriggle();
    fly.update();

    frog.checkKeys();
    frog.update();
}


window.onload = function() {
    init();
};