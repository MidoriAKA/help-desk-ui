import React from 'react';

const SubMenu = ({ number }) => {
    const divs = Array.from({ length: number }, (_, index) => (
        <div key={index}>Div {index + 1}</div>
    ));

    return <div>{divs}</div>;
};

export default SubMenu;
