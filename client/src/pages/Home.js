import React, { useState } from 'react';
import Index from '../components/Index';
import { Container, Row, Form, Col, Button } from 'react-bootstrap';

import { useQuery } from '@apollo/client';
import { QUERY_INDECES } from '../utils/queries';
import TrendingTickers from '../components/TrendingTickers';
import { searchTicker } from '../utils/api';

const Home = () => {
    // states for ticker search
    const [searchInput, setSearchInput] = useState('');
    // state for holding returned api data
    const [searchedTicker, setSearchedTicker] = useState([]);

    // get index prices
    let { loading: loadingOne, data: dataOne } = useQuery(QUERY_INDECES, {
        pollInterval: 1800000 // refresh prices every 30 minutes
    });
    let indeces = dataOne?.majorIndeces || [];

    if (loadingOne) return null;

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        if (!searchInput) {
            return false;
        }

        try {
            const response = await searchTicker(searchInput)

            if (!response.ok) {
                throw new Error('Could not find ticker');
            }

            console.log(response);

            const stockData = await response.json();
            console.log(stockData);

            setSearchedTicker(stockData);
            setSearchInput('');
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            {indeces.DJI && (
                <Index indeces={indeces}></Index>
            )}
            <Container fluid>
                <Row>
                    <TrendingTickers />
                    <Col xs={12} md={8}>
                        <Form onSubmit={handleFormSubmit}>
                            <Col xs={12} md={8}>
                                <Form.Control
                                    name='searchInput'
                                    value={searchInput}
                                    onChange={(e) => setSearchInput(e.target.value)}
                                    type='text'
                                    sixze='lg'
                                    placeholder='Enter a ticker'
                                    className='search'
                                >
                                </Form.Control>
                            </Col>
                            <Col xs={12} md={4}>
                                <Button type='submit' variant='success' size='lg' className='search'>
                                    Submit
                                </Button>
                            </Col>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Home;