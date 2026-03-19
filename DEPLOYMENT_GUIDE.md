# Step-by-Step Deployment Guide

This guide walks you through deploying both smart contracts and completing the assignment.

---

## Prerequisites

1. **Node.js** (v18 or later) — https://nodejs.org/
2. **MetaMask** browser extension — https://metamask.io/
3. **Alchemy account** (free) — https://www.alchemy.com/ (for Sepolia RPC URL)
4. **Etherscan account** (free) — https://etherscan.io/myapikey (for contract verification)
5. **Pinata account** (free) — https://pinata.cloud/ (for IPFS uploads)

---

## Step 1: Setup MetaMask Wallets

1. Install MetaMask browser extension
2. Create or import a wallet (this is your **deployer** account)
3. Create **4 additional accounts** in MetaMask (Account 2, 3, 4, 5) — these are the **recipient** wallets
4. Copy all 5 wallet addresses and save them somewhere
5. Switch to the **Sepolia test network** in MetaMask (Settings > Networks > Show test networks)

---

## Step 2: Get Sepolia Test ETH

You need test ETH in the **deployer account** for gas fees.

Use one of these faucets:
- Google Cloud Faucet: https://cloud.google.com/application/web3/faucet/ethereum/sepolia
- Chainlink Faucet: https://faucets.chain.link/sepolia
- Alchemy Faucet: https://www.alchemy.com/faucets/ethereum-sepolia

Request at least **0.1 Sepolia ETH** to the deployer wallet address.

---

## Step 3: Get API Keys

1. **Alchemy**: Create a free app for "Ethereum - Sepolia". Copy the HTTPS RPC URL.
2. **Etherscan**: Go to https://etherscan.io/myapikey and create a free API key.

---

## Step 4: Configure the Project

```bash
cd blockchain-assignment

# Install dependencies
npm install

# Create your .env file (copy from the example)
cp .env.example .env
```

Edit the `.env` file with your actual values:
```
SEPOLIA_RPC_URL=https://eth-sepolia.g.alchemy.com/v2/YOUR_ALCHEMY_KEY
DEPLOYER_PRIVATE_KEY=your_metamask_deployer_private_key
ETHERSCAN_API_KEY=your_etherscan_api_key
```

**To export your private key from MetaMask:**
MetaMask > Click account icon > Account Details > Show Private Key

**WARNING:** Never share your private key. Never commit the .env file to git.

---

## Step 5: Compile Contracts

```bash
npx hardhat compile
```

You should see: "Compiled 2 Solidity files successfully"

---

## Step 6: Deploy ERC-20 (NovaToken)

```bash
npx hardhat run scripts/deploy-erc20.js --network sepolia
```

Output will show the contract address. **Copy it.**

### Verify the contract on Etherscan:
```bash
npx hardhat verify --network sepolia YOUR_CONTRACT_ADDRESS
```

### Distribute tokens to 4 wallets:

1. Open `scripts/distribute-erc20.js`
2. Replace `PASTE_YOUR_CONTRACT_ADDRESS_HERE` with the deployed contract address
3. Replace the 4 `PASTE_WALLET_X_ADDRESS` entries with your MetaMask recipient addresses
4. Run:

```bash
npx hardhat run scripts/distribute-erc20.js --network sepolia
```

### Take Screenshots:
- [ ] Contract address page on sepolia.etherscan.io
- [ ] Verified contract source code tab
- [ ] Each of the 4 transfer transactions on Etherscan
- [ ] Token balance of at least one recipient wallet (Etherscan > Address > Token Holdings)

---

## Step 7: Upload Assets to IPFS (Pinata)

1. Go to https://app.pinata.cloud/
2. Click "Upload" > "File"
3. Upload **4 image files** (any digital art, photos, or graphics you want as NFT assets)
4. For each uploaded image, copy its **CID** (e.g., `QmXyz...`)

### Update metadata files:

1. Open each file in the `metadata/` folder (token1.json through token4.json)
2. Replace `PASTE_IMAGE_CID_X_HERE` with the actual CID of each image
   - Example: `"image": "ipfs://QmXyzAbC123..."`
3. Upload all 4 metadata JSON files to Pinata
4. Copy the CID for each metadata JSON file

---

## Step 8: Deploy ERC-721 (NovaArt)

```bash
npx hardhat run scripts/deploy-erc721.js --network sepolia
```

Copy the contract address.

### Verify:
```bash
npx hardhat verify --network sepolia YOUR_CONTRACT_ADDRESS
```

### Mint NFTs to 4 wallets:

1. Open `scripts/mint-nfts.js`
2. Replace `PASTE_YOUR_CONTRACT_ADDRESS_HERE` with the deployed NovaArt address
3. Replace each `PASTE_WALLET_X_ADDRESS` with the recipient wallet addresses
4. Replace each `PASTE_METADATA_CID_X` with the Pinata CID of each metadata JSON
   - Example: `"ipfs://QmAbCdEf123..."`
5. Run:

```bash
npx hardhat run scripts/mint-nfts.js --network sepolia
```

### Take Screenshots:
- [ ] Contract address page on sepolia.etherscan.io
- [ ] Verified contract source code tab
- [ ] Each of the 4 mint transactions on Etherscan
- [ ] Token metadata showing IPFS link (Etherscan > Token > Token ID > Token URI)
- [ ] Pinata dashboard showing pinned image and metadata files
- [ ] One IPFS metadata JSON rendered in browser (use https://gateway.pinata.cloud/ipfs/YOUR_CID)

---

## Step 9: Compile the Report

1. Open a Word document
2. Set font to **size 11**
3. Add the following sections:
   - **Part 1: ERC-20 Development and Deployment** — Insert screenshots with captions
   - **Part 2: ERC-721 Development and Deployment** — Insert screenshots with captions
   - **Part 3: Theoretical Analysis** — Copy content from `report/Part3_Theoretical_Report.md`
   - **References** — Harvard style (already formatted in the report)
4. Caption every screenshot: e.g., "Figure 1: NovaToken contract deployment on Sepolia Etherscan"
5. Export as PDF

---

## Step 10: Record and Upload Presentation

1. Create slides using the outline in `presentation/Slide_Outline_and_Speaker_Notes.md`
2. Use PowerPoint, Google Slides, or Canva
3. Insert screenshots from Parts 1 and 2 into slides 2-5
4. Record using **OBS Studio** (free) or **Loom** (free):
   - Share screen showing slides
   - Enable webcam (optional but recommended)
   - Follow speaker notes — aim for 10-15 minutes
5. Upload to **YouTube as Unlisted**:
   - YouTube Studio > Create > Upload Video > Set visibility to "Unlisted"
6. Copy the YouTube link and include it in your submission

---

## Project File Structure

```
blockchain-assignment/
├── contracts/
│   ├── NovaToken.sol          # ERC-20 contract
│   └── NovaArt.sol            # ERC-721 contract
├── scripts/
│   ├── deploy-erc20.js        # Deploy ERC-20
│   ├── distribute-erc20.js    # Send tokens to 4 wallets
│   ├── deploy-erc721.js       # Deploy ERC-721
│   └── mint-nfts.js           # Mint NFTs to 4 wallets
├── metadata/
│   ├── token1.json            # NFT metadata (update IPFS CIDs)
│   ├── token2.json
│   ├── token3.json
│   └── token4.json
├── report/
│   └── Part3_Theoretical_Report.md
├── presentation/
│   └── Slide_Outline_and_Speaker_Notes.md
├── hardhat.config.js
├── package.json
├── .env.example               # Copy to .env and fill in
└── DEPLOYMENT_GUIDE.md        # This file
```

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| "Insufficient funds" | Get more Sepolia ETH from a faucet |
| Contract verification fails | Wait 1-2 minutes after deployment, then retry |
| "Nonce too high" | Reset MetaMask account: Settings > Advanced > Clear Activity |
| IPFS content not loading | Use Pinata's dedicated gateway URL instead of public IPFS gateways |
| Transaction stuck/pending | Increase gas price in MetaMask or wait for network congestion to clear |
