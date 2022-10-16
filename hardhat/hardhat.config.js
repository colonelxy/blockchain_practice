const { task } = require("hardhat/config")

require("@nomicfoundation/hardhat-toolbox")
require("dotenv").config()
require("@nomiclabs/hardhat-etherscan")
require("./tasks/block-numbers")
require("hardhat-gas-reporter")
require("solidity-coverage")

// task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
//     const accounts = await hre.ethers.getSigners()

//     for (const account of accounts) {
//         console.log(account.address)
//     }
// })

const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL
const METAMASK_PRIVATE_KEY = process.env.METAMASK_PRIVATE_KEY || "0xkey"
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "key"
const COIN_MARKET_CAP_API_KEY = process.env.COIN_MARKET_CAP || "key"
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    etherscan: {
        apiKey: ETHERSCAN_API_KEY,
    },
    gasReporter: {
        enabled: true,
        outputFile: "gas-report.txt",
        noColors: true,
        currency: "KES",
        coinmarketcap: COIN_MARKET_CAP_API_KEY,
        token: "MATIC",
    },
    defaultNetwork: "hardhat",
    networks: {
        goerli: {
            url: GOERLI_RPC_URL,
            accounts: [METAMASK_PRIVATE_KEY],
            chainId: 5,
        },
        localhost: {
            url: "http://127.0.0.1:8545/",
            chainId: 31337,
            // accounts:
        },
    },
    solidity: "0.8.17",
}
