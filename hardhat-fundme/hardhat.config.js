require("@nomicfoundation/hardhat-toolbox")
require("dotenv").config()
require("@nomiclabs/hardhat-etherscan")
require("hardhat-gas-reporter")
require("solidity-coverage")
require("hardhat-deploy")
require("@nomiclabs/hardhat-waffle")
require("@nomiclabs/hardhat-solhint")

/** @type import('hardhat/config').HardhatUserConfig */

const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "key"
COIN_MARKET_CAP = process.env.COIN_MARKET_CAP
PRIVATE_KEY_PASSWORD = process.env.PRIVATE_KEY_PASSWORD

module.exports = {
    // solidity: "0.8.17",
    solidity: {
        compilers: [{ version: "0.8.17" }, { version: "0.6.6" }]
    },
    namedAccounts: {
        deployer: {
            default: 0
        },
        user: {
            default: 1
        }
    },

    etherscan: {
        apiKey: ETHERSCAN_API_KEY
    },
    gasReporter: {
        enabled: true,
        outputFile: "gas-report.txt",
        noColors: true,
        currency: "KES",
        token: "MATIC"
    },

    defaultNetwork: "hardhat",
    networks: {
        goerli: {
            url: process.env.GOERLI_URL || "",
            accounts: [PRIVATE_KEY_PASSWORD],
            chainId: 5,
            blockConfirmations: 6
        }
    }
}
