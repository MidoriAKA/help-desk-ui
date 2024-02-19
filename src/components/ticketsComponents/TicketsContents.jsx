const TicketsContents = ({ticketDates}) => {
    const priorityText = new Map([
        ["Baixa", "low"],
        ["Média", "medium"],
        ["Alta", "high"]
    ]);
    return (
        <>
            <td id={ticketDates._id} className="-id-text">
            <div className="priority-emoji">
                        {ticketDates.info.priority === "Média" ? "🔥" :
                        ticketDates.info.priority === "Alta" ? "🚨" :
                        ""}
                    </div>
                <span className="hash-stroke">#</span> {ticketDates._id}
            </td>
            <td
                id={`${ticketDates._id}_priority`}
                className={`priority-text-${priorityText.get(ticketDates.info.priority)}`}>
                {ticketDates.info.priority}
            </td>
            <td id={`${ticketDates._id}_info`}>
                <span class="material-symbols-outlined">info</span>
                <div className="info-div">
                    <div className="info-title">{ticketDates.info.title}</div>
                    <div className="info-info">{ticketDates.info.clientName} - {ticketDates.info.creation}</div>
                </div>
            </td>
            <td id={`${ticketDates._id}_assignedTech`}>
                {ticketDates.info.assignedTech}
            </td>
            <td id={`${ticketDates._id}_assignedGroup`}>
                {ticketDates.info.assignedGroup}
            </td>
        </>
    )
}
export default TicketsContents;