import React from 'react';

import avatarSrc from '../../../resources/images/avatar.jpeg';

import './Avatar.scss';

function Avatar(props) {
    
    return(
        <div className="avatar">
            <img className="avatar__image" src={avatarSrc}></img>
        </div>
    )

}


export default Avatar;