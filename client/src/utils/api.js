require('dotenv').config();

export const ethPrice = () => {
    return fetch(`https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=ETH&to_currency=USD&apikey=${process.env.AlphaKey}`)
}

const fetchProfile = (ticker) => {
    fetch(`https://finnhub.io/api/v1/stock/profile2?symbol=${ticker}&token=${process.env.REACT_APP_finnhubKey}`)
    .then(res => res.json())
}

const fetchSentiment = (ticker) => {
    return fetch(`https://finnhub.io/api/v1/news-sentiment?symbol=${ticker}&token=${process.env.REACT_APP_finnhubKey}`)
    .then(res => res.json())
}

const fetchPeers = (ticker) => {
    return fetch(`https://finnhub.io/api/v1/stock/peers?symbol=${ticker}&token=${process.env.REACT_APP_finnhubKey}`)
    .then(res => res.json())
}

export const getStockData = async (ticker) => {
    const [profile, peers, sentiment] = await Promise.all([
        fetchProfile(ticker)
    ])

    console.log([profile])
}