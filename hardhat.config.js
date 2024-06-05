require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config();
require('hardhat-contract-sizer');
require('hardhat-deploy');
require('@nomicfoundation/hardhat-verify');
/** @type import('hardhat/config').HardhatUserConfig */
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const API_KEY = process.env.ETHERSCAN_API_KEY;
// const POLYGON_API_KEY = process.env.POLYGON_API_KEY;
const COIN_MARKET_CAP_API_KEY = process.env.COIN_MARKET_CAP_API_KEY;
const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL;
module.exports = {
  defaultNetwork: 'hardhat',
  networks: {
    fuji: {
      url: 'https://api.avax-test.network/ext/C/rpc',
      ethNetwork: 'Fuji (C-Chain)',
      chainId: 43113,
      gasPrice: 25000000000,
      accounts: [PRIVATE_KEY],
      zksync: false,
    },
    sepolia: {
      url: SEPOLIA_RPC_URL,
      chainId: 11155111,
      accounts: [PRIVATE_KEY],
      blockConfirmations: 6,
    },
    localhost: {
      url: 'http://127.0.0.1:8545/',
      chainId: 31337,
      blockConfirmations: 1,
    },
    // polygon_mumbai: {
    //   url: "https://polygon-mumbai.g.alchemy.com/v2/kTZxIUR6MKogwu-aarjjs5euIVls4j0j",
    //   accounts: [PRIVATE_KEY],
    //   blockConfirmations: 6,
    //   chainId: 80001,
    // },
  },
  solidity: {
    compilers: [
      {
        version: '0.8.0',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: '0.8.20',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: '0.6.12',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
    player: {
      default: 1,
    },
  },
  etherscan: {
    apiKey: {
      // goerli: API_KEY,
      // polygonMumbai: POLYGON_API_KEY,
      sepolia: API_KEY,
    },
    customChains: [],
  },
  gasReporter: {
    enabled: true,
    outputFile: 'gas-report.txt',
    noColors: true,
    currency: 'USD',
    coinmarketcap: COIN_MARKET_CAP_API_KEY,
    token: 'MATIC',
  },
  mocha: {
    timeout: 400000,
  },
};
