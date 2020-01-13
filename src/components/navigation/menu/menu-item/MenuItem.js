import React from 'react';

import './MenuItem.scss';

function MenuItem(props) {

    return (
        <div>
            <h2 className="menu-item">
                {props.name}
            </h2>
            <div>
                {props.icon}
            </div>
        </div>
    )
}
 

export default MenuItem;