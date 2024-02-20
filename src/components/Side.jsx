import { useState } from 'react';
import { Menu, Logo } from './index';
const Side = () => {

    return (
        <div className="side-grid">
            <Logo />
            <div className='menu'>
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
// Path: src/components/subMenu/Tickets.jsx
