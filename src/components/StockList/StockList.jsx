import React, { Component } from 'react';
import { stock } from '../Stock/Stock.jsx';
import StockRow from '../StockRow/StockRow.jsx';


class StockList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lastTradingDate: null,
        }
    }
    componentDidMount() {
        stock.getLastTradingDate().then((data) => {
            console.log(data)
            this.setState({
                lastTradingDate: data.date
            })
        })
    }

    render() {
        const lastTradingDate = this.state.lastTradingDate;
        return (
            <ul className='list-group list-group-flush' >
                <StockRow ticker="appl" lastTradingDate={lastTradingDate} />
                <StockRow ticker="tsla" lastTradingDate={lastTradingDate} />
                <StockRow ticker="f" lastTradingDate={lastTradingDate} />
                <StockRow ticker="googl" lastTradingDate={lastTradingDate} />
            </ul>
        )
    }
}

export default StockList;