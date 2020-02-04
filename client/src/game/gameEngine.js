import CanvasController from "./CanvasController";
import GameContext from "./GameContext";

// const collisionData = (target) => {
//     return {
//         target
//     }
// }

class GameEngine {

    constructor(){
        this.canvasController = null;
        this.updatables = [];
        this.lastFrame = 0;
    }

    setCanvas (canvas) {
        this.canvasController = new CanvasController();
        this.canvasController.setCanvas(canvas);
    }

    addUpdatable(u){
        this.updatables.push(u);
    }

    update(){
        const time = new Date().getTime();
        const delta = (time - this.lastFrame)/1000;
        this.lastFrame = time;

        this.updatables.forEach(u => {
            u.update(delta);
        });

        this.canvasController.onRenderStart();

        this.updatables.forEach(u => {
            u.draw(this.canvasController);
        });

        requestAnimationFrame(() => {
            this.update();
        });
    }

    start(){
        const gc = new GameContext({ engine: this });
        this.updatables.forEach(u => {
            u.start({
                gameContext: gc
            });
        });

        this.lastFrame = new Date().getTime();
        this.update();
    }
}

export default GameEngine;