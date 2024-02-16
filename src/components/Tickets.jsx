import { TicketsContents } from './index';
const Tickets = ({ticketDates}) => {
    return (
        <div id="ticketsRender">
            <table className="tickets">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Prioridade</th>
                        <th>Informação</th>
                    </tr>
                </thead>
                <tbody>
                {ticketDates.length > 0 && ticketDates.map((_, index) => (
                <tr key={index} className='ticket-tr'>
                    <TicketsContents
                        ticketDates={ticketDates[index]}
                    />
                </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default Tickets;
