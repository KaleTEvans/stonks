const fetch = require('node-fetch');
require('dotenv').config();

const resolvers = {
    Query: {
        generalNews: () => {
            return fetch(`https://finnhub.io/api/v1/news?category=general&token=${process.env.finnhubKey}`)
            .then(res => res.json())
        },
        companyProfile: (root, args) => {
            return fetch(`https://finnhub.io/api/v1/stock/profile2?symbol=${args.ticker}&token=${process.env.finnhubKey}`)
            .then(res => res.json())
        },
        companySentiment: (root, args) => {
            return fetch(`https://finnhub.io/api/v1/news-sentiment?symbol=${args.ticker}&token=${process.env.finnhubKey}`)
            .then(res => res.json())
        },
        companyPeers: (root, args) => {
            return fetch(`https://finnhub.io/api/v1/stock/peers?symbol=${args.ticker}&token=${process.env.finnhubKey}`)
            .then(res => res.json())
        },
        insiderTransactions: (root, args) => {
            return fetch(`https://finnhub.io/api/v1//stock/insider-transactions?symbol=${args.ticker}&token=${process.env.finnhubKey}`)
            .then(res => res.json())
        }
    }
}

module.exports = resolvers;