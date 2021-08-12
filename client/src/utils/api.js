require('dotenv').config();

export const ethPrice = () => {
    return fetch(`https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=ETH&to_currency=USD&apikey=${process.env.AlphaKey}`)
}

export const searchTicker = (symbol) => {
    return fetch(`https://finnhub.io/api/v1/stock/profile2?symbol=${symbol}&token=${process.env.REACT_APP_finnhubKey}`)
}