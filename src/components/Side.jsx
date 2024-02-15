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
                    number={3}
                />
                <Menu 
                    name={'BookMark'}
                    icon={'bookmark'}
                    number={5}
                />
            </div>
        </div>
    );
};

export default Side;