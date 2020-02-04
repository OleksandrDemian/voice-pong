import Updatable from "../game/Updatable";

export const BALL_W = 10;
export const BALL_H = 10;

export const BALL_SPEED = 200;

class Ball extends Updatable {

    constructor({ name, startDirection }){
        super({ name, tag: "ball" });
        this.direction = startDirection;

        this.x = 200;
        this.y = 0;
    }

    update(delta) {
        this.x += (this.direction * delta * BALL_SPEED);
        console.log(this);

        if(Math.abs(this.x) > 200){
            this.direction *= -1;
        }
    }

    draw(canvas){
        canvas.drawRect({
            x: this.x,
            y: this.y,
            w: BALL_W,
            h: BALL_H,
            color: "red"
        });
    }

}

export default Ball;