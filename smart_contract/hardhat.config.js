//https://eth-goerli.g.alchemy.com/v2/Do_Hs4yaU4epoZq4d0JcABK9_9NHbnfp
//Do_Hs4yaU4epoZq4d0JcABK9_9NHbnfp
require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/Do_Hs4yaU4epoZq4d0JcABK9_9NHbnfp',
      accounts: ['227c93e8d2be6eb99168d7dd2ec7b06b0d0738cf9c0da53c1f4b4933f35e906b'],
    },
  },
};