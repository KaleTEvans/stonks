import React from 'react';
import headerPic from '../../images/title-img.jpg';

const Header = () => {
    return (
        <header>
            <a href='/'>
                <div >
                    <img src={headerPic} class='header-img'/>
                </div>
            </a>
        </header>
    )
}

export default Header;