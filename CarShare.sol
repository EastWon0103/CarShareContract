// SPDX-License-Identifier: UNLICENSED
pragma solidity >= 0.4.11;
contract CarShare {
    struct Customer {
        address payable addr;
        uint startTime;
        uint endTime;
    }

    address payable carOwner;
    string carModel;
    string carNumber;
    uint price;

    uint numCustomers;
    mapping (uint => Customer) customers;

    constructor(string memory _carModel, string memory _carNumber, uint _price) {
        carOwner = payable(msg.sender);
        carModel = _carModel;
        carNumber = _carNumber;
        price = _price;
        numCustomers = 0;
    }


    // 실행한 사람이 렌트 오너인지 아닌지
    function isRentOwner() view public returns(bool){
        for(uint i=0;i<numCustomers;i++) {
            if(customers[i].startTime < block.timestamp &&  block.timestamp < customers[i].endTime && customers[i].addr == msg.sender) {
                return true;
            }
        }
        
        return false;
    }

    // reservation이 가능한지 확인 -> 가능하면 true,아니면 false
    function canReservation(uint _startTime, uint _endTime) view public returns (bool){
        for(uint i=0;i<numCustomers;i++) {
            if(customers[i].startTime < _startTime &&  _startTime< customers[i].endTime) {
                return false;
            }
            if(customers[i].startTime < _endTime &&  _endTime < customers[i].endTime) {
                return false;
            }
        }

        return true;
    }

    // 예약하기
    function userReservation(uint _startTime, uint _endTime) public {
        // 스타트타임이 먼저인지
        if(_startTime > _endTime) {
            revert();
        }

        // 예약날짜가 현재 시간보다 과거에 있는지
        if(block.timestamp > _startTime) {
            revert();
        }
        
        // 스케쥴이 가능한지
        if(!canReservation(_startTime, _endTime)) {
            revert();
        }

        Customer storage cus = customers[numCustomers++];
        cus.addr = payable(msg.sender);
        cus.startTime = _startTime;
        cus.endTime = _endTime;
    }
    
}