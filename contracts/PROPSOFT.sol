pragma solidity ^0.8.0;
import "@layerzerolabs/solidity-examples/contracts/token/oft/v2/ProxyOFTV2.sol";

contract PROPSOFT is ProxyOFTV2 {
    constructor(
        address _token,
        address _lzEndpointAddress
    )ProxyOFTV2(_token, 8, _lzEndpointAddress) {
    }

}

