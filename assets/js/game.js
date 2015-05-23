
var scene;
var ball;

function init() {
    scene = new Scene('game-canvas');
    
    // ball
    ball = new Sprite(scene, "./assets/images/5/redBall.png", 30, 30);
    ball.setMoveAngle(270);
    ball.setSpeed(3);

    // car
    car = new Sprite(scene, "./assets/images/5/car.png", 50, 30);
    car.setAngle(270);
    car.setSpeed(0);

    scene.start();
}

function update() {
    scene.clear();
    var i;
    var honorKeys = true;
    var temp;
    //check keys
    if(honorKeys) {
        if(keysDown[K_LEFT]) {
            car.changeAngleBy(-5);
        }
        if(keysDown[K_RIGHT]) {
            car.changeAngleBy(5);
        }
        if(keysDown[K_UP]) {
            if(car.speed <= 10) car.changeSpeedBy(1);
        }
        if(keysDown[K_DOWN]) {
            if(car.speed >= -10) car.changeSpeedBy(-2);
        }
        if(!keysDown[K_DOWN] && !keysDown[K_UP]){
             if(car.speed > 0) car.changeSpeedBy(-1);
             if(car.speed < 0) car.changeSpeedBy(+1);
        }
    }

    //check position
    if((car.x < 8)) {
        honorKeys = false;
        temp = car.imgAngle;
        car.setPosition(15 ,car.y);
        i = 100;
        while (i>0) {
            honorKeys = false;
            if (car.speed > 10) car.changeSpeedBy(-1);
            car.changeAngleBy(-30);
            i--;
        }
    }
    if((car.x > scene.width - 8)) {
        honorKeys = false;
        temp = car.imgAngle;
        car.setPosition(scene.width-15 ,car.y);
        i = 100;
        while (i>0) {
            honorKeys = false;
            if (car.speed > 10) car.changeSpeedBy(-1);
            car.changeAngleBy(-30);
            i--;
        }
    }

    //check position
    // if(car.x < 8) {
    //     car.setPosition(9,car.y);
    //     car.setSpeed(0);
    //     car.setAngle(0);
    // }

    car.update();
    ball.update();
}


window.onload = function() {
    init();
};