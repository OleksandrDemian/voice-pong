class GameContext {

    constructor({ engine }){
        this.engine = engine;
    }

    findOneByName(name){
        const u = this.engine.updatables;
        for(let i = 0; i < u.length; i++){
            if(u[i].name === name){
                return u[i];
            }
        }
    }

    findOneByTag(tag){
        const u = this.engine.updatables;
        for(let i = 0; i < u.length; i++){
            if(u[i].tag === tag){
                return u[i];
            }
        }
    }

    findByTag(tag){
        const u = this.engine.updatables;
        const arr = [];
        
        for(let i = 0; i < u.length; i++){
            if(u[i].tag === tag){
                arr.push(u[i]);
            }
        }

        return arr;
    }

}

export default GameContext;