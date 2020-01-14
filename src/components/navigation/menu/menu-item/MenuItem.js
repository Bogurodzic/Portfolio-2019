import React from 'react';

import './MenuItem.scss';

function MenuItem(props) {

    return (
        <div className={"menu-item " + (props.isActive ? "menu-item--active" : "")}>
            {props.isActive}
            <div className="menu-item-icon">
                {props.icon}
            </div>
            <h3 className="menu-item__name">
                {props.name}
            </h3>
        </div>
    )
}
 

export default MenuItem;