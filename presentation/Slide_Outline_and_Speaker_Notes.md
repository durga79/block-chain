# Presentation Outline — Smart Contracts and DLT Assignment
## 10-15 Minutes | 8 Slides

---

## Slide 1: Title Slide
**Content:**
- Assignment Title: Smart Contracts and Distributed Ledger Technology
- Student Name: [Your Name]
- Student ID: [Your ID]
- Module: [Module Name]
- Date: [Submission Date]

**Speaker Notes (15 seconds):**
"Good afternoon. This presentation covers my practical deployment of ERC-20 and ERC-721 smart contracts on the Ethereum Sepolia testnet, followed by an analysis of four real-world use cases of blockchain and distributed ledger technology."

---

## Slide 2: ERC-20 — NovaToken Contract Overview
**Content:**
- Contract Name: NovaToken (NVT)
- Standard: ERC-20 (OpenZeppelin v5.x)
- Total Supply: 200 tokens
- Network: Sepolia Testnet
- Framework: Hardhat + Solidity 0.8.24
- Screenshot: Contract address on Sepolia Etherscan
- Screenshot: Verified contract source code

**Speaker Notes (2 minutes):**
"For Part One, I developed an ERC-20 token called NovaToken with the symbol NVT. The contract was written in Solidity version 0.8.24, inheriting from OpenZeppelin's audited ERC-20 implementation. The constructor mints a fixed supply of 200 tokens to the deployer's wallet. I deployed the contract to the Sepolia test network using Hardhat, and as you can see on the Etherscan screenshot, the contract is verified and publicly viewable at this address."

---

## Slide 3: ERC-20 — Token Distribution
**Content:**
- Distribution: 50 NVT to each of 4 wallets (200 total)
- Table showing: Wallet Address | Amount | Transaction Hash
- Screenshots: 4 transfer transactions on Sepolia Etherscan
- Screenshot: Token balance of one recipient wallet

**Speaker Notes (1.5 minutes):**
"I then distributed all 200 tokens equally — 50 tokens to each of four separate wallet accounts on the Sepolia network. Each transfer was executed using a Hardhat script calling the ERC-20 transfer function. Here you can see the four transaction hashes on Etherscan, each confirming the successful transfer of 50 NVT tokens. The deployer wallet now holds zero tokens, and each recipient holds exactly 50."

---

## Slide 4: ERC-721 — NovaArt NFT Contract Overview
**Content:**
- Contract Name: NovaArt (NART)
- Standard: ERC-721 with URI Storage
- Features: Owner-only minting, IPFS metadata linking
- Network: Sepolia Testnet
- IPFS Provider: Pinata
- Screenshot: Contract address on Sepolia Etherscan
- Screenshot: Verified contract source code

**Speaker Notes (2 minutes):**
"For Part Two, I created an ERC-721 NFT contract called NovaArt. This contract extends OpenZeppelin's ERC721URIStorage, which allows each token to be linked to a unique metadata URI stored on IPFS. The mint function is restricted to the contract owner and accepts a recipient address and an IPFS metadata URI. Each metadata JSON file follows the ERC-721 metadata standard, containing the asset name, description, and an IPFS link to the associated digital image."

---

## Slide 5: ERC-721 — NFT Minting and IPFS Integration
**Content:**
- 4 NFTs minted to 4 separate wallets
- Table showing: Token ID | Wallet | IPFS Metadata URI
- Screenshots: Mint transactions on Etherscan
- Screenshot: Pinata dashboard showing pinned files
- Screenshot: IPFS metadata JSON showing image link

**Speaker Notes (1.5 minutes):**
"I uploaded four digital art assets to Pinata's IPFS service, then created metadata JSON files referencing each image via its IPFS CID. These metadata files were also pinned on IPFS. I then minted four NFTs, each to a different wallet, with the tokenURI pointing to the corresponding IPFS metadata. As you can see on Etherscan, each mint transaction shows the token ID and recipient. Clicking through to the token metadata reveals the IPFS link to the associated digital asset, demonstrating the complete chain from token to asset."

---

## Slide 6: Use Case 1 (Supply Chain) and Use Case 2 (Healthcare)
**Content:**
- **Supply Chain: IBM Food Trust**
  - Partners: Walmart, Nestle, Carrefour
  - Key stat: Traceability from 7 days to 2.2 seconds
  - Challenge: TradeLens shutdown — governance failure
- **Healthcare: Estonia KSI Blockchain**
  - Partner: Guardtime
  - Key stat: 1M+ records secured, 99% health data digitised
  - Challenge: Interoperability across EU borders

**Speaker Notes (3 minutes):**
"Moving to the theoretical analysis. My first domain is supply chain management, where IBM Food Trust demonstrated that blockchain can reduce food traceability time from nearly seven days to just 2.2 seconds. However, the shutdown of TradeLens in 2022 reveals a critical lesson: blockchain platforms require neutral governance. Competitors will not participate on a platform controlled by a rival.

My second domain is healthcare. Estonia deployed Guardtime's KSI blockchain to secure over one million patient health records — importantly, no patient data is stored on-chain, only cryptographic hashes for integrity verification. This model demonstrates that blockchain serves best as a trust layer rather than a data store. The primary challenge remains cross-border interoperability within the EU."

---

## Slide 7: Use Case 3 (Finance) and Use Case 4 (Government)
**Content:**
- **Finance: JPMorgan Kinexys / JPM Coin**
  - First bank-issued deposit token (USD)
  - Key stat: $1.5 trillion+ processed, $2B/day
  - Challenge: Regulatory complexity across jurisdictions
- **Government: Georgia Blockchain Land Registry**
  - Partners: NAPR + Bitfury
  - Key stat: 300,000+ land titles on Bitcoin blockchain
  - Challenge: Legal framework alignment, digital divide

**Speaker Notes (3 minutes):**
"My third domain is financial services. JPMorgan's Kinexys platform has processed over 1.5 trillion dollars using its JPM Coin deposit token, enabling near-instant 24/7 settlement that eliminates traditional T+2 delays. This is significant because the world's largest bank committing to blockchain-based settlement validates the technology at institutional scale. The challenge lies in navigating regulatory frameworks across multiple jurisdictions simultaneously.

My fourth domain is government land registries. Georgia partnered with Bitfury to create the world's first blockchain-based land registry, recording over 300,000 titles anchored to the Bitcoin blockchain. The World Bank subsequently ranked Georgia third globally for ease of property registration. However, legal frameworks must evolve to grant blockchain records equivalent standing to traditional entries, and the digital divide limits accessibility in rural areas."

---

## Slide 8: Conclusion — Challenges and Disruptive Potential
**Content:**
- **Disruptive themes across all domains:**
  - Trust without intermediaries
  - Near-instant verification and settlement
  - Tamper-proof audit trails
- **Cross-cutting challenges:**
  - The oracle problem (data accuracy at entry)
  - Regulatory lag across jurisdictions
  - Governance and interoperability
  - Scalability and energy concerns
  - GDPR tension with immutability
- Final statement: Technology is proven; adoption depends on governance, regulation, and integration

**Speaker Notes (1 minute):**
"In conclusion, across all four domains, blockchain technology has demonstrated its disruptive capacity through immutability, transparency, and disintermediation. However, persistent challenges remain: the oracle problem, regulatory uncertainty, interoperability gaps, and the fundamental tension between blockchain immutability and data protection rights like GDPR's right to erasure. The evidence shows the technology works — what determines success is governance, regulatory alignment, and the willingness of incumbents to collaborate. Thank you."

---

## Presentation Tips
- Total time: approximately 14 minutes (within 10-15 min requirement)
- Use a clean, professional slide template (white/dark blue recommended)
- Include Etherscan screenshots prominently in slides 2-5
- Record using screen share + webcam (OBS Studio or Loom recommended)
- Upload to YouTube as **Unlisted** (not Private, not Public)
- Include YouTube link in your submission document
