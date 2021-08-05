require('dotenv').config();

export const ethPrice = () => {
    return fetch(`https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=ETH&to_currency=USD&apikey=${process.env.AlphaKey}`)
}