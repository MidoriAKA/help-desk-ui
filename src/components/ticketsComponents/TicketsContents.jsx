const TicketsContents = ({ticketDates}) => {
    return (
        <>
            <td id={ticketDates._id}>
                # {ticketDates._id}
            </td>
            <td id={`${ticketDates._id}_priority`}>
                {ticketDates.info.priority}
                    <div>
                        {ticketDates.info.priority === "Baixa" ? "😪" :
                        ticketDates.info.priority === "Média" ? "🔥" :
                        "🚨"}
                    </div>
            </td>
            <td id={`${ticketDates._id}_info`}>
                <div className="info-title">{ticketDates.info.title}</div>
                <div className="info-info">{ticketDates.info.clientName} - {ticketDates.info.creation}</div>
            </td>
        </>
    )
}
export default TicketsContents;