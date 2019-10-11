import Cell from "../Cell";

import heroImage from './hero.png';

class Hero extends Cell {
    constructor(x, y) {
        super(heroImage, x, y);
    }
}

export default Hero;
