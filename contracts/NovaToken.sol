// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/**
 * @title NovaToken
 * @dev ERC-20 token with a fixed supply of 200 tokens.
 */
contract NovaToken is ERC20 {
    constructor() ERC20("Nova Token", "NVT") {
        _mint(msg.sender, 200 * 10 ** decimals());
    }
}
