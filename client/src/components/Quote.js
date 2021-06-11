import React from 'react';

export const Quote = (
    {change,
    change_percent,
    dividend,
    price,
    ticker,
    yieldQuote} 
    ) => { 

    let tickerClassName;

    switch (ticker) {
        case "AAPL":
        tickerClassName = "quote__ticker Apple"
        break

        case "GOOGL":
        tickerClassName = "quote__ticker Google"
        break
        
        case "MSFT":
        tickerClassName = "quote__ticker Microsoft"
        break

        case "Microsoft":
        tickerClassName = "quote__ticker Amazon"
        break

        case "FB":
        tickerClassName = "quote__ticker FaceBook"
        break

        case "TSLA":
        tickerClassName = "quote__ticker Tesla"
        break
        
        default:
            tickerClassName = "quote__ticker"
        break
    }
     
    return (
       <div className="quote__wrapper">
            <div className="quote__change">
            <b>Change:</b> &nbsp; {change} &#x24;
            </div>
            <div className="quote__change_percent">
             &nbsp; {change_percent}  &nbsp; <b>&#x25;</b>
            </div>
            <div className="quote__dividend">
            <b>dividend:</b> &nbsp; {dividend} &#x24;
            </div>
            <div className="quote__price">
            <b>Price: </b> &nbsp; {price} &#x24;
            </div>
            <div className="ticker__wrapper">
                <div className={tickerClassName}>
                {ticker} 
                </div>
            </div>
            <div className="quote__yieldQuote">
            Yield: &nbsp; {yieldQuote} &#x24;
            </div>
       </div>
    )
}

