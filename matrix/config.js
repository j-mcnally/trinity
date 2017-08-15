import dotenv from 'dotenv'

dotenv.config();

export default {
  getApiKey() {
    return process.env.BITTREX_API_KEY;
  },
  getApiSecret() {
    return process.env.BITTREX_API_SECRET;
  },
  isReal() {
    return process.env.IS_REAL;
  }
}