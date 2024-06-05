// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract USDT is ERC20, ERC20Burnable, Ownable {
    constructor() ERC20("USDT", "USDT") Ownable() {
        _mint(
            0x4Aed70Ca724C2c268A4047A89A5d0Ee5Ee3D92ce,
            1_000_000 * 10 ** decimals()
        );
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    function decimals() public view override returns (uint8) {
        return 6;
    }
}
