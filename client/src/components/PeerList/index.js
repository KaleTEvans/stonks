import React from 'react';
import { Container, Row, Col, Popover } from 'react-bootstrap';

import { useQuery } from '@apollo/client';
import { QUERY_PEERS } from '../../utils/queries';

const PeerList = ({ companyPeers }) => {
    const { loading, data } = useQuery(QUERY_PEERS, {
        variables: { peers: companyPeers }
    })

    if (loading) return null;
    const peerData = data?.getPeers.quoteResponse.result;

    console.log(peerData);

    const percentChangeColor = (value) => {
        if (value > 0) {
            return 'green'
        } else {
            return 'red'
        }
    }

    return (
        <>
            <Container fluid>
                <h6 className='text-center'>Industry Peers</h6>
                {peerData.map(peer => {
                    return (
                        <Row style={{ backgroundColor: 'gainsboro', border: '1px solid black', margin: '1px' }}>
                            <Col xs={7} >
                                <p style={{ fontSize: '12px', marginBottom: '0' }}>{peer.symbol}</p>
                                
                            </Col>
                            <Col xs={4}>
                                <p style={{ fontSize: '12px' }} className={'mb-0 ' + percentChangeColor(peer.regularMarketChangePercent)}>
                                    {peer.regularMarketChangePercent.toFixed(1)}%
                                </p>
                            </Col>
                        </Row>
                    )
                })}

            </Container>
        </>
    )
}

export default PeerList;