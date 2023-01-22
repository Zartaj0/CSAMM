// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./CSAMM.sol";

contract Factory {
    event CreatedPool(address indexed creator, CSAMM indexed pool);

    function createPool(address token0, address token1) external {
        CSAMM csamm = new CSAMM(token0, token1);
        emit CreatedPool(msg.sender, csamm);
    }
}
