import React from 'react';
import Index from '../components/Index';
import Header from '../components/Header';
import { Container } from 'react-bootstrap';

import { useQuery } from '@apollo/client';
import { QUERY_INDECES } from '../utils/queries';

const Home = () => {
    const { loading, data } = useQuery(QUERY_INDECES, {
        pollInterval: 60000
    });
    const indeces = data?.majorIndeces || [];

    console.log(indeces);
    if (loading) return null

    return (
        <>
            <Header />
            <main>
                {indeces && (
                    <Index indeces={indeces}></Index>
                )}
            </main>
        </>
    )
}

export default Home;