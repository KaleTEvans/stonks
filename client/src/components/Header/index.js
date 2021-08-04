import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Header = ({ indeces })=> {
    console.log(indeces)

    let price = {
        IXIC: parseFloat(indeces.IXIC.values[0].close).toFixed(2),
        SPX: parseFloat(indeces.SPX.values[0].close).toFixed(2),
        DJI: parseFloat(indeces.DJI.values[0].close).toFixed(2)
    };
    
    return (
        <header>
            {indeces && (
                <Container className='mt-1'>
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
                    </Row>
                </Container>
            )}
        </header>
    )
}

export default Header;