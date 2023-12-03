/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.9",
    defaultNetwork: 'goerli',
    networks: {
      hardhat: {},
      sepolia: {
        url: 'https://rpc.ankr.com/eth_sepolia/dc38275048a4bf79aa3cae5bb2bb25d747feca105ea6303a09e8024e71f58877',
        accounts: [`0x${process.env.PRIVATE_KEY}`]
      },
      goerli: {
        url: 'https://rpc.ankr.com/eth_goerli/dc38275048a4bf79aa3cae5bb2bb25d747feca105ea6303a09e8024e71f58877',
        accounts: [`0x${process.env.PRIVATE_KEY}`]
      }
    },
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
