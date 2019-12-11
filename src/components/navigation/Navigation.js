import React from 'react';

import './Navigation.scss';
import Avatar from './avatar/Avatar';
import Menu from './menu/Menu';

export default class Navigation extends React.Component {



    constructor() {
        super();
    }

    render() {


        return(
            <div className="menu">
                <Avatar />
                <Menu />
            </div>
        )
    }
}

