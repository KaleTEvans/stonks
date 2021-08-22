import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

import { useQuery } from '@apollo/client';
import { QUERY_COMPANY_DATA } from '../../utils/queries';

const StockData = ({ searchedTicker }) => {
    const { loading, data } = useQuery(QUERY_COMPANY_DATA, {
        variables: { ticker: searchedTicker }
    })

    if (loading) return null;
    let companyData = data?.companyData

    console.log(companyData)



    return (
        <>
            <Container className='mt-3'>
                    <Row>
                        <Col md={9}>
                            <h6 className='text-center'>Ticker: {companyData.CompanyProfile.ticker}</h6>
                        </Col>
                        <Col md={3} style={{ overflow: 'scroll', height: '750px', overflowX: 'hidden' }}>
                            {companyData.CompanyNews.map(article => {
                                return (
                                    <Row className='mx-2'>
                                        <Card className='mb-2 mt-2'>
                                            <Card.Link href={article.url} target='_blank'>
                                                {article.image && (
                                                    <Card.Img variant='top' src={article.image} style={{ width: '100%', height: '12vw', objectFit: 'cover' }}/>
                                                )}
                                            </Card.Link>
                                            <Card.Body>
                                                {article.image ? (
                                                    <Card.Title style={{ fontSize: '12px' }}>{article.headline}</Card.Title>
                                                ) : (
                                                    <Card.Link href={article.url} target='_blank' style={{ textDecoration: 'none', color: 'black' }}>
                                                        <Card.Title style={{ fontSize: '12px' }}>{article.headline}</Card.Title>
                                                    </Card.Link>
                                                )}
                                            </Card.Body>
                                        </Card>
                                    </Row>
                                )
                            })}
                        </Col>
                    </Row>
            </Container>
        </>
    )
}

export default StockData;