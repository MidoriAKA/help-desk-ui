import { useState, useContext } from 'react';
import { TicketsContents } from './index';
import { TicketsDatasContext } from './contexts/TicketsDatas';


const Tickets = ({ ticketDates }) => {

    const [currentPage, setCurrentPage] = useState(1);
    const ticketsPerPage = 10;
    const totalPages = Math.ceil(ticketDates.length / ticketsPerPage);

    // Calculate the index range for the current page
    const startIndex = (currentPage - 1) * ticketsPerPage;
    const endIndex = startIndex + ticketsPerPage;

    // Get the tickets to display on the current page
    const currentTickets = ticketDates.slice(startIndex, endIndex);
    
    const { rowTicketsDatas, sortedID, sortedStartData, sortedUpdate, sortedPriority } = useContext(TicketsDatasContext);

    return (
        // <TicketsDatasContext.Provider>
        <div id="ticketsRender">
            <span>
                {/* {rowTicketsDatas} */}
            </span>
            <table className="tickets">
                <thead>
                    <tr>
                        <th><span>ID</span></th>
                        <th><span>Status
                            <br/>Atualização</span>
                        </th>
                        <th><span>Informação
                            <br/>Data</span>
                        </th>
                        <th><span>Atribuído
                            <br/>Técnico</span>
                        </th>
                        <th><span><br/>Grupo</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {currentTickets.map((_, index) => (
                        <tr key={index}
                            id={currentTickets[index].info.status === 'Fechado' ? 'closedTicket' : ''}
                            className={currentTickets[index].info.priority === 'Média' ? 'ticket-tr p-mid' :
                                        currentTickets[index].info.priority ==='Alta' ? 'ticket-tr p-high' :
                                        'ticket-tr'} >
                            <TicketsContents
                                ticketDates={currentTickets[index]}
                            />
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Pagination */}
            <div className="pagination">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentPage(index + 1)}
                        className={currentPage === index + 1 ? 'active' : ''}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
        // </TicketsDatasContext.Provider>
    );
}

export default Tickets;
