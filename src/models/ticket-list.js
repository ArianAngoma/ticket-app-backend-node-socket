/* Importaciones propias */
const Ticket = require('./ticket');

class TicketList {
    constructor() {
        this.lastNumber = 0;

        this.pending = [];
        this.assigned = [];
    }

    get nextNumber() {
        return this.lastNumber++;
    }

    /* Regresa los 3 ticketes de las tarjetas y 10 del historial */
    get last13() {
        return this.assigned.slice(0, 13);
    }

    createTicket() {
        const newTicket = new Ticket(this.nextNumber);
        this.pending.push(newTicket);
        return newTicket;
    }

    /* Asignar ticket a un agente y escritorio */
    assignTicket(agent, desk) {
        /* Validar si hay tickets en pendientes */
        if (this.pending === 0) return null;

        /* Remover el primer ticket de pendientes */
        const nextTicket = this.pending.shift();

        /* Agregar agente y escritorio al ticket removido */
        nextTicket.agent = agent;
        nextTicket.desk = desk;

        /* Agregar el ticket al comienzo asignados */
        this.assigned.unshift(nextTicket);

        return nextTicket;
    }
}

module.exports = TicketList;