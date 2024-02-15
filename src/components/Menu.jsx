import '../css/Side.css';
import {SubMenu} from './index';
const Menu = ({name, icon, number}) => {
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
            <SubMenu
                number={number}
            />
        </div>
    );
};

export default Menu;