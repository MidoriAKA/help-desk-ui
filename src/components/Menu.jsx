import '../css/Side.css';
import { SubMenuTickets, SubMenuBookMark } from './index';
const Menu = ({name, icon }) => {
    const icons = {
        tickets: 'confirmation_number',
        bookmark: 'bookmark',
    }

    return (
        <div className="menu">
            <div className="menu-header">
                <span className="menu-icon material-symbols-outlined">{icons[icon]}</span>
                <h2>{name}</h2>
            </div>

            {name === 'Tickets' ? (
                <SubMenuTickets />
            ) : name === 'BookMark' ? (
                <SubMenuBookMark />
            ) : null}

        </div>
    );
};

export default Menu;