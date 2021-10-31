/* Importaciones propias */
const TicketList = require('./ticket-list');

class Sockets {
    constructor(io) {
        this.io = io;

        /* Instancia de TicketList */
        this.ticketList = new TicketList();

        this.socketEvents();
    }

    socketEvents() {
        /* On connection */
        this.io.on('connection', (socket) => {
            console.log('Cliente conectado', socket.id);

            /* Escuchar evento para generar nuevo ticket */
            /* El segundo argumento recibe la data y el callback; en este caso no recibimos ni una data pero si un callback que respondemos con el ticket creado */
            socket.on('req-ticket', (data, callback) => {
                const newTicket = this.ticketList.createTicket();

                /* El callback emite solo al cliente que lo llamó */
                callback(newTicket);
            });
        });
    }
}

module.exports = Sockets;