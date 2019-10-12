import Cell from '../Cell';

import markImage from './mark.png';

class Mark extends Cell {
    constructor(x, y) {
        super(markImage, x, y);
    }
}

export default Mark;
