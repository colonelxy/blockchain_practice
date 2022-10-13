// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract SimpleStorage {
    uint256 favoriteNum;

    mapping(string => uint256) public nameToFavoriteNum;

    struct People {
        uint256 favoriteNum;
        string name;
    }

    People[] public people;

    function store(uint256 _favoriteNum) public virtual {
        favoriteNum = _favoriteNum;
    }

    function retrieve() public view returns (uint256) {
        return favoriteNum;
    }

    function addPerson(string memory _name, uint256 _favoriteNum) public {
        people.push(People(_favoriteNum, _name));
        nameToFavoriteNum[_name] = _favoriteNum;
    }
}
