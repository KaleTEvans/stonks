const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type Query {
        generalNews: [News]
        companyProfile(ticker: String!): Profile
        companySentiment(ticker: String!): Sentiment
        companyPeers(ticker: String!): [String]
        insiderTransactions(ticker: String!): TransactionData
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

    type Sentiment {
        buzz: Traffic
        companyNewsScore: Float
        sectorAverageBullishPercent: Float
        sectorAverageNewsScore: Float
        sentiment: InvestorSentiment
        symbol: String
    }

    type Traffic {
        articlesInLastWeek: Int
        buzz: Float
        weeklyAverage: Float
    }

    type InvestorSentiment {
        bearishPercent: Float
        bullishPercent: Float
    }

    type TransactionData {
        data: [Transactions]
        symbol: String
    }

    type Transactions {
        name: String
        share: Float
        change: Float
        filingDate: String
        transactionDate: String
        transactionCode: String
        transactionPrice: Float
    }

`;

module.exports = typeDefs;