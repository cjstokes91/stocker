import React from 'react';
import StockRow from './components/StockRow/StockRow';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <div className='col-md-5 mt-5'>
          <div className='card'>
            <ul className='list-group list-group-flush'>
              <StockRow ticker='aapl' />
              <StockRow ticker='googl' />
              <StockRow ticker='msft' />
              <StockRow ticker='tsla' />
            </ul>
          </div>
        </div>
      </div>
    </div >


  );
}

export default App;
