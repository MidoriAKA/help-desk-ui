import { createContext, useState } from "react";
import importedDatas from '../../dummy/dummy_4.json';
export const TicketsDatasContext = createContext();

const TicketsDatasProvider = ({ children }) => {

    let rowTicketsDatas = importedDatas;

    const sortedID = (sortDirection) => {
        if(sortDirection === "up"){
            rowTicketsDatas.sort((a, b) => {
                if (a._id < b._id) { return -1; }
                else{ return 1; }
            });
        } else {
            rowTicketsDatas.sort((a, b) => {
                if (a._id < b._id) { return 1; }
                else{ return -1; }
            });
        }
    };
    const sortedStartData = (sortDirection) => {
        if(sortDirection === "up"){
            rowTicketsDatas.sort((a, b) => {
                if (a.info.startData.replace(/[^0-9]/g, '') < b.info.startData.replace(/[^0-9]/g, '')) { return -1; }
                else{ return 1; }
            });
        } else {
            rowTicketsDatas.sort((a, b) => {
                if (a.info.startData.replace(/[^0-9]/g, '') < b.info.startData.replace(/[^0-9]/g, '')) { return 1; }
                else{ return -1; }
            });
        }
    };
    const sortedUpdate = (sortDirection) => {
        if(sortDirection === "up"){
            rowTicketsDatas.sort((a, b) => {
                if (a.info.update.replace(/[^0-9]/g, '') < b.info.update.replace(/[^0-9]/g, '')) { return -1; }
                else{ return 1; }
            });
        } else {
            rowTicketsDatas.sort((a, b) => {
                if (a.info.update.replace(/[^0-9]/g, '') < b.info.update.replace(/[^0-9]/g, '')) { return 1; }
                else{ return -1; }
            });
        }
    };
    const sortedPriority = (sorteDirection) => {
        const priorityMap = new Map([
            ["Baixa", 1],
            ["Média", 2],
            ["Alta", 3]
        ]);
        if(sorteDirection === "up"){
            rowTicketsDatas.sort((a, b) => {
                if (priorityMap.get(a.info.priority) < priorityMap.get(b.info.priority)) { return -1; }
                else{ return 1; }
            });
        } else {
            rowTicketsDatas.sort((a, b) => {
                if (priorityMap.get(a.info.priority) < priorityMap.get(b.info.priority)) { return 1; }
                else{ return -1; }
            });
        }
    };

    return (
        <TicketsDatasProvider.Provider value={{ rowTicketsDatas, sortedID, sortedStartData, sortedUpdate, sortedPriority }}>
            {children}
        </TicketsDatasProvider.Provider>
    );
}
// Path: src/components/contexts/TicketsDatas.jsx
