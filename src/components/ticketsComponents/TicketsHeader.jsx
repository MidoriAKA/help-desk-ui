import React from 'react'
import { useTicketsDatas } from './contexts/TicketsDatas';

function TicketsHeader() {

    const sortIcon = new Map([
        ["up", '<span class="material-symbols-outlined">expand_less</span>'],
        ["down", '<span class="material-symbols-outlined">expand_more</span>']
    ]);

    const [sortDirection, setSortDirection] = useState("up");
    const [sortType, setSortType] = useState("id");

    return (
        <>
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
        </>
    )
}

export default TicketsHeader