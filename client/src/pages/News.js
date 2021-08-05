import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_NEWS } from '../utils/queries';

import { Container, Row, Col, Card } from 'react-bootstrap';

const News = () => {
    // get news
    const { loading, data } = useQuery(QUERY_NEWS);
    const news = data?.generalNews || [];

    if (loading) return null
    console.log(news)

    return (
        <Container style={{ height: '30%', overflow: 'hidden' }}>
            <h4 className='mt-2 text-center'>
                {news.length ? `Top News` : 'Loading...'}
            </h4>
            <Row xs={2} md={4}>
                {news.map((story) => {
                    return (
                    <Col>
                        <Card className='mb-2 mt-2'>
                            <Card.Link href={story.url} target='_blank'>
                                <Card.Img variant='top' src={story.image} style={{ width: '100%', height: '12vw', objectFit: 'cover' }}/>
                            </Card.Link>
                            <Card.Body>
                                <Card.Title style={{ fontSize: '15px' }}>{story.headline}</Card.Title>
                                <Card.Text style={{ fontSize: '12px' }}>{story.summary}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    )
                })}
            </Row>
        </Container>
    )
}

export default News;