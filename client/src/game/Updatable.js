class Updatable {

    constructor({ tag = "go", name="Go" }){
        this.tag = tag;
        this.name = name;
    }

    start(){}
    update(delta){}
    draw(canvasController){}

}

export default Updatable;