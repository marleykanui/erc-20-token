// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

// Import the contract ERC20.sol from openzeppelin that contains the implementation for this token standard 
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

// We inherit from the ERC20.sol contract with the keyword "is"
contract MyToken is ERC20 {
    // We call the ERC20.sol constructor and pass in "MyToken" and the name and "MTKN" as the symbol
    constructor() ERC20("MyToken", "MTKN") {
        // We mint and transfer 1 million tokens for the account that is deploying the smart contract (we use the default
        // 18 decimals for the ERC20 token, that means that if we want to mint 1 token, we will respresent it as 
        // 1000000000000000000000000, 1 with 18 zeros)
        _mint(msg.sender, 1000000000000000000000000);
    }

}
