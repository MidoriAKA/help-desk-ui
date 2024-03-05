import { useState } from 'react';
import { TicketsContents } from './index';
import { useTicketsDatas } from './contexts/TicketsDatas';


const Tickets = () => {
    const { currentTicketsDatas, sortTickets, setHide,
            sortDirectionState, sortTypeState } = useTicketsDatas();


    const [currentPage, setCurrentPage] = useState(1);
    const ticketsPerPage = 10;
    const totalPages = Math.ceil(currentTicketsDatas.length / ticketsPerPage);

    // Calculate the index range for the current page
    const startIndex = (currentPage - 1) * ticketsPerPage;
    const endIndex = startIndex + ticketsPerPage;

    // Get the tickets to display on the current page
    const currentTickets = currentTicketsDatas.slice(startIndex, endIndex);
    

    return (
        <div id="ticketsRender">
            
            <table className="tickets">
                <thead>
                    <tr>

                        <th onClick={() => sortTickets("id")}><span>ID</span></th>
                        <th onClick={() => sortTickets("update")}><span>Status
                            <br/>Atualização</span>
                        </th>
                        <th onClick={() => sortTickets("update")}><span>Informação
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
    );
}

export default Tickets;
// Path: src/components/Tickets.jsx
