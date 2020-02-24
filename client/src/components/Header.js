import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {

    return (
        <div>
            <Link to='/'>
                К списку услуг
            </Link>
        </div>
    )
}

export default Header;