import React, { useContext } from "react";
import { MenuContext } from "../contexts/MenuContext";
const SubMenuTickets = ({handleMenuFilter}) => {
    const { sendClicked } = useContext(MenuContext);
    return (
        <ul className='sub-menu'>
            <li onClick={() => {sendClicked('all')}}>Todos</li>
            <li onClick={() => {sendClicked('not assigned')}}>Nao pendente</li>
            <li onClick={() => {sendClicked('pending')}}>Pendente</li>
            <li onClick={() => {sendClicked('pinned')}}>Pinned</li>
        </ul>
    );
};

export default SubMenuTickets;
// Path: src/components/subMenu/BookMark.jsx
