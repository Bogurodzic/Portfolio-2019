import React from 'react';

function MenuItem(props) {

    return (
        <div>
            <h2>
                {props.name}
            </h2>
            <div>
                {props.icon}
            </div>
        </div>
    )
}
 

export default MenuItem;