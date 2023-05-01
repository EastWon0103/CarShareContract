// SPDX-License-Identifier: UNLICENSED
pragma solidity >= 0.4.11;
contract ContractRegistry {
    struct Contract {
        address addr;
        address owner;
    }
    address admin;
    mapping (uint => Contract) contracts;
    uint numContracts;
    constructor() {
        admin = msg.sender;
        numContracts = 0;
    }

    function enrollContract(address _addr) public {
        Contract storage con = contracts[numContracts++];
        con.owner = msg.sender;
        con.addr = _addr;
    }

    function getLength() public view returns(uint) {
        return numContracts;
    }

    function getContractAddr(uint num) public view returns(address){
        return contracts[num].addr;
    }
}