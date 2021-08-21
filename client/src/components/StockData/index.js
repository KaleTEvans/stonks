import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

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
        </>
    )
}

export default StockData;