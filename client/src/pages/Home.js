import React from 'react';
import Header from '../components/Header';
import { Container } from 'react-bootstrap';

import { useQuery } from '@apollo/client';
import { QUERY_INDECES } from '../utils/queries';

const Home = () => {
    const { loading, data } = useQuery(QUERY_INDECES);
    console.log(data)
    const indeces = data?.majorIndeces || [];

    console.log(indeces);
    if (loading) return null

    return (
        <main>
            {indeces && (
                <Header indeces={indeces}></Header>
            )}
        </main>
    )
}

export default Home;