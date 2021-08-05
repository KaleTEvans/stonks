const fetch = require('node-fetch');
require('dotenv').config();
const finnhub = require('finnhub');

const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = process.env.finnhubKey;
const finnhubClient = new finnhub.DefaultApi()

// finnhubClient.marketNews("general", {}, (error, data, response) => {
//   console.log(data)
// });

fetch(`https://finnhub.io/api/v1/news?category=general&token=${process.env.finnhubKey}`)
  .then(res => res.json())
  .then(json => {
    console.log(json);
  })

// company profile
// fetch(`https://finnhub.io/api/v1/stock/profile2?symbol=AAPL&token=${process.env.finnhubKey}`)
//   .then(res => res.json())
//   .then(json => {
//     console.log(json);
//   })

// news sentiment
// fetch(`https://finnhub.io/api/v1//news-sentiment?symbol=AAPL&token=${process.env.finnhubKey}`)
//   .then(res => res.json())
//   .then(json => {
//     console.log(json);
//   })

// fetch(`https://finnhub.io/api/v1/stock/peers?symbol=AAPL&token=${process.env.finnhubKey}`)
// .then(res => res.json())
// .then(json => {
//     console.log(json);
// })

// fetch(`https://api.twelvedata.com/time_series?symbol=IXIC&interval=1day&apikey=${process.env.TwelveData_Key}`)
// .then(res => res.json())
// .then(json => {
//     console.log(json);
// })

