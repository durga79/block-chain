// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title NovaArt
 * @dev ERC-721 NFT contract with IPFS metadata support.
 *      Each token is linked to a digital asset stored on IPFS.
 */
contract NovaArt is ERC721URIStorage, Ownable {
    uint256 private _nextTokenId;

    constructor() ERC721("Nova Art", "NART") Ownable(msg.sender) {}

    /**
     * @dev Mints a new NFT to the specified address with the given IPFS metadata URI.
     * @param to The recipient address.
     * @param tokenURI_ The IPFS URI pointing to the token metadata JSON.
     * @return tokenId The ID of the newly minted token.
     */
    function mint(address to, string memory tokenURI_) public onlyOwner returns (uint256) {
        uint256 tokenId = _nextTokenId;
        _nextTokenId++;
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, tokenURI_);
        return tokenId;
    }
}
