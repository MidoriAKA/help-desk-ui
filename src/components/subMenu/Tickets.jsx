import { useContext } from "react";
import { MenuContext } from "../../App";
const SubMenuTickets = ({handleMenuFilter}) => {

    const sendClicked = (newFilter) => () => {
        handleMenuFilter(newFilter);
    }

    return (
        <ul className='sub-menu'>
            <li onClick={sendClicked('all')}>Todos</li>
            <li onClick={sendClicked('not assigned')}>Nao pendente</li>
            <li onClick={sendClicked('pending')}>Pendente</li>
            <li onClick={sendClicked('pinned')}>Pinned</li>
        </ul>
    );
};

export default SubMenuTickets;
