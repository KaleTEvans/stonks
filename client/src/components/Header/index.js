import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_INDECES } from '../../utils/queries';

const Header = ({ indeces })=> {
    console.log(indeces)
    return (
        <header>
            {indeces && (
                <div>
                    <p></p>
                    <p>{indeces.DJI.values[0].open}</p>
                </div>
            )}
        </header>
    )
}

export default Header;