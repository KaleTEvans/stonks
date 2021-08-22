import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

import PeerList from '../PeerList';
import SentimentModel from '../../utils/helpers';

import { useQuery } from '@apollo/client';
import { QUERY_COMPANY_DATA } from '../../utils/queries';

const StockData = ({ searchedTicker }) => {
    let overallScore = 0;

    const { loading, data } = useQuery(QUERY_COMPANY_DATA, {
        variables: { ticker: searchedTicker }
    })

    if (loading) return null;
    let companyData = data?.companyData

    console.log(companyData)

    let companyPeers = companyData.CompanyPeers.join(',')
    console.log(companyPeers)

    let buzzScore = false;
    if (companyData.CompanySentiment.buzz.buzz > 1) buzzScore = true  
    console.log(buzzScore)

    const sentimentScoringSystem = new SentimentModel(companyData.CompanySentiment);

    return (
        <>
            <Container className='mt-3'>
                    <Row>
                        <Col md={9}>
                            <Row className='mb-1' >
                                <Col xs={12} md={10}>
                                    <a href={companyData.CompanyProfile.weburl} target="_blank" style={{ textDecoration: 'none', color: 'black' }}>
                                        <h5 className='text-center' style={{ borderBottom: '1px groove lightgray' }}>{companyData.CompanyProfile.name}</h5>
                                    </a>
                                </Col>
                                <Col xs={12} md={2}>
                                    <Button type='submit' variant='info' size='sm' className='search'>
                                        View Charts
                                    </Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} md={9} style={{ backgroundColor: 'snow' }}>
                                    <h6 className='mt-1 mb-1 px-1 py-1 text-bold' style={{ marginRight: '85%', border: '1px groove black' }}>Analysis</h6>
                                    <p className='mt-3 mb-1 text-bold' style={{ borderBottom: '1px solid black' }}>Sentiment</p>
                                    <Row style={{boxShadow: '5px'}}>
                                        {sentimentScoringSystem.generateBuzzScoreText()}
                                    </Row>
                                    <Row>
                                        {sentimentScoringSystem.sentimentScore()}
                                    </Row>
                                </Col>
                                <Col xs={12} md={3}>
                                    <PeerList companyPeers={companyPeers} />
                                </Col>
                            </Row>
                        </Col>
                        <Col md={3} style={{ overflow: 'scroll', height: '750px', overflowX: 'hidden' }}>
                            {companyData.CompanyNews.map(article => {
                                return (
                                    <Row className='mx-2'>
                                        <Card className='mb-2 mt-2' style={{ backgroundColor: 'gainsboro' }}>
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