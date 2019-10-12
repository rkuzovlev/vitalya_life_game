import BaseScene from "../BaseScene";

export default class WonScene extends BaseScene {
    load(){
        super.load();

        console.log("You won");
    }

    unload(){
        super.unload();
    }
}
