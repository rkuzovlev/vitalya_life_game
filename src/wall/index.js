import Cell from '../Cell';

import wallImage from './wall.png';

class Wall extends Cell {
    constructor(x, y) {
        super(wallImage, x, y);
    }
}

export default Wall;
