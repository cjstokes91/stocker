import React, { Component } from 'react';
import { stock } from '../Stock/Stock.jsx';

const changeStyle = {
    color: '#4caf50',
    fontSize: '0.8rem',
    marginLeft: 5
}

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

    applyData = (data) => {
        console.log(data)
        this.setState({
            price: data.price,
            date: data.date,
            time: data.time,
        })
    }

    componentDidMount() {
        stock.latestPrice(this.props.ticker, this.applyData)
    }

    render() {
        return (
            <li className='list-group-item'>
                <b>{this.props.ticker}</b>${this.state.price}
                <span className='change' style={changeStyle}>+12.34</span>
                {this.state.dollar_Change}
                {this.state.percent_Change}
            </li>

        )
    }
}

export default StockRow;