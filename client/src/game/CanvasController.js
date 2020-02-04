class CanvasController {

    constructor(){
        this.ctx = null;
        this.h = 0;
        this.w = 0;
    }

    setCanvas (canvas) {
        this.ctx = canvas.getContext("2d");
        this.w = canvas.width;
        this.h = canvas.height;
    }

    drawRect ({ x, y, w, h, color }) {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x, y, w, h);
    }

    clearCanvas (){
        this.ctx.fillStyle = "white";
        this.ctx.fillRect(0, 0, this.w, this.h);
    }

    onRenderStart(){
        this.clearCanvas();
    }

}

export default CanvasController;