import React from 'react';
import Index from '../components/Index';
import { Container } from 'react-bootstrap';

import { useQuery } from '@apollo/client';
import { QUERY_INDECES } from '../utils/queries';
import TrendingTickers from '../components/TrendingTickers';

const Home = () => {
    // get index prices
    let { loading: loadingOne, data: dataOne } = useQuery(QUERY_INDECES, {
        pollInterval: 60000
    });
    let indeces = dataOne?.majorIndeces || [];

    if (loadingOne) return null

    return (
        <>
            {indeces && (
                <Index indeces={indeces}></Index>
            )}
            <Container fluid>
                <TrendingTickers />
            </Container>
        </>
    )
}

export default Home;