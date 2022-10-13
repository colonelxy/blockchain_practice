const { task } = require("hardhat/config")

require("@nomicfoundation/hardhat-toolbox")
require("dotenv").config()
require("@nomiclabs/hardhat-etherscan")
require("./tasks/block-numbers")

// task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
//     const accounts = await hre.ethers.getSigners()

//     for (const account of accounts) {
//         console.log(account.address)
//     }
// })

const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL
const METAMASK_PRIVATE_KEY = process.env.METAMASK_PRIVATE_KEY
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    etherscan: {
        apiKey: ETHERSCAN_API_KEY,
    },
    defaultNetwork: "hardhat",
    networks: {
        goerli: {
            url: GOERLI_RPC_URL,
            accounts: [METAMASK_PRIVATE_KEY],
            chainId: 5,
        },
    },
    solidity: "0.8.17",
}
