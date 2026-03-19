const hre = require("hardhat");

async function main() {
  console.log("Deploying NovaToken (ERC-20)...");

  const NovaToken = await hre.ethers.getContractFactory("NovaToken");
  const token = await NovaToken.deploy();
  await token.waitForDeployment();

  const address = await token.getAddress();
  console.log(`NovaToken deployed to: ${address}`);
  console.log(`View on Etherscan: https://sepolia.etherscan.io/address/${address}`);
  console.log("");
  console.log("Next steps:");
  console.log(`  1. Verify: npx hardhat verify --network sepolia ${address}`);
  console.log("  2. Distribute: npm run distribute:erc20");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
