import { createContext, useState } from 'react';
export const MenuContext = createContext();

const MenuProvider = ({ children, selectedMenu }) => {
    
        const sendClicked = (newFilter) => {
            selectedMenu(newFilter);
        };
    
        return (
            <MenuContext.Provider value={{ selectedMenu, sendClicked }}>
                {children}
            </MenuContext.Provider>
        );
    }
// Path: src/components/context/MenuContext.jsx
