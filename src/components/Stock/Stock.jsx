import React, { useCallback } from 'react';
import { iex } from '../API/iex';

export const stock = {
    latestPrice: (ticker, callback) => {
        const url = `${iex.base_url}/stock/${ticker}/intraday-prices?chartLast=1&token=${iex.api_token}`;

        fetch(url)
            .then((response) => response.json())
            .then((data) => callback(data))
    }
}   