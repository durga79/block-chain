const hre = require("hardhat");

async function main() {
  // ============================================================
  // CONFIGURATION — Update these values before running
  // ============================================================

  // Paste the deployed NovaArt contract address here
  const CONTRACT_ADDRESS = "0xF5379f38215DF75540dEBE67fc004f4fC039aB29";

  // Each entry: recipient wallet address + IPFS metadata URI
  // Upload your metadata JSON files to Pinata first, then paste the CIDs below
  const nftsToMint = [
    {
      to: "0x17E1fCeaf059C1680F4E278867bf2dfB638713da",
      tokenURI: "ipfs://bafkreib6hchvyrekgh7wr23vydxo3expzzk6y7ipnrd2avrgjatqvw75ru",
    },
    {
      to: "0x6b9d07919a3e23DF51c570A3bdDccffD8E74D0C6",
      tokenURI: "ipfs://bafkreigcf2xdug74unymxkqg2wapqfy57spvdll4bgs4uq4qhu5vnvy4zy",
    },
    {
      to: "0xe1093445b48dcD4D7a55203738289f014E2d5F05",
      tokenURI: "ipfs://bafkreieufklq3oxckraiwwjgkywt2befcupmwdbco2rxhwn7ewtpvj5g3u",
    },
    {
      to: "0xD9298890bc9eb67cD9A51c80E7Ec695B64DBBb54",
      tokenURI: "ipfs://bafkreifvmse5lctcrariiqfmwuw3htqlxqdjvzdqaj3kpjt6g6mc72pa4y",
    },
  ];

  // ============================================================

  console.log("Minting NovaArt NFTs to 4 wallets...\n");

  const NovaArt = await hre.ethers.getContractAt("NovaArt", CONTRACT_ADDRESS);

  for (let i = 0; i < nftsToMint.length; i++) {
    const { to, tokenURI } = nftsToMint[i];
    const tx = await NovaArt.mint(to, tokenURI);
    const receipt = await tx.wait();
    console.log(`Mint ${i + 1}: NFT #${i} minted to ${to}`);
    console.log(`  Token URI: ${tokenURI}`);
    console.log(`  Tx Hash: ${receipt.hash}`);
    console.log(`  Etherscan: https://sepolia.etherscan.io/tx/${receipt.hash}\n`);
  }

  console.log("All 4 NFTs minted successfully!");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
