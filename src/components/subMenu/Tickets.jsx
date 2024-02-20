import React, { useContext } from "react";
import { SelectMenuContext } from "../contexts/SelectMenuContext";
//コンテキストをインポート

const SubMenuTickets = () => {
    const { sendClicked, selectedMenu } = useContext(SelectMenuContext);
    //useContextを使ってコンテキストを呼び出す

    const menu = {
        all: {  text: "Todos", en: "All" },
        closed: { text: "Fechado", en: "Closed" },
        notAssigned: { text: "Nao pendente", en: "Not assigned"  },
        pinned: { text: "Salvo", en: "Pinned" },
    };

    return (
        <SelectMenuContext.Provider value={{ selectedMenu, sendClicked }}>
        <ul className='sub-menu'>
            {Object.keys(menu).map((key, index) => (
                <li
                    key={index}
                    className={selectedMenu === key ? "menu-active" : ""}
                    onClick={() => {sendClicked(key)}}>
                    {menu[key].text}
                </li>
            ))}
        </ul>
        </SelectMenuContext.Provider>
    );
};

export default SubMenuTickets;
// Path: src/components/subMenu/BookMark.jsx
