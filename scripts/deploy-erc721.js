const hre = require("hardhat");

async function main() {
  console.log("Deploying NovaArt (ERC-721)...");

  const NovaArt = await hre.ethers.getContractFactory("NovaArt");
  const nft = await NovaArt.deploy();
  await nft.waitForDeployment();

  const address = await nft.getAddress();
  console.log(`NovaArt deployed to: ${address}`);
  console.log(`View on Etherscan: https://sepolia.etherscan.io/address/${address}`);
  console.log("");
  console.log("Next steps:");
  console.log(`  1. Verify: npx hardhat verify --network sepolia ${address}`);
  console.log("  2. Upload assets to Pinata (IPFS) and update mint-nfts.js");
  console.log("  3. Mint: npm run mint:nfts");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
