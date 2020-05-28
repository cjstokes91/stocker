import React from 'react';
import StockRow from './components/StockRow/StockRow';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <table className='table mt-5'>
          <thead>
            <tr>
              <th>Ticker</th>
              <th>Price</th>
              <th>Date</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <StockRow ticker='aapl' />
            <StockRow ticker='googl' />
            <StockRow ticker='msft' />
            <StockRow ticker='tsla' />
          </tbody>
        </table>
      </div>
    </div >


  );
}

export default App;
