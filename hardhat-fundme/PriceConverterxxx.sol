// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

library PriceConverter {
    function getPrice(AggregatorV3Interface priceFeed)
        internal
        view
        returns (uint256)
    {
        (, int256 price, , , ) = priceFeed.latestRoundData(); //ETH price in USD
        return uint256(price * 1e10); //1 **10 so it matches the msg.value digits
    }

    function getVersion() internal view returns (uint256) {
        AggregatorV3Interface priceFeed = AggregatorV3Interface(
            0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e
        );
        return priceFeed.version();
    }

    function getConversionRate(
        uint256 ethAmount,
        AggregatorV3Interface priceFeed
    ) internal view returns (uint256) {
        // uint256 ethPrice = getPrice();
        // uint256 ethAmountInUsd = (ethPrice * ethAmount) / 1000000000000000000;//1e18 divide by 1e18 to reduce the number of zeros back to 18
        // return ethAmountInUsd;
    }
}
