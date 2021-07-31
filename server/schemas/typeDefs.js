const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type Query {
        generalNews: [News]
        companyProfile(ticker: String!): Profile
    }

    type News {
        category: String
        datetime: Int
        headline: String
        image: String
        source: String
        summary: String
        url: String
    }

    type Profile {
        country: String
        currency: String
        exchange: String
        finnhubIndustry: String
        ipo: String
        logo: String
        marketCapitalization: Float
        name: String
        shareOutstanding: Float
        ticker: String
        weburl: String
    }

`;

module.exports = typeDefs;