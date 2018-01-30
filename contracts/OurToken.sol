pragma solidity ^0.4.17;


import "zeppelin-solidity/contracts/token/ERC20/MintableToken.sol";


contract OurToken is MintableToken {
    string public name = "OurToken";
    string public symbol = "OT";
    uint8 public decimals = 10;
    uint public initialSupply = 1000000;

    function OurToken() public {
        balances[msg.sender] = initialSupply;
    }

}