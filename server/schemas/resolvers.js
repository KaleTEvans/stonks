const fetch = require('node-fetch');
require('dotenv').config();

class DateFormatter {
    constructor(rawDate, rawDateLastWeek) {
        this.rawDate = new Date()
        console.log(this.rawDate.getMonth())
        this.rawDateLastWeek = new Date(Date.now() - 604800000)
    }
    getTodayDate() {
        let year = this.rawDate.getFullYear().toString();
        console.log(year)
        let prevMonth = this.rawDate.getMonth() + 1;
        let month = prevMonth.toString()
        let day = this.rawDate.getDate().toString();

        if (month.length < 2) {
            month = '0' + month;
        }
        if (day.length < 2) {
            day = '0' + day;
        }
    
        return [year, month, day].join('-')
    }
    getLastWeekDate() {
        let year = this.rawDateLastWeek.getFullYear().toString();
        let prevMonth = this.rawDateLastWeek.getMonth() + 1;
        let month = prevMonth.toString()
        let day = this.rawDateLastWeek.getDate().toString();

        if (month.length < 2) {
            month = '0' + month;
        }
        if (day.length < 2) {
            day = '0' + day;
        }
    
        return [year, month, day].join('-')
    }
}

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
        getPeers: (root, args) => {
            return fetch(`https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-quotes?region=US&symbols=${args.peers}`, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
                    "x-rapidapi-key": process.env.YahooKey
	            }
            })
            .then(res => res.json())
        },
        companyData: async (root, args) => {
            let date = new DateFormatter()

            try {
                const CompanyProfile = await fetch(`https://finnhub.io/api/v1/stock/profile2?symbol=${args.ticker}&token=${process.env.finnhubKey}`).then(res => res.json())
                const CompanySentiment = await fetch(`https://finnhub.io/api/v1/news-sentiment?symbol=${args.ticker}&token=${process.env.finnhubKey}`).then(res => res.json())
                const CompanyPeers = await fetch(`https://finnhub.io/api/v1/stock/peers?symbol=${args.ticker}&token=${process.env.finnhubKey}`).then(res => res.json())
                const InsiderTransactions = await fetch(`https://finnhub.io/api/v1//stock/insider-transactions?symbol=${args.ticker}&token=${process.env.finnhubKey}`).then(res => res.json())
                const CompanyNews = await fetch(`https://finnhub.io/api/v1//company-news?symbol=${args.ticker}&from=${date.getLastWeekDate()}&to=${date.getTodayDate()}&token=${process.env.finnhubKey}`).then(res => res.json())
                console.log({CompanyNews})
                console.log(date.getLastWeekDate())
                console.log(date.getTodayDate())
                return {CompanyProfile, CompanySentiment, CompanyPeers, InsiderTransactions, CompanyNews}
            } catch (error) {
                console.log(error)
            }
        }
    }
}

module.exports = resolvers;