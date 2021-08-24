const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type Query {
        generalNews: [News]
        majorIndeces: IndexPrices
        cryptoPrices: [Crypto]
        trendingTickers: Trending
        companyData(ticker: String!): Info
        getPeers (peers: String!): Peers
    }

    type Info {
        CompanyProfile: Profile
        CompanySentiment: Sentiment
        CompanyPeers: [String]
        InsiderTransactions: TransactionData
        CompanyNews: [News]
        CompanyEarnings: EarningsData
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

    type IndexPrices {
        IXIC: Index
        SPX: Index
        DJI: Index
    }

    type Index {
        meta: IndexObj
        values: [IndexPriceInfo]
    }

    type IndexObj {
        symbol: String
        exchange: String
    }

    type IndexPriceInfo {
        datetime: String
        open: String
        high: String
        low: String
        close: String
        volume: String
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

    type EarningsData {
        symbol: String!
        quarterlyEarnings: [Earnings]
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

    type Earnings {
        reportedDate: String
        reportedEPS: String
        estimatedEPS: String
    }

    type Crypto {
        id: String
        name: String
        price: String
    }

    type Trending {
        finance: Tickers
    }

    type Peers {
        quoteResponse: PeerResponse
    }

    type Tickers {
        result: [Results]
    }

    type PeerResponse {
        result: [PeerData]
    }

    type Results {
        quotes: [TrendingList]
    }

    type TrendingList {
        symbol: String
        regularMarketPrice: Float
        regularMarketChange: Float
        regularMarketChangePercent: Float
        longName: String
    }

    type PeerData {
        regularMarketChangePercent: Float
        symbol: String
        fiftyTwoWeekHigh: Float
        fiftyTwoWeekLow: Float
    }

`;

module.exports = typeDefs;