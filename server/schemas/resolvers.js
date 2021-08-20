const fetch = require('node-fetch');
require('dotenv').config();

const resolvers = {
    Query: {
        generalNews: () => {
            return fetch(`https://finnhub.io/api/v1/news?category=general&token=${process.env.finnhubKey}`)
            .then(res => res.json())
        },
        majorIndeces: () => {
            return fetch(`https://api.twelvedata.com/time_series?symbol=IXIC,SPX,DJI&interval=1min&apikey=${process.env.TwelveData_Key}`)
            .then(res => res.json())
        },
        cryptoPrices: (root, args) => {
            return fetch(`https://api.nomics.com/v1/currencies/ticker?key=${process.env.NomicsKey}&ids=BTC,ETH`)
            .then(res => res.json())
        },
        trendingTickers: () => {
            return fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-trending-tickers?region=US", {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": process.env.YahooKey,
                    "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
                }
            })
            .then(res => res.json())
        },
        companyData: async (root, args) => {
            try {
                const CompanyProfile = await fetch(`https://finnhub.io/api/v1/stock/profile2?symbol=${args.ticker}&token=${process.env.finnhubKey}`).then(res => res.json())
                const CompanySentiment = await fetch(`https://finnhub.io/api/v1/news-sentiment?symbol=${args.ticker}&token=${process.env.finnhubKey}`).then(res => res.json())
                const CompanyPeers = await fetch(`https://finnhub.io/api/v1/stock/peers?symbol=${args.ticker}&token=${process.env.finnhubKey}`).then(res => res.json())
                const InsiderTransactions = await fetch(`https://finnhub.io/api/v1//stock/insider-transactions?symbol=${args.ticker}&token=${process.env.finnhubKey}`).then(res => res.json())
                console.log({CompanyProfile, CompanySentiment, CompanyPeers, InsiderTransactions})
                return {CompanyProfile, CompanySentiment, CompanyPeers, InsiderTransactions}
            } catch (error) {
                console.log(error)
            }
        }
    }
}

module.exports = resolvers;