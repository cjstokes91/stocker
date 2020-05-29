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
            data: {}
        }
    }

    applyData = (data) => {
        this.setState({
            data: data
        })
    }

    componentDidMount() {
        stock.latestPrice(this.props.ticker, this.applyData)
    }

    render() {
        return (
            <li className='list-group-item'>
                <b>{this.props.ticker}</b>${this.state.data.price}
                <span className='change' style={changeStyle}>+12.34</span>
            </li>
        )
    }
}

export default StockRow;