// deployFunc = () => {
//     console.log("hey")
// }

// module.exports.default = deployFunc()

const {networkConfig, developmentChains} = require("../helper-hardhat-config")
const network = require("hardhat")

module.exports = async({getNamedAccounts, deployments}) => {
    const {deploy, log, get} = deployments
    const {deployer} = await getNamedAccounts()
    const chainId=networkConfig.chainId

    // const ethUsdPriceFeedAddress=networkConfig[chainId]["ethUsdPriceFeed"]
    let ethUsdPriceFeedAddress
    if (developmentChains.includes(network.name)) {
        const ethUsdAggregator = await getNamedAccounts("MockV3Aggregator")
        ethUsdPriceFeedAddress = ethUsdAggregator.address
    } else {
        ethUsdPriceFeedAddress = networkConfig[chainId]["ethUsdPriceFeed"];
    }

    const fundMe = await deploy("FundMe", {
        from: deployer,
        args: [ethUsdPriceFeedAddress],
        log: true
})
log("_______________________________________")
}