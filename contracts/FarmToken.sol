// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

// import the following contracts from openzeppelin: IERC20.sol, Address.sol, SafeERC20.sol and ERC20.sol.
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/utils/Address.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";


// The FarmToken contract will inherit from the ERC20 contract
contract FarmToken is ERC20 {
    // Use imports as types to base our in contract types on 
    using Address for address;
    using SafeMath for uint256;
    using SafeERC20 for IERC20;

    // Declare a variable called token and set it to be of the IERC20 type
    IERC20 public token;

    // The FarmToken constructor will receive the address of MyToken contract as and argument and 
    // assign it to the public state variable "token"
    constructor(address _token) ERC20("FarmToken", "FRM") {
        token = IERC20(_token);
    }

    // The balance function recieves no parameters and it will return the balance of MyToken on this smart 
    // contract. It is implemented as shown below
    function balance() public view returns (uint256) {
        return token.balanceOf(address(this));
    }

    function deposit(uint256 _amount) public {
        // require that the amount is greater than 0
        require(_amount > 0, "amount cannot be 0");

        // Transfer MyToken to smart contract
        token.safeTransferFrom(msg.sender, address(this), _amount);

        // mint FarmToken to msg.sender
        _mint(msg.sender, _amount);
    }

    function withDraw(uint256 _amount) public {
        // Burn FarmTokens from msg sender 
        _burn(msg.sender, _amount);

        // Transfer MyTokens from this smart contract to msg.sender
        token.safeTransfer(msg.sender, _amount);
    }
}
