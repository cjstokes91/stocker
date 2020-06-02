import React, { Component } from 'react';
import { stock } from '../Stock/Stock.jsx';


class StockRow extends Component {
    constructor(props) {
        super(props)
        this.state = {
            price: null,
            date: null,
            time: null,
            dollar_Change: null,
            percent_Change: null
        }
    }
    changeStyle = () => {
        return {
            color: (this.state.dollar_Change > 0) ? '#4caf50' : '#e53935',
            fontSize: '0.8rem',
            marginLeft: 6
        }
    }


    applyData = (data) => {
        console.log(data)
        this.setState({
            price: data.price,
            date: data.date,
            time: data.time,
        })
        stock.getYesterdaysClose(this.props.ticker, data.date, (yesterdayData) => {
            const dollar_Change = (data.price - yesterdayData.price).toFixed(2);
            const percent_Change = (100 * dollar_Change / yesterdayData.price).toFixed(1);
            this.setState({
                dollar_Change: `${dollar_Change}`,
                percent_Change: `${percent_Change}%`
            })
        })
    }

    componentDidMount() {
        stock.latestPrice(this.props.ticker, this.applyData)
    }

    render() {
        return (
            <li className='list-group-item'>
                <b>{this.props.ticker}</b>${this.state.price}
                <span className='change' style={this.changeStyle()} >
                    {this.state.dollar_Change}
                    {this.state.percent_Change}
                </span>
            </li>

        )
    }
}

export default StockRow;