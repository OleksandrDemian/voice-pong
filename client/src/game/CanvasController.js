class CanvasController {

    constructor(){
        this.ctx = null;
        this.h = 0;
        this.w = 0;

        this.cW = 0;
        this.cH = 0;
    }

    setCanvas (canvas) {
        this.ctx = canvas.getContext("2d");
        this.w = canvas.width;
        this.h = canvas.height;

        this.cW = canvas.width/2;
        this.cH = canvas.height/2;
    }

    drawRect ({ x, y, w, h, color }) {
        const hw = w/2;
        const hh = h/2;

        this.ctx.fillStyle = color;
        this.ctx.fillRect(this.cW + (x - hw), this.cH - (y + hh), w, h);
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