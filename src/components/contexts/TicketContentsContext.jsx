import React, { createContext, useContext, useState } from "react";

const TicketContentsContext = createContext();
export const useTicketContents = () => {
    return useContext(TicketContentsContext);
};

export const TicketContentsProvider = ({ children }) => {
    
    return (
        <TicketContentsContext.Provider value={{}}>
            {children}
        </TicketContentsContext.Provider>
    );
};