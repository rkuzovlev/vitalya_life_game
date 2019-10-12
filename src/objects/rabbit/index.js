import BaseObject from '../BaseObject';

import rabbitImage from './rabbit.png';

class Rabbit extends BaseObject {
    constructor(x, y) {
        super(rabbitImage, x, y);
    }
}

export default Rabbit;
