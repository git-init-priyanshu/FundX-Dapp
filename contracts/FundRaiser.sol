// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <0.9.0;

// contractAddress = 0x4E61cD50b8A4eD73162953841eAc460a4E92658c

contract FundRaiser {
    address payable owner;

    struct Memo {
        string name;
        string message;
        uint256 timestamp;
        address from;
    }
    Memo[] memos;

    constructor() {
        owner = payable(msg.sender);
    }

    function donate(string memory name, string memory message) public payable {
        // require(msg.value > 0, "Please pay greater than 0 ether");
        owner.transfer(msg.value);
        memos.push(Memo(name, message, block.timestamp, msg.sender));
    }

    function getMemos() public view returns (Memo[] memory) {
        return memos;
    }
}
