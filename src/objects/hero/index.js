import BaseObject from "../BaseObject";

import heroImage from './hero.png';

class Hero extends BaseObject {
    constructor(x, y) {
        super(heroImage, x, y, 100);
    }
}

export default Hero;
