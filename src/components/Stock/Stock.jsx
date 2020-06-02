import { iex } from '../API/iex';

export const stock = {

    latestPrice: (ticker, callback) => {
        fetch(stock.latestPriceUrl(ticker))
            .then((response) => response.json())
            .then((data) => callback(stock.formatPriceData(data)))
    },
    latestPriceUrl: (ticker) => {
        return `${iex.base_url}/stock/${ticker}/intraday-prices?chartLast=1&token=${iex.api_token}`;
    },

    formatPriceData: (data) => {
        const stockData = data[data.length - 1]
        const formattedData = {}
        formattedData.price = stockData.close
        formattedData.date = stockData.date
        formattedData.time = stockData.label
        return formattedData
    },
    getYesterdaysClose: (ticker, date, callback) => {
        stock.getLastTradingDate(date).then((data) => {
            console.log(data.date)
            fetch(stock.yesterdaysCloseURL(ticker, date))
                .then((res) => res.json())
                .then((data) => callback(stock.formatPriceData(data)))
        })
    },
    getLastTradingDate: (date) => {
        let today = new
            Date(date).toISOString().split('T')[0].replace(/-/g, '');
        const url = `${iex.base_url}/ref-data/us/dates/trade/last/1/${today}?token=${iex.api_token}`
        return fetch(url).then((res) => res.json());
    },

    yesterdaysCloseURL: (ticker, date) => {
        return `${iex.base_url}/stock/${ticker}/intraday-prices?chartLast=1&exactDate=20200601&token=${iex.api_token}`;
    }
}