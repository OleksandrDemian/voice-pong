import Updatable from "../game/Updatable";

export const PLAYER_H = 40;
export const PLAYER_W = 5;

export const MULT_Y = 3;

const MAX_SOUND = 70;
export const SOUND_OFFSET = 35;

export const lerp = (a, b, f) => {
    return a + f * (b - a);
}

class Player extends Updatable {

    constructor({ name, x }){
        super({ name, tag: "player" });

        this.x = x;
        this.y = 0;
        this.targetY = 0;
    }

    setY(y){
        this.targetY = y;
    }

    update(delta){
        this.y = lerp(this.y, this.targetY - SOUND_OFFSET, delta);
    }

    draw(canvas){
        canvas.drawRect({
            x: this.x,
            y: this.y * MULT_Y,
            w: PLAYER_W,
            h: PLAYER_H,
            color: "black"
        });
    }

}

export default Player;