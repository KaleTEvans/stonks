import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { useQuery } from '@apollo/client';

import { QUERY_CRYPTO } from '../../utils/queries';

const Index = ({ indeces })=> {

    let price = {
        IXIC: parseFloat(indeces.IXIC.values[0].close).toFixed(2),
        SPX: parseFloat(indeces.SPX.values[0].close).toFixed(2),
        DJI: parseFloat(indeces.DJI.values[0].close).toFixed(2)
    };

    let { loading, data } = useQuery(QUERY_CRYPTO, {
        pollInterval: 60000
    });
    let crypto = data?.cryptoPrices || []

    if (loading) return null

    let cryptoPrice = {
        BTC: parseFloat(crypto[0].price).toFixed(2),
        ETH: parseFloat(crypto[1].price).toFixed(2)
    }
    
    return (
        <Container className='mt-1'>
            {indeces && (
            <Row>
                <Col className='index'>
                    <p className='index-symbol text-center mt-1 mb-1'>Nasdaq</p>
                    <p className='index-price text-center mb-1'>{price.IXIC}</p>
                </Col>
                <Col className='index'>
                    <p className='index-symbol text-center mt-1 mb-1'>S&P 500</p>
                    <p className='index-price text-center mb-1'>{price.SPX}</p>
                </Col>
                <Col className='index'>
                    <p className='index-symbol text-center mt-1 mb-1'>Dow Jones</p>
                    <p className='index-price text-center mb-1'>{price.DJI}</p>
                </Col>
                <Col className='index'>
                    <p className='index-symbol text-center mt-1 mb-1'>Bitcoin</p>
                    <p className='index-price text-center mb-1'>${cryptoPrice.BTC}</p>
                </Col>
                <Col className='index'>
                    <p className='index-symbol text-center mt-1 mb-1'>Ethereum</p>
                    <p className='index-price text-center mb-1'>${cryptoPrice.ETH}</p>
                </Col>
            </Row>
            )}
        </Container>
    )
}


export default Index;