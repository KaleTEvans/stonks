import { gql } from '@apollo/client';

export const QUERY_INDECES = gql`
    {
        majorIndeces {
            IXIC {
                meta {
                    symbol
                    exchange
                }
                values {
                    datetime
                    open
                    high
                    low
                    close
                    volume
                }
            }
            SPX {
                meta {
                    symbol
                    exchange
                }
                values {
                    datetime
                    open
                    high
                    low
                    close
                    volume
                }
            }
            DJI {
                meta {
                    symbol
                    exchange
                }
                values {
                    datetime
                    open
                    high
                    low
                    close
                    volume
                }
            }
        }
    }
`;

export const QUERY_NEWS = gql`
    {
        generalNews {
            category
            datetime
            headline
            image
            source
            summary
            url
        }
    }
`;

export const QUERY_CRYPTO = gql`
    {
        cryptoPrices {
            id
            name
            price
        }
    }
`;

export const QUERY_TRENDING_TICKERS = gql`
    {
        trendingTickers {
            finance {
                result {
                    quotes {
                        symbol
                        regularMarketPrice
                        regularMarketChange
                        regularMarketChangePercent
                        longName
                    }
                }
            }
        }
    }
`;

export const QUERY_COMPANY_PROFILE = gql`
    query companyProfile($ticker: ticker!) {
        companyProfile(ticker: $ticker) {
            country
            currency
            exchange
            finnhubIndustry
            ipo
            logo
            marketCapitalization
            name
            shareOutstanding
            ticker
            weburl
        }
    }
`