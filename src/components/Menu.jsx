import { SubMenuTickets, SubMenuBookMark } from './index';
const Menu = ({name, icon, tempHandle }) => {

    const icons = {
        tickets: 'confirmation_number',
        bookmark: 'bookmark',
    }

    const menuName = `${name.toLowerCase()}-menu`;

    const menuTempHandle = (newFilter) => {
        tempHandle(newFilter);
    }

    return (
        <div id={menuName} className='menu-comp'>
            <div className="menu-header">
                <span className="menu-icon material-symbols-outlined">{icons[icon]}</span>
                <h2>{name}</h2>
            </div>

            {name === 'Tickets' ? (
                <SubMenuTickets handleMenuFilter={menuTempHandle} />
            ) : name === 'BookMark' ? (
                <SubMenuBookMark />
            ) : null}

        </div>
    );
};

export default Menu;
// Path: src/components/subMenu/Tickets.jsx