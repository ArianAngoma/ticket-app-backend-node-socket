const {v4: uuidv4} = require('uuid');

class Ticket {
    constructor(number) {
        this.id = uuidv4();
        this.numbre = number;
        this.desk = null;
        this.agent = null;
    }
}

module.exports = Ticket;
