const TicketsContents = ({ticketDates}) => {
    const ticketInfoMap = new Map([
        ["Baixa", "low"],
        ["Média", "medium"],
        ["Alta", "high"],
        ["Aberto", "open"],
        ["Em andamento", "in-progress"],
        ["Fechado", "closed"]
    ]);
    return (
        <>
            <td id={ticketDates._id} className="-id-text">
                <div id={`${ticketDates._id}_priority`}
                    className={`priority p-text-${ticketInfoMap.get(ticketDates.info.priority)}`}>
                    {ticketDates.info.priority}
                </div>
                <div className="priority-emoji">
                        {ticketDates.info.priority === "Média" ? "🔥" :
                        ticketDates.info.priority === "Alta" ? "🚨" :
                        ""}
                </div>
                <span className="hash-stroke">#</span> {ticketDates._id}
            </td>
            <td
                id={`${ticketDates._id}_status`}
                className={`status-text-${ticketInfoMap.get(ticketDates.info.status)}`}>
                {ticketDates.info.status}
            </td>
            <td id={`${ticketDates._id}_info`}>
                <span class="material-symbols-outlined">feed</span>
                <div className="info-div">
                    <div className="info-title">{ticketDates.info.title}</div>
                    <div className="info-info">{ticketDates.info.clientName} - {ticketDates.info.creation}</div>
                </div>
            </td>
            <td id={`${ticketDates._id}_assignedTech`}
                className="assignedTech">
                {ticketDates.info.assignedTech.length > 1 ? (
                    <>
                        {ticketDates.info.assignedTech[0]}
                        <div  className="assignedTech-other">+{ticketDates.info.assignedTech.length - 1}
                            <div className="hide-tech">
                                {ticketDates.info.assignedTech.map((tech, index) => (
                                    <div className="hide-tech-person">
                                        <span class="material-symbols-outlined">account_circle</span>
                                        <span key={index}>{tech}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        {ticketDates.info.assignedTech}
                    </>
                )}
            </td>
            <td id={`${ticketDates._id}_assignedGroup`}>
                {ticketDates.info.assignedGroup}
            </td>
        </>
    )
}
export default TicketsContents;
// Path: src/components/ticketsComponents/TicketsContents.jsx
