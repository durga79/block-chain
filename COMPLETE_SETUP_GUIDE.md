# Complete Blockchain Assignment Setup Guide
## ERC-20 & ERC-721 Smart Contract Deployment on Sepolia Testnet

This guide walks you through every single step from scratch to completion.

---

## PART A: ACCOUNT SETUP (One-time setup, ~20 minutes)

---

### Step 1: Install MetaMask Wallet

1. Open Chrome browser
2. Go to: **https://metamask.io/download/**
3. Click **"Install MetaMask for Chrome"**
4. Click **"Add to Chrome"** > **"Add Extension"**
5. MetaMask icon will appear in your browser toolbar (top-right, puzzle icon > pin MetaMask)
6. Click **"Create a new wallet"**
7. Set a password (remember this!)
8. **IMPORTANT**: Write down your 12-word Secret Recovery Phrase on paper. Never share it.
9. Confirm the phrase and finish setup

### Step 2: Create 5 Wallet Accounts in MetaMask

You need **1 deployer account** (to deploy contracts) and **4 recipient accounts** (to receive tokens).

1. MetaMask already has **Account 1** — this is your **deployer**
2. Click the account icon (top-left circle) > **"Add account or hardware wallet"** > **"Add a new Ethereum account"**
3. Name it "Account 2" > click **Create**
4. Repeat to create **Account 3**, **Account 4**, **Account 5**
5. You now have 5 accounts

### Step 3: Copy All 5 Ethereum Addresses

For each account:
1. Switch to the account in MetaMask
2. Go to: **three dots menu** > **Account Details** > **Addresses**
3. Click the **copy icon** next to the **Ethereum** address (starts with `0x`)
4. Save it in a text file

You should have something like:
```
Account 1 (Deployer): 0xABC123...
Account 2 (Recipient 1): 0xDEF456...
Account 3 (Recipient 2): 0xGHI789...
Account 4 (Recipient 3): 0xJKL012...
Account 5 (Recipient 4): 0xMNO345...
```

### Step 4: Get Free Sepolia Test ETH

You need test ETH in your **deployer account (Account 1)** to pay for gas fees.

1. Copy the **Account 1 Ethereum address**
2. Go to **Google Cloud Faucet**: https://cloud.google.com/application/web3/faucet/ethereum/sepolia
3. Paste your Account 1 address
4. Click **"Receive"** to get 0.05 Sepolia ETH
5. Wait ~30 seconds for the transaction to complete

**Alternative faucets if Google doesn't work:**
- Chainlink: https://faucets.chain.link/sepolia
- Alchemy: https://www.alchemy.com/faucets/ethereum-sepolia

### Step 5: Create an Alchemy Account (Free RPC URL)

Alchemy provides the connection between your code and the Sepolia blockchain.

1. Go to: **https://www.alchemy.com/**
2. Click **"Sign Up"** (use Google or email)
3. Once logged in, go to **Dashboard** > **"Create new app"**
4. Set:
   - Name: Any name (e.g., "Blockchain Assignment")
   - Network: **Ethereum**
   - Sub-network: **Sepolia**
5. Click **"Create App"**
6. On the app page, you'll see **"Endpoint URL"** — click **"Copy"**
7. It looks like: `https://eth-sepolia.g.alchemy.com/v2/YOUR_API_KEY`
8. **Save this URL** — you'll need it later

### Step 6: Create an Etherscan Account (Free API Key)

Etherscan API key is needed to verify your contracts on the blockchain explorer.

1. Go to: **https://etherscan.io/register**
2. Create an account (email + password)
3. Verify your email
4. Log in at: **https://etherscan.io/login**
5. Go to: **https://etherscan.io/myapikey**
6. Click **"Add"** button
7. Give it any name (e.g., "Assignment")
8. Copy the **API Key** that's generated
9. **Save this key** — you'll need it later

### Step 7: Export Your Deployer Private Key from MetaMask

1. Open MetaMask
2. Make sure you're on **Account 1**
3. Click the **three dots** (menu) > **"Account Details"**
4. Click **"Show Private Key"** (or go to Addresses > click Ethereum > Show Private Key)
5. Enter your MetaMask password
6. Copy the private key (64-character hex string)
7. **Save it securely** — NEVER share this with anyone

**WARNING**: The private key gives full access to your wallet. Only use it in the `.env` file on your own computer.

### Step 8: Sign Up for Pinata (Free IPFS Storage)

Pinata is used to store NFT images and metadata on IPFS (decentralised file storage).

1. Go to: **https://pinata.cloud/**
2. Click **"Start Building Free"**
3. Sign up with email or Google
4. You'll land on the Pinata dashboard — you'll use this later to upload files

---

## PART B: PROJECT SETUP (Coding, ~15 minutes)

---

### Step 9: Install Node.js

1. Go to: **https://nodejs.org/**
2. Download the **LTS** version (recommended)
3. Install it (next > next > finish)
4. Verify installation — open terminal and run:
```bash
node --version
npm --version
```
Both should show version numbers.

### Step 10: Setup the Project

Open your terminal and run these commands one by one:

```bash
# Navigate to your home directory
cd ~

# Create the project folder
mkdir blockchain-assignment
cd blockchain-assignment

# Initialize Hardhat project
npx hardhat init
```

When Hardhat asks, select:
- **"Create a JavaScript project"**
- Press Enter for all defaults
- Say **Yes** to install dependencies

Then install additional packages:

```bash
npm install @openzeppelin/contracts dotenv
npm install --save-dev @nomicfoundation/hardhat-toolbox
```

### Step 11: Create the Configuration File

Delete the default `hardhat.config.js` and create a new one with this content:

**File: `hardhat.config.js`**
```javascript
require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: {
    version: "0.8.28",
    settings: {
      evmVersion: "cancun",
    },
  },
  networks: {
    sepolia: {
      url: process.env.SEPOLIA_RPC_URL || "",
      accounts:
        process.env.DEPLOYER_PRIVATE_KEY !== undefined
          ? [process.env.DEPLOYER_PRIVATE_KEY]
          : [],
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY || "",
  },
};
```

### Step 12: Create the .env File

Create a file named `.env` in the project root (NOT `.env.example`):

**File: `.env`**
```
SEPOLIA_RPC_URL=paste_your_alchemy_endpoint_url_here
DEPLOYER_PRIVATE_KEY=paste_your_metamask_private_key_here
ETHERSCAN_API_KEY=paste_your_etherscan_api_key_here
```

Replace each value with the actual keys you saved from Steps 5, 6, and 7.

**IMPORTANT**: Make sure the `SEPOLIA_RPC_URL` is pasted only ONCE. Don't duplicate the `/v2/...` part.

---

## PART C: ERC-20 TOKEN (Part 1 of Assignment)

---

### Step 13: Create the ERC-20 Smart Contract

Delete any existing files in the `contracts/` folder, then create:

**File: `contracts/NovaToken.sol`**
```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract NovaToken is ERC20 {
    constructor() ERC20("Nova Token", "NVT") {
        _mint(msg.sender, 200 * 10 ** decimals());
    }
}
```

**What this does**: Creates a token called "Nova Token" with symbol "NVT" and mints 200 tokens to the deployer's wallet.

### Step 14: Create the ERC-20 Deployment Script

Delete any existing files in the `scripts/` folder, then create:

**File: `scripts/deploy-erc20.js`**
```javascript
const hre = require("hardhat");

async function main() {
  console.log("Deploying NovaToken (ERC-20)...");
  const NovaToken = await hre.ethers.getContractFactory("NovaToken");
  const token = await NovaToken.deploy();
  await token.waitForDeployment();
  const address = await token.getAddress();
  console.log(`NovaToken deployed to: ${address}`);
  console.log(`View on Etherscan: https://sepolia.etherscan.io/address/${address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
```

### Step 15: Create the ERC-20 Distribution Script

**File: `scripts/distribute-erc20.js`**
```javascript
const hre = require("hardhat");

async function main() {
  // CHANGE THESE VALUES:
  const CONTRACT_ADDRESS = "PASTE_DEPLOYED_CONTRACT_ADDRESS";
  const recipients = [
    "PASTE_ACCOUNT_2_ADDRESS",
    "PASTE_ACCOUNT_3_ADDRESS",
    "PASTE_ACCOUNT_4_ADDRESS",
    "PASTE_ACCOUNT_5_ADDRESS",
  ];
  const amountPerWallet = hre.ethers.parseUnits("50", 18);

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
```

### Step 16: Compile the Contracts

```bash
npx hardhat compile
```

Expected output: `Compiled X Solidity files successfully`

If you get errors about `mcopy`, make sure your Solidity version is `0.8.28` and `evmVersion` is `"cancun"` in `hardhat.config.js`.

### Step 17: Deploy ERC-20 to Sepolia

```bash
npx hardhat run scripts/deploy-erc20.js --network sepolia
```

Output will show something like:
```
NovaToken deployed to: 0x1234...abcd
```

**Copy the contract address** — you need it for the next steps.

**SCREENSHOT 1**: Take a screenshot of this terminal output.

### Step 18: Verify ERC-20 on Etherscan

Replace `YOUR_CONTRACT_ADDRESS` with the actual address from Step 17:

```bash
npx hardhat verify --network sepolia YOUR_CONTRACT_ADDRESS
```

Expected output: `Successfully verified contract NovaToken`

### Step 19: Distribute ERC-20 Tokens

1. Open `scripts/distribute-erc20.js`
2. Replace `PASTE_DEPLOYED_CONTRACT_ADDRESS` with the contract address from Step 17
3. Replace the 4 `PASTE_ACCOUNT_X_ADDRESS` entries with your Account 2, 3, 4, 5 Ethereum addresses
4. Run:

```bash
npx hardhat run scripts/distribute-erc20.js --network sepolia
```

**SCREENSHOT 2**: Take a screenshot of the terminal output showing all 4 transfers.

### Step 20: Take ERC-20 Screenshots on Etherscan

Open your browser and take screenshots of:

1. **SCREENSHOT 3**: Go to `https://sepolia.etherscan.io/address/YOUR_CONTRACT_ADDRESS` — shows the contract page with all transactions
2. **SCREENSHOT 4**: Click the **"Contract"** tab — shows verified source code (green checkmark)
3. **SCREENSHOT 5**: Click the **"Token Transfers (ERC-20)"** tab — shows all token transfers
4. **SCREENSHOT 6**: Click any **transaction hash** — shows full transaction details
5. **SCREENSHOT 7**: Go to `https://sepolia.etherscan.io/address/YOUR_ACCOUNT_2_ADDRESS` — shows token balance of a recipient

---

## PART D: ERC-721 NFT TOKEN (Part 2 of Assignment)

---

### Step 21: Create the ERC-721 Smart Contract

**File: `contracts/NovaArt.sol`**
```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NovaArt is ERC721URIStorage, Ownable {
    uint256 private _nextTokenId;

    constructor() ERC721("Nova Art", "NART") Ownable(msg.sender) {}

    function mint(address to, string memory tokenURI_) public onlyOwner returns (uint256) {
        uint256 tokenId = _nextTokenId;
        _nextTokenId++;
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, tokenURI_);
        return tokenId;
    }
}
```

**What this does**: Creates an NFT contract called "Nova Art" with symbol "NART". Only the owner can mint new NFTs, each linked to a metadata URI on IPFS.

### Step 22: Create 4 NFT Images

You need 4 images to use as NFT assets. Options:

- **Option A**: Use AI — ask ChatGPT/Gemini with this prompt:
  ```
  Generate 4 separate digital art images for an NFT collection called "Nova Art":
  1. A futuristic digital landscape with neon lights and a city skyline
  2. An abstract network of interconnected glowing nodes and chains
  3. A blooming geometric flower made of blockchain-like hexagonal patterns
  4. A mosaic pattern made of colorful cryptographic hash symbols
  ```
- **Option B**: Download 4 free images from https://unsplash.com/ or https://www.pexels.com/
- **Option C**: Create 4 simple images in Paint

Save them as `image1.png`, `image2.png`, `image3.png`, `image4.png`.

### Step 23: Upload Images to Pinata (IPFS)

1. Go to: **https://app.pinata.cloud/**
2. Log in
3. Click **"Upload"** > **"File"**
4. Upload `image1.png` — after upload, copy the **CID** (looks like `bafybei...` or `Qm...`)
5. Repeat for `image2.png`, `image3.png`, `image4.png`
6. Save all 4 image CIDs:

```
Image 1 CID: bafybei...
Image 2 CID: bafybei...
Image 3 CID: bafybei...
Image 4 CID: bafybei...
```

### Step 24: Create NFT Metadata JSON Files

Create a `metadata/` folder in your project and create 4 JSON files:

**File: `metadata/token1.json`**
```json
{
  "name": "Nova Art #1 - Digital Horizon",
  "description": "A digital landscape artwork representing the dawn of decentralised technology.",
  "image": "ipfs://PASTE_IMAGE_1_CID_HERE",
  "attributes": [
    { "trait_type": "Collection", "value": "Nova Art" },
    { "trait_type": "Edition", "value": "1 of 4" }
  ]
}
```

**File: `metadata/token2.json`**
```json
{
  "name": "Nova Art #2 - Chain Link",
  "description": "An abstract representation of interconnected blockchain nodes.",
  "image": "ipfs://PASTE_IMAGE_2_CID_HERE",
  "attributes": [
    { "trait_type": "Collection", "value": "Nova Art" },
    { "trait_type": "Edition", "value": "2 of 4" }
  ]
}
```

**File: `metadata/token3.json`**
```json
{
  "name": "Nova Art #3 - Ledger Bloom",
  "description": "A generative art piece inspired by distributed ledger network growth patterns.",
  "image": "ipfs://PASTE_IMAGE_3_CID_HERE",
  "attributes": [
    { "trait_type": "Collection", "value": "Nova Art" },
    { "trait_type": "Edition", "value": "3 of 4" }
  ]
}
```

**File: `metadata/token4.json`**
```json
{
  "name": "Nova Art #4 - Hash Mosaic",
  "description": "A mosaic artwork composed of cryptographic hash patterns.",
  "image": "ipfs://PASTE_IMAGE_4_CID_HERE",
  "attributes": [
    { "trait_type": "Collection", "value": "Nova Art" },
    { "trait_type": "Edition", "value": "4 of 4" }
  ]
}
```

**IMPORTANT**: Replace `PASTE_IMAGE_X_CID_HERE` with the actual CIDs from Step 23.

### Step 25: Upload Metadata JSON Files to Pinata

1. Go to **Pinata** dashboard
2. Upload each JSON file: `token1.json`, `token2.json`, `token3.json`, `token4.json`
3. Copy the **CID** for each metadata file:

```
Metadata 1 CID: bafkrei...
Metadata 2 CID: bafkrei...
Metadata 3 CID: bafkrei...
Metadata 4 CID: bafkrei...
```

### Step 26: Create the NFT Minting Script

**File: `scripts/mint-nfts.js`**
```javascript
const hre = require("hardhat");

async function main() {
  // CHANGE THESE VALUES:
  const CONTRACT_ADDRESS = "PASTE_DEPLOYED_NFT_CONTRACT_ADDRESS";

  const nftsToMint = [
    {
      to: "PASTE_ACCOUNT_2_ADDRESS",
      tokenURI: "ipfs://PASTE_METADATA_1_CID",
    },
    {
      to: "PASTE_ACCOUNT_3_ADDRESS",
      tokenURI: "ipfs://PASTE_METADATA_2_CID",
    },
    {
      to: "PASTE_ACCOUNT_4_ADDRESS",
      tokenURI: "ipfs://PASTE_METADATA_3_CID",
    },
    {
      to: "PASTE_ACCOUNT_5_ADDRESS",
      tokenURI: "ipfs://PASTE_METADATA_4_CID",
    },
  ];

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
```

### Step 27: Compile, Deploy, and Verify ERC-721

```bash
# Compile (if not already done)
npx hardhat compile

# Deploy
npx hardhat run scripts/deploy-erc721.js --network sepolia
```

Copy the deployed contract address from the output.

```bash
# Verify (replace with your actual address)
npx hardhat verify --network sepolia YOUR_NFT_CONTRACT_ADDRESS
```

**You also need a deploy script for ERC-721:**

**File: `scripts/deploy-erc721.js`**
```javascript
const hre = require("hardhat");

async function main() {
  console.log("Deploying NovaArt (ERC-721)...");
  const NovaArt = await hre.ethers.getContractFactory("NovaArt");
  const nft = await NovaArt.deploy();
  await nft.waitForDeployment();
  const address = await nft.getAddress();
  console.log(`NovaArt deployed to: ${address}`);
  console.log(`View on Etherscan: https://sepolia.etherscan.io/address/${address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
```

### Step 28: Mint NFTs

1. Open `scripts/mint-nfts.js`
2. Replace `PASTE_DEPLOYED_NFT_CONTRACT_ADDRESS` with the address from Step 27
3. Replace the 4 account addresses with your Account 2, 3, 4, 5 addresses
4. Replace the 4 metadata CIDs with the CIDs from Step 25
5. Run:

```bash
npx hardhat run scripts/mint-nfts.js --network sepolia
```

**SCREENSHOT 8**: Take a screenshot of the terminal output showing all 4 mints.

### Step 29: Take ERC-721 Screenshots on Etherscan

1. **SCREENSHOT 9**: Go to `https://sepolia.etherscan.io/address/YOUR_NFT_CONTRACT_ADDRESS` — contract page
2. **SCREENSHOT 10**: Click **"Contract"** tab — verified source code
3. **SCREENSHOT 11**: Click any **mint transaction hash** — full transaction details showing ERC-721 token transfer
4. **SCREENSHOT 12**: Click the **NFT token ID** in any transaction — shows Token URI (IPFS link)
5. **SCREENSHOT 13**: Open the Token URI in browser (Pinata gateway) — shows JSON metadata with IPFS image link
6. **SCREENSHOT 14**: Pinata dashboard showing all uploaded files (images + metadata JSONs)

---

## PART E: FINAL REPORT & PRESENTATION

---

### Step 30: Write the Report

Open **Microsoft Word** or **Google Docs**. Set font to **size 11**.

Structure:

```
COVER PAGE
- Assignment Title: Smart Contracts and Distributed Ledger Technology
- Your Name
- Student ID
- Module Name
- Date

PART 1: ERC-20 TOKEN DEPLOYMENT
- Brief explanation of what ERC-20 is
- Contract details (Name: Nova Token, Symbol: NVT, Supply: 200)
- Insert Screenshots 1-7 with captions
  Example caption: "Figure 1: NovaToken contract deployment on Sepolia Etherscan"

PART 2: ERC-721 NFT DEPLOYMENT
- Brief explanation of what ERC-721 is and IPFS
- Contract details (Name: Nova Art, Symbol: NART)
- Insert Screenshots 8-14 with captions
- Explain the link: Token → Metadata on IPFS → Image on IPFS

PART 3: THEORETICAL ANALYSIS
- Copy from the report file (Part3_Theoretical_Report.md)
- 4 use cases, 400-500 words each:
  1. Supply Chain Management — IBM Food Trust
  2. Healthcare — Estonia's KSI Blockchain
  3. Financial Services — JPMorgan Kinexys
  4. Government/Land Registry — Georgia's Blockchain Land Registry
- Harvard references included at end of each use case

REFERENCES
- Compile all references at the end (Harvard style)
```

### Step 31: Create Presentation (5-10 slides)

Use **PowerPoint** or **Google Slides**.

| Slide | Content | Time |
|-------|---------|------|
| 1 | Title: Name, ID, Module, Date | 15 sec |
| 2 | ERC-20 overview + Etherscan screenshot | 2 min |
| 3 | ERC-20 distribution + transaction screenshots | 1.5 min |
| 4 | ERC-721 overview + Etherscan screenshot | 2 min |
| 5 | ERC-721 minting + IPFS screenshots | 1.5 min |
| 6 | Use Case 1 (Supply Chain) + Use Case 2 (Healthcare) | 3 min |
| 7 | Use Case 3 (Finance) + Use Case 4 (Government) | 3 min |
| 8 | Conclusion: Challenges & Disruptive aspects of Blockchain | 1 min |

**Total: ~14 minutes** (within the 10-15 min requirement)

### Step 32: Record and Upload Presentation

1. Download **OBS Studio** (free): https://obsproject.com/ OR use **Loom** (free): https://www.loom.com/
2. Record yourself presenting with screen share (show slides)
3. Aim for **10-15 minutes** (15 min strict maximum)
4. Upload to **YouTube**:
   - Go to https://studio.youtube.com/
   - Click **"Create"** > **"Upload Video"**
   - Upload your recorded video
   - Set visibility to **"Unlisted"** (NOT Private, NOT Public)
   - Copy the YouTube link
5. Include the YouTube link in your submission

---

## TROUBLESHOOTING

| Problem | Solution |
|---------|----------|
| `Error HH8: private key too short` | Your private key in `.env` is wrong. Get it from MetaMask: three dots > Account Details > Show Private Key. It should be 64 hex characters. |
| `Insufficient funds for transfer` | Get more Sepolia ETH from the faucet (Step 4) |
| `Error: mcopy not found` | Change Solidity version to `0.8.28` and add `evmVersion: "cancun"` in hardhat.config.js |
| `Contract verification failed` | Wait 1-2 minutes after deployment, then retry. Make sure Etherscan API key is correct. |
| `SEPOLIA_RPC_URL not working` | Check you didn't paste the URL twice (e.g., `/v2/KEY/v2/KEY`). Should be single: `/v2/KEY` |
| `Etherscan login: Invalid credentials` | Click "Sign Up" to create a new account, or use "Forgot Password" |
| `Transaction stuck/pending` | Wait a few minutes. If still stuck: MetaMask > Settings > Advanced > Clear Activity Tab Data |
| `IPFS content not loading` | Use Pinata's gateway: `https://gateway.pinata.cloud/ipfs/YOUR_CID` |
| `npx hardhat not found` | Run `npm install` first in the project directory |
| `pixabay asking for payment` | That's iStock redirect. Use the green "Free Download" button on pixabay, or use https://unsplash.com/ or https://www.pexels.com/ instead |

---

## QUICK REFERENCE: ALL LINKS

| Service | URL | What You Need |
|---------|-----|---------------|
| MetaMask | https://metamask.io/download/ | Browser wallet |
| Google Faucet | https://cloud.google.com/application/web3/faucet/ethereum/sepolia | Free Sepolia ETH |
| Chainlink Faucet | https://faucets.chain.link/sepolia | Alternative faucet |
| Alchemy | https://www.alchemy.com/ | Sepolia RPC URL |
| Etherscan | https://etherscan.io/register | API key for verification |
| Etherscan API Keys | https://etherscan.io/myapikey | Create API key here |
| Sepolia Etherscan | https://sepolia.etherscan.io/ | View contracts & transactions |
| Pinata | https://pinata.cloud/ | IPFS file storage |
| Pinata Dashboard | https://app.pinata.cloud/ | Upload files here |
| Node.js | https://nodejs.org/ | JavaScript runtime |
| OBS Studio | https://obsproject.com/ | Screen recording |
| Loom | https://www.loom.com/ | Alternative screen recording |
| YouTube Studio | https://studio.youtube.com/ | Upload presentation |
| Unsplash | https://unsplash.com/ | Free images |
| Pexels | https://www.pexels.com/ | Free images |

---

## KEYS YOU NEED TO COLLECT (Summary)

Before starting the coding, make sure you have ALL of these:

| Key | Where to Get It | Looks Like |
|-----|-----------------|------------|
| Deployer Ethereum Address | MetaMask > Account 1 > Copy Ethereum address | `0xD79E9E7aB707...` |
| 4 Recipient Addresses | MetaMask > Accounts 2-5 > Copy Ethereum address | `0x17E1fCeaf05...` |
| Deployer Private Key | MetaMask > Account 1 > three dots > Account Details > Show Private Key | `bdad984d6913...` (64 hex chars) |
| Sepolia RPC URL | Alchemy > Your App > Endpoint URL | `https://eth-sepolia.g.alchemy.com/v2/abc123` |
| Etherscan API Key | Etherscan > My API Keys > Add | `DY2AMYY9J2I1...` (short alphanumeric) |

Once you have all 5, you're ready to code and deploy!
