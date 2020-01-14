import React from 'react';

import './Menu.scss';

import MenuItem from './menu-item/MenuItem';

export default class Menu extends React.Component {

    menuItems = [
        {
            name: 'home',
            icon: 'home',
            isActive: true
        },
        {
            icon: 'about-me',
            name: 'about me',
            isActive: false
        },
        {
            name: 'resume',
            icon: 'resume',
            isActive: false
        },
        {
            icon: 'portfolio',
            name: 'portfolio',
            isActive: false
        },
        {
            name: 'contact',
            icon: 'contact',
            isActive: false
        }
    ]

    constructor() {
        super();
    }

    render() {
        const menuItems = this.menuItems.map((item, key) => {
            return <MenuItem name={item.name} icon={item.icon} key={item.name} isActive={item.isActive}/>
        });

        return (
            <div className="menu">
                { menuItems }
            </div>
        )
    }

}