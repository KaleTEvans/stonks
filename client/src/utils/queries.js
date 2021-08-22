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

export const QUERY_COMPANY_DATA = gql`
    query companyData($ticker: String!) {
        companyData(ticker: $ticker) {
            CompanyProfile {
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
            CompanySentiment {
                buzz {
                    articlesInLastWeek
                    buzz
                    weeklyAverage
                }
                companyNewsScore
                sectorAverageBullishPercent
                sectorAverageNewsScore
                sentiment {
                    bearishPercent
                    bullishPercent
                }
            }
            CompanyPeers
            InsiderTransactions {
                data {
                    name
                    share
                    filingDate
                    transactionDate
                    transactionCode
                    transactionPrice
                }
            }
            CompanyNews {
                category
                datetime
                headline
                image
                source
                summary
                url
            }
        }
    }
`;

export const QUERY_PEERS = gql`
    query getPeers($peers: String!) {
        getPeers(peers: $peers) {
            quoteResponse {
                result {
                    regularMarketChangePercent
                    symbol
                    fiftyTwoWeekHigh
                    fiftyTwoWeekLow
                }
            }
        }
    }
`;
