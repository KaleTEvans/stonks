import React from 'react';

import { Row, Col } from 'react-bootstrap';

import { useQuery } from '@apollo/client';
import { QUERY_TRENDING_TICKERS } from '../../utils/queries';

const TrendingTickers = () => {
    let { loading, data } = useQuery(QUERY_TRENDING_TICKERS);

    let trending = data?.trendingTickers.finance.result[0].quotes || [];
    if (loading) return null;

    console.log(trending)

    const percentChangeColor = (value) => {
        if (value > 0) {
            return 'green'
        } else {
            return 'red'
        }
    }

    return (
        <Col xs={12} md={2}>
            <h5 style={{ marginBottom: '2px' }}>Trending</h5>
            {trending.map((trendingTicker) => {
                return(
                    <Row style={{ backgroundColor: 'gainsboro', border: '1px solid black', margin: '1px' }}>
                        <Col md={9}>
                            <p className={'mb-0 trending'} style={{ fontSize: '12px' }}>
                                {trendingTicker.symbol}
                            </p>
                        </Col>
                        <Col md={2}>
                            <p style={{ fontSize: '12px' }} className={'mb-0 ' + percentChangeColor(trendingTicker.regularMarketChangePercent)}>
                                {trendingTicker.regularMarketChangePercent.toFixed(1)}%
                            </p>
                        </Col>
                    </Row>
                )
            })}
        </Col>
    )
};

export default TrendingTickers;