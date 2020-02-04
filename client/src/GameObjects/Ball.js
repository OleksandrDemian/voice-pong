import Updatable from "../game/Updatable";
import { PLAYER_W, PLAYER_H } from "./Player";

export const BALL_W = 10;
export const BALL_H = 10;

export const BALL_SPEED = 200;
export const BALL_ACCELERATION = 50;

const HW = PLAYER_W/2;
const HH = PLAYER_H/2;

const checkPlayerDelta = ({ ball, player }) => {
    let deltaX = ball.x - player.x;
    let deltaY = ball.y - player.y;

    if(Math.abs(deltaX) < HW && Math.abs(deltaY) < HH){
        return deltaY;
    }

    return null;
}

class Ball extends Updatable {

    constructor({ name, startDirection }){
        super({ name, tag: "ball" });
        this.direction = startDirection;
        this.acceleration = 0;
        this.players = [];

        this.x = 0;
        this.y = 0;
    }

    start({ gameContext }){
        this.players = gameContext.findByTag("player");
    }

    update(delta) {
        const colAcceleration = this.checkCollision();
        if(colAcceleration != null){
            this.direction *= -1;
            this.acceleration = colAcceleration/5;
        } else if(Math.abs(this.x) > 200){
            this.direction *= -1;
        }

        if(Math.abs(this.y) > 100){
            this.acceleration *= -1;
        }

        this.x += (this.direction * delta * BALL_SPEED);
        this.y += (this.acceleration * delta * BALL_ACCELERATION);
    }

    checkCollision(){
        for(let i = 0; i < this.players.length; i++){
            let pd = checkPlayerDelta({ player: this.players[i], ball: this });
            if(pd != null){
                return pd;
            }
        }

        return null;
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