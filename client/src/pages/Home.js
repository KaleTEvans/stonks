import React, { useState } from 'react';
import Index from '../components/Index';
import { Container, Row, Form, Col, Button } from 'react-bootstrap';

import { useQuery, useLazyQuery } from '@apollo/client';
import { QUERY_INDECES } from '../utils/queries';
import TrendingTickers from '../components/TrendingTickers';
import StockData from '../components/StockData'

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

    //const [ searchTicker, {loading: loadingTwo, data: dataTwo }] = useLazyQuery(QUERY_COMPANY_DATA);
    console.log(searchedTicker)
    

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        if (!searchInput) {
            return false;
        }

        try {
            setSearchedTicker(searchInput)
            console.log(searchedTicker)
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
            <Container fluid style={{marginTop: '25px'}}>
                <Row>
                    <TrendingTickers />
                    <Col xs={12} md={10}>
                        <Form onSubmit={handleFormSubmit}>
                            <Row className='justify-content-center'> 
                                <Col xs={12} md={8}>
                                    <Form.Control
                                        name='searchInput'
                                        value={searchInput}
                                        onChange={(e) => setSearchInput(e.target.value)}
                                        type='text'
                                        size='md'
                                        placeholder='Enter a ticker'
                                        className='search'
                                    >
                                    </Form.Control>
                                </Col>
                                <Col xs={12} md={2}>
                                    <Button type='submit' variant='success' size='md' className='search'>
                                        Submit
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                        {searchedTicker.length ? (
                            <Row>
                                <StockData searchedTicker={searchedTicker} />
                            </Row>
                        ) : <h2>COCK</h2>}  
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Home;