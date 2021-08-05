import React from 'react';
import Index from '../components/Index';
import { Container } from 'react-bootstrap';

import { useQuery } from '@apollo/client';
import { QUERY_INDECES } from '../utils/queries';

const Home = () => {
    // get index prices
    const { loading: loadingOne, data: dataOne } = useQuery(QUERY_INDECES, {
        pollInterval: 60000
    });
    const indeces = dataOne?.majorIndeces || [];

    if (loadingOne) return null

    return (
        <>
            {indeces && (
                <Index indeces={indeces}></Index>
            )}
        </>
    )
}

export default Home;