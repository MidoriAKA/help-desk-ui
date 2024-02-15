import '../css/Side.css';
import { Menu, Logo } from './index';
const Side = () => {
    return (
        <div className="grid">
            <Logo />
            <div>
                <Menu 
                    name={'Tickets'}
                    icon={'tickets'}
                />
                <Menu 
                    name={'BookMark'}
                    icon={'bookmark'}
                />
            </div>
        </div>
    );
};

export default Side;