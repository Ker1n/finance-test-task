import React from 'react'
import moment from 'moment';

import { Quote } from './Quote';
import ibg  from '../assets/nasdaq-logo.png'


export const Quotes = (props) => {
    const {quotes} = props;
    
    
    let time = moment(quotes.last_trade_time).format('MMMM Do YYYY, h:mm:ss a');
 
    return ( 
        <div className='quotes__wrapper'>   
            <img src={ibg} alt="ibg" />
            <h2>Daily Stock Market Overview, Data Updates, Reports ...</h2>
            <h4>{time}</h4>
            {quotes.map(quote => (
                <Quote key ={quote?.change + Date.now()}
                change={quote?.change}
                change_percent={quote?.change_percent}
                dividend={quote?.dividend}
                price={quote?.price}
                ticker={quote?.ticker}
                yieldQuote={quote?.yield}
                />
            ))}
        </div>
    )    
};
