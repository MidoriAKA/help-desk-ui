import React, { createContext, useContext, useState } from "react";
import rowTicketsDatas from '../../dummy/dummy_4.json';

const TicketsDatasContext = createContext();
export const useTicketsDatas = () => {
    return useContext(TicketsDatasContext);
};

export const TicketsDatasProvider = ({ children }) => {

    const [currentTicketsDatas, setCurrentTicketsDatas] = useState(rowTicketsDatas);
    let tempTicketsDatas = rowTicketsDatas;
    const [sortDirectionState, setSortDirection] = useState("up");
    const [sortTypeState, setSortType] = useState("id");
    const [isHiddenClosed, setIsHiddenClosed] = useState(false);

    const sortID = (sortDirection, argTicketsDatas) => {
        if(sortDirection === "up"){
            argTicketsDatas.sort((a, b) => {
                if (a._id < b._id) { return -1; }
                else{ return 1; }
            });
        } else {
            argTicketsDatas.sort((a, b) => {
                if (a._id < b._id) { return 1; }
                else{ return -1; }
            });
        }
        return argTicketsDatas;
    };
    const sortStartData = (sortDirection, argTicketsDatas) => {
        if(sortDirection === "up"){
            argTicketsDatas.sort((a, b) => {
                if (a.info.creation.replace(/[^0-9]/g, '') < b.info.creation.replace(/[^0-9]/g, '')) { return -1; }
                else{ return 1; }
            });
        } else {
            argTicketsDatas.sort((a, b) => {
                if (a.info.creation.replace(/[^0-9]/g, '') < b.info.creation.replace(/[^0-9]/g, '')) { return 1; }
                else{ return -1; }
            });
        }
        return argTicketsDatas;
    };
    const sortUpdate = (sortDirection, argTicketsDatas) => {
        if(sortDirection === "up"){
            argTicketsDatas.sort((a, b) => {
                if (a.info.update.replace(/[^0-9]/g, '') < b.info.update.replace(/[^0-9]/g, '')) { return -1; }
                else{ return 1; }
            });
        } else {
            argTicketsDatas.sort((a, b) => {
                if (a.info.update.replace(/[^0-9]/g, '') < b.info.update.replace(/[^0-9]/g, '')) { return 1; }
                else{ return -1; }
            });
        }
        return argTicketsDatas;
    };
    const sortPriority = (sorteDirection, argTicketsDatas) => {
        const priorityMap = new Map([
            ["Baixa", 1],
            ["Média", 2],
            ["Alta", 3]
        ]);
        if(sorteDirection === "up"){
            argTicketsDatas.sort((a, b) => {
                if (priorityMap.get(a.info.priority) < priorityMap.get(b.info.priority)) { return -1; }
                else{ return 1; }
            });
        } else {
            argTicketsDatas.sort((a, b) => {
                if (priorityMap.get(a.info.priority) < priorityMap.get(b.info.priority)) { return 1; }
                else{ return -1; }
            });
        }
        return argTicketsDatas;
    };

    const hidenClosed = () => {
        const hidenClosedTickets = rowTicketsDatas.filter((ticket) => ticket.info.status !== "Fechado");
        return hidenClosedTickets;
    }
    const setHide = (value) => {
        if (value) {
            setIsHiddenClosed(true);
            tempTicketsDatas = currentTicketsDatas
            setCurrentTicketsDatas(hidenClosed());
        } else {
            setIsHiddenClosed(false);
            setCurrentTicketsDatas(tempTicketsDatas);
        }
    }

    const sortTickets = (sortType) => {
        setSortType(sortType);
        if (sortDirectionState === "up" && sortType === sortTypeState) {
            setSortDirection("down");
        } else {
            setSortDirection("up");
        }
        switch(sortType){
            case "id":
                setCurrentTicketsDatas(sortID(sortDirectionState, currentTicketsDatas));
                break;
            case "startData":
                setCurrentTicketsDatas(sortStartData(sortDirectionState, currentTicketsDatas));
                break;
            case "update":
                setCurrentTicketsDatas(sortUpdate(sortDirectionState, currentTicketsDatas));
                break;
            case "priority":
                setCurrentTicketsDatas(sortPriority(sortDirectionState, currentTicketsDatas));
                break;
        }
    };

    return (
        <TicketsDatasContext.Provider value={{
                currentTicketsDatas,
                sortTickets,
                sortDirectionState,
                sortTypeState,
                setHide
            }}>
            {children}
        </TicketsDatasContext.Provider>
    );
}
// Path: src/components/contexts/TicketsDatas.jsx
