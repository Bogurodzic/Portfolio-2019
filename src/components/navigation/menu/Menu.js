import React from 'react';

import './Menu.scss';

import MenuItem from './menu-item/MenuItem';

export default class Menu extends React.Component {

    menuItems = [
        {
            name: 'home',
            icon: 'home'
        },
        {
            name: 'skills',
            icon: 'skills'
        },
        {
            name: 'resume',
            icon: 'resume'
        },
        {
            name: 'contact',
            icon: 'contact'
        }
    ]

    constructor() {
        super();
    }

    render() {
        const menuItems = this.menuItems.map((item, key) => {
            return <MenuItem name={item.name} icon={item.icon} />
        });

        return (
            <div>
                huehueheu
                { menuItems }
            </div>
        )
    }

}