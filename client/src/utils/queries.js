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