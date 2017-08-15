import bittrex from 'node.bittrex.api';
import async from 'async'

class Market {
  getMarkets() {
    return new Promise(function(resolve, reject) {
      bittrex.getmarketsummaries( function( data, err ) {
        if (err) {
          return reject(err);
        }
        async.map(data.result,
          function(result, callback) {
            bittrex.getticker( { market : result.MarketName }, function( ticker ) {
              let data = {info: result, ticker: ticker.result}
              return callback(null, data);
            });
          }, function(err, result) {
            if (err) {
              return reject(err)
            }
            return resolve(result);
          }
        )
      })
    })
  }
}

export default Market;