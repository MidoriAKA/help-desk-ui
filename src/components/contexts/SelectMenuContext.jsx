import { createContext, useState } from 'react';
export const SelectMenuContext = createContext();
//コンテキストを作成 & エクスポート

const SelectMenuProvider = ({ children }) => {

    const [selectedMenu, setSelectedMenu] = useState("all");
    
    const sendClicked = (clicked) => {
        setSelectedMenu(clicked);
    };

    return (
        <SelectMenuProvider.Provider value={{ selectedMenu, sendClicked }}>
            {children}
        </SelectMenuProvider.Provider>
    );
}
// Path: src/components/contexts/SelectMenuContext.jsx
