import { useState } from 'react';
import { Menu, Logo } from './index';
const Side = ({ tempHandle }) => {

    // const [temp, setTemp] = useState("");
    // const handleValueChange = (newFilter) => {
    //     setTemp(newFilter);
    //     props.tempHandleMenuFilter(newFilter);
    // };

    const sideTempHandle = (newFilter) => {
        tempHandle(newFilter);
    }

    return (
        <div className="side-grid">
            <Logo />
            <div className='menu'>
                <Menu tempHandle = {sideTempHandle}
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