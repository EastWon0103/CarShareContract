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
    modifier onlyAdmin() {
        require(msg.sender == admin);
        _;
    }
    constructor() {
        admin = msg.sender;
        numContracts = 0;
    }

    function sameAddress(address _addr) view private returns(bool) {
        for(uint i=0;i<numContracts;i++) {
            if(contracts[i].addr == _addr) {
                return true;
            }
        }
        return false;
    }

    function enrollContract(address _addr) public onlyAdmin {
        if(sameAddress(_addr)) {
            revert();
        }
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