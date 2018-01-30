pragma solidity ^0.4.17;

import "zeppelin-solidity/contracts/token/ERC20/MintableToken.sol";
import "zeppelin-solidity/contracts/token/ERC827/ERC827Token.sol";


contract OurToken is ERC827Token, MintableToken {
  string public name = "OurToken";
  string public symbol = "OT";
  uint8 public decimals = 10;
  uint public initialSupply = 2000001;

  function OurToken() public {
    balances[msg.sender] = initialSupply;
    totalSupply_ = initialSupply;
  }

}