import { SubMenuTickets, SubMenuBookMark } from './index';
const Menu = ({name, icon }) => {
    const icons = {
        tickets: 'confirmation_number',
        bookmark: 'bookmark',
    }

    const menuName = `${name.toLowerCase()}-menu`;

    return (
        <div id={menuName} className='menu-comp'>
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