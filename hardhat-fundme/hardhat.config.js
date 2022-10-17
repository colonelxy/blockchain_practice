require("@nomicfoundation/hardhat-toolbox")
require("dotenv").config()
require("@nomiclabs/hardhat-etherscan")
require("hardhat-gas-reporter")
require("solidity-coverage")
require("hardhat-deploy")
require("@nomiclabs/hardhat-waffle")

/** @type import('hardhat/config').HardhatUserConfig */

const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL
module.exports = {
  // solidity: "0.8.17",
  solidity: {
    compilers: [
      {version: "0.8.17"},
      {version: "0.6.6"}
    ]
  },
  defaultNetwork: "hardhat",
  networks: {
    goerli: {
      url: process.env.GOERLI_URL || "",
      accounts: [],
    },
  },
};
