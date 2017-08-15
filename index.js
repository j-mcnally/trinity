import bittrex from 'node.bittrex.api'
import config from './matrix/config'
import Market from './matrix/market'

bittrex.options({
  'apikey' : config.getApiKey(),
  'apisecret' : config.getApiSecret()
});

let init = async function() {
  const market = new Market();
  let markets = await market.getMarkets();
  console.log(markets)
}

init();