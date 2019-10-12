export default class BaseScene {
    constructor(app){
        this.app = app;
    }

    load(){

    }

    unload(){
        this.app = null;
    }
}
