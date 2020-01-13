import React from 'react';

import './Navigation.scss';
import Avatar from './avatar/Avatar';
import Menu from './menu/Menu';
import Author from './author/Author';

export default class Navigation extends React.Component {



    constructor() {
        super();
    }

    render() {


        return(
            <div className="menu">
                <Avatar />
                <Author />
                <Menu />
            </div>
        )
    }
}

