const hre = require("hardhat");

async function main() {
  // ============================================================
  // CONFIGURATION — Update these values before running
  // ============================================================

  // Paste the deployed NovaToken contract address here
  const CONTRACT_ADDRESS = "0x5293E1F78E31Bab3E3C83B0b829ff7Ff526B44e9";

  // Paste the 4 recipient wallet addresses here (from MetaMask)
  const recipients = [
    "0x17E1fCeaf059C1680F4E278867bf2dfB638713da",
    "0x6b9d07919a3e23DF51c570A3bdDccffD8E74D0C6",
    "0xe1093445b48dcD4D7a55203738289f014E2d5F05",
    "0xD9298890bc9eb67cD9A51c80E7Ec695B64DBBb54",
  ];

  // Amount of tokens to send to each wallet (50 each = 200 total)
  const amountPerWallet = hre.ethers.parseUnits("50", 18);

  // ============================================================

  console.log("Distributing NovaToken (NVT) to 4 wallets...\n");

  const NovaToken = await hre.ethers.getContractAt("NovaToken", CONTRACT_ADDRESS);

  for (let i = 0; i < recipients.length; i++) {
    const tx = await NovaToken.transfer(recipients[i], amountPerWallet);
    const receipt = await tx.wait();
    console.log(`Transfer ${i + 1}: Sent 50 NVT to ${recipients[i]}`);
    console.log(`  Tx Hash: ${receipt.hash}`);
    console.log(`  Etherscan: https://sepolia.etherscan.io/tx/${receipt.hash}\n`);
  }

  console.log("All 200 tokens distributed successfully!");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
