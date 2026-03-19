# Part Three: Theoretical Assignment — Use Cases of Smart Contracts and Distributed Ledger Technology

---

## Use Case 1: Supply Chain Management — IBM Food Trust

The global food supply chain involves numerous stakeholders, from farmers and processors to distributors and retailers, creating a fragmented ecosystem where traceability is inherently difficult. When foodborne illness outbreaks occur, identifying the source of contamination through traditional paper-based systems can take days or even weeks, posing serious public health risks. Blockchain-based solutions address this challenge by providing a shared, immutable, and transparent ledger accessible to all authorised participants in the supply chain.

IBM Food Trust, built on Hyperledger Fabric, is a permissioned blockchain platform developed through a partnership between Walmart and IBM. Pilot projects began in 2016 with pork traceability in China and mango traceability in the United States (Kamath, 2018). The results were striking: tracing a package of sliced mangoes to its source farm took six days, eighteen hours, and twenty-six minutes using traditional methods, but only 2.2 seconds using the blockchain solution (Hyperledger Foundation, 2022). Following this success, Walmart mandated blockchain traceability for all leafy greens suppliers by 2020. Major food corporations including Nestle, Carrefour, and Unilever subsequently joined the network, extending traceability to products such as infant formula and instant mashed potato across European markets (IBM, 2019). A separate but related initiative, TradeLens, was jointly developed by Maersk and IBM to digitise global shipping documentation, attracting over 300 members and capturing more than 154 million shipping events before its discontinuation in November 2022 (Maersk, 2022).

The disruptive potential of blockchain in supply chain management lies in its ability to create end-to-end transparency and accountability. Smart contracts can automate compliance verification, trigger payments upon delivery confirmation, and reduce counterfeiting through provenance tracking. The World Economic Forum (2019) has highlighted how such technology could fundamentally reshape food safety by enabling near-instantaneous recall responses during contamination events.

However, significant challenges persist. The shutdown of TradeLens demonstrates that technology alone is insufficient; industry-wide adoption requires neutral governance structures, as competitors were reluctant to join a platform controlled by a direct rival (Maersk, 2022). Furthermore, the reliance on permissioned blockchains raises questions about whether such implementations offer genuine decentralisation or are merely enhanced shared databases. The onboarding of smaller suppliers with limited technological capability remains a barrier, as does the fundamental 'garbage in, garbage out' problem — blockchain guarantees data immutability, not data accuracy at the point of entry (Kshetri, 2018). Additionally, the energy consumption and computational overhead associated with maintaining distributed ledger infrastructure at scale raises sustainability concerns that enterprises must weigh against the transparency benefits. Despite these challenges, the IBM Food Trust remains one of the most successful enterprise blockchain deployments globally, demonstrating that when governance structures are appropriately designed and industry stakeholders are willing to collaborate, blockchain technology can deliver transformative improvements in supply chain visibility and consumer safety.

**Word Count: 420**

### References

Hyperledger Foundation (2022) *How Walmart brought unprecedented transparency to the food supply chain with Hyperledger Fabric*. Available at: https://www.lfdecentralizedtrust.org/case-studies/walmart-case-study (Accessed: 19 March 2026).

IBM (2019) 'Carrefour and Nestle Partner with IBM to Extend Use of Blockchain to New Food Categories', *IBM Think Blog*, 23 April.

Kamath, R. (2018) 'Food Traceability on Blockchain: Walmart's Pork and Mango Pilots with IBM', *The Journal of the British Blockchain Association*, 1(1), pp. 1-12.

Kshetri, N. (2018) 'Blockchain's roles in meeting key supply chain management objectives', *International Journal of Information Management*, 39, pp. 80-89.

Maersk (2022) 'A.P. Moller - Maersk and IBM to discontinue TradeLens, a blockchain-enabled global trade platform', *Maersk News*, 29 November.

World Economic Forum (2019) 'This is how blockchain can keep your food safe', *World Economic Forum*, 22 January.

---

## Use Case 2: Healthcare — Estonia's KSI Blockchain for Health Records

Healthcare data represents one of the most sensitive categories of personal information, yet health systems worldwide remain vulnerable to cyberattacks, insider threats, and data tampering. Traditional audit logging mechanisms can themselves be compromised, meaning unauthorised access or modification of patient records may go undetected. Blockchain technology offers a solution by providing mathematically verifiable, tamper-evident integrity guarantees that operate independently of system administrators.

Estonia became the first country in the world to deploy blockchain technology in a live production environment for securing national health records. The Estonian eHealth Foundation partnered with Guardtime, an Estonian-founded cybersecurity company, to integrate their Keyless Signature Infrastructure (KSI) blockchain into the national health data system. Formal cooperation began in 2011, with the healthcare-specific deployment announced in March 2016, securing over one million patient health records (Guardtime, 2016; CoinDesk, 2016). Crucially, no patient data is stored on the blockchain itself; only cryptographic hash signatures are recorded, ensuring data integrity verification without compromising privacy. Today, 99% of health data in Estonia is digitised, 100% of healthcare billing is electronic, and 99% of prescriptions are issued digitally through the e-prescription system (e-Estonia, 2020). Citizens access their records using a national digital ID card, and every access event is transparently recorded. The KSI blockchain received EU eIDAS accreditation as a trust service in 2020, granting legal standing for data integrity verification across the European Union.

The disruptive impact of this implementation is profound. It demonstrates that blockchain can serve as a trust layer for existing healthcare infrastructure without requiring wholesale system replacement. As Mettler (2016) argues, blockchain in healthcare is not about storing medical records on a distributed ledger, but about creating verifiable audit trails that empower patients and regulators alike. The model enables patient data sovereignty, where individuals can verify who has accessed their records and when.

Nevertheless, challenges remain significant. Interoperability is a persistent concern, as cross-border health data sharing within the EU requires alignment with differing national standards and regulations (Heston, 2017). Public understanding also presents difficulties; citizens may confuse 'blockchain-secured health records' with 'health records stored on a blockchain', potentially generating unwarranted privacy concerns. The dependency on a single vendor, Guardtime, introduces vendor lock-in risk, and the scalability of the system as access events grow continues to be an engineering challenge. These limitations notwithstanding, Estonia's implementation remains the most mature and comprehensive example of blockchain in national healthcare infrastructure globally.

**Word Count: 390**

### References

CoinDesk (2016) 'Blockchain Startup to Secure 1 Million e-Health Records in Estonia', *CoinDesk*, 3 March.

e-Estonia (2020) 'Blockchain and healthcare: the Estonian experience', *e-Estonia*.

Guardtime (2016) 'Estonian eHealth Authority Partners with Guardtime to Accelerate Transparency and Auditability in Health Care', *Guardtime Blog*.

Heston, T.F. (2017) 'A Case Study in Blockchain Health Care Innovation', *International Journal of Current Research*, 9(11), pp. 60587-60588.

Mettler, M. (2016) 'Blockchain technology in healthcare: The revolution starts here', *IEEE 18th International Conference on e-Health Networking, Applications and Services (Healthcom)*, Munich, 14-16 September, pp. 1-3.

---

## Use Case 3: Financial Services — JPMorgan's Kinexys and JPM Coin

The global financial system relies on correspondent banking networks and legacy settlement infrastructure that introduces delays, costs, and counterparty risk into institutional transactions. Cross-border payments typically follow T+1 or T+2 settlement cycles, meaning trillions of dollars in institutional capital remain idle awaiting clearance. Blockchain-based settlement platforms address this inefficiency by enabling direct, near-instant, 24/7 transaction finality without intermediaries.

JPMorgan Chase launched its blockchain platform, originally named Onyx, in 2020, which was subsequently rebranded to Kinexys in November 2024. At its core is JPM Coin (ticker: JPMD), the first bank-issued, USD-denominated deposit token, enabling institutional clients to make programmable, near-instant payments using a digital representation of JPMorgan deposits on a blockchain ledger (JPMorgan, 2024a). The platform has processed over 1.5 trillion US dollars in cumulative transactions since launch, with an average daily volume exceeding two billion dollars and year-over-year payment transaction growth of tenfold (JPMorgan, 2024b). Kinexys serves clients across five continents, including Siemens, BlackRock, and Ant International. The platform has facilitated some of the largest repurchase agreement transactions on any blockchain globally. In 2025, on-chain foreign exchange settlement for USD and EUR was introduced, and JPMorgan expanded to multi-chain deployment across Coinbase's Base network and the Canton Network backed by Goldman Sachs and BNP Paribas (Allison, 2024).

The disruptive potential of Kinexys extends beyond mere speed improvements. Programmable money through smart contracts enables conditional payments, automated compliance checks, and real-time liquidity management. As Bastion (2025) notes, this represents a fundamental shift from batch-based settlement infrastructure to continuous, event-driven financial workflows. The fact that the world's largest bank by assets has committed to blockchain-based settlement signals institutional validation of the technology that could accelerate industry-wide adoption.

However, considerable challenges accompany this transformation. Regulatory complexity is paramount; financial institutions deploying blockchain payment systems must simultaneously satisfy banking regulators, securities regulators, and anti-money laundering frameworks across multiple jurisdictions. The interaction between a systemically important bank and public blockchain networks raises concerns flagged by the Bank for International Settlements regarding risks from the open cryptocurrency ecosystem. The inability to reverse malicious or erroneous on-chain transactions remains an unresolved industry gap. Furthermore, institutional clients face significant internal change management and technical integration requirements to adopt blockchain-based settlement workflows (CoinDesk, 2025). Despite these obstacles, Kinexys represents the most significant production deployment of blockchain technology by a traditional financial institution to date.

**Word Count: 400**

### References

Allison, I. (2024) 'JPMorgan Renames Blockchain Platform to Kinexys, to Add On-Chain FX Settlement for USD, EUR', *CoinDesk*, 6 November.

Bastion (2025) 'Why JPMorgan Started Kinexys: The Case for Blockchain in Institutional Settlements', *Bastion Blog*.

CoinDesk (2025) 'JPMorgan's tokenized dollars are quietly rewiring how Wall Street moves money', *CoinDesk*, 18 December.

JPMorgan (2024a) 'Introducing Kinexys', *J.P. Morgan Insights*.

JPMorgan (2024b) 'JPM Coin: Institutional Deposit Tokens and Blockchain Payments by Kinexys', *J.P. Morgan*.

---

## Use Case 4: Government and Land Registry — Georgia's Blockchain Land Titling System

Property registration systems in many countries suffer from corruption, fraud, data tampering, and a fundamental lack of public trust. In developing nations particularly, unclear land ownership is a significant barrier to economic development, as citizens cannot leverage property as collateral or prove ownership in disputes. Blockchain-based land registries address these issues by creating tamper-proof, independently verifiable records of property ownership that cannot be altered by corrupt officials or administrative error.

The Republic of Georgia's National Agency of Public Registry (NAPR) partnered with the Bitfury Group in 2016 to create the world's first blockchain-based government land registry. The system uses Bitfury's Exonum framework to timestamp land title transactions on a private blockchain, with cryptographic hashes then anchored to the public Bitcoin blockchain for independent verification (Shang and Price, 2019). By April 2017, just two months after going live, the system had recorded over 100,000 land title documents on the Bitcoin blockchain (CoinTelegraph, 2017). By the end of 2017, this figure had grown to 300,000 titles, and by 2018, approximately 1.5 million properties were registrable through the platform (Bitfury, 2016). The service expanded beyond initial land titles to encompass sales, purchases, mortgages, rentals, new registrations, demolitions, and notary services. The World Bank subsequently ranked Georgia third among 189 countries in ease of property registration, with registration taking just one day at a cost of 0.1% of total property value. A parallel initiative in Sweden saw Lantmateriet partner with ChromaWay to pilot blockchain-based property transactions, estimating potential savings of over 100 million euros per year for Swedish taxpayers through faster transactions and elimination of paper processes (Kempe, 2017; Computer Weekly, 2018).

The disruptive aspect of blockchain land registries lies in their capacity to rebuild institutional trust in contexts where traditional governance has failed. As Graglia and Mellon (2018) observe, secure property rights are foundational to economic development, and blockchain provides an external verification mechanism that reduces dependence on the integrity of individual government officials. Smart contracts could further automate property transfers, escrow arrangements, and mortgage registrations.

Challenges, however, are considerable. Existing property laws were not designed for blockchain-based records, requiring careful legal framework alignment to ensure blockchain-anchored entries carry equivalent legal standing to traditional registry entries. The digital divide remains a barrier, as not all citizens or local officials possess the technical literacy to interact with blockchain systems. The scalability of the Bitcoin anchoring model is also a concern, as growing transaction volumes may be constrained by Bitcoin's block times and transaction fees. The Swedish pilot, despite demonstrating technical feasibility across three phases (2016-2018), has not progressed to full production deployment, partly due to the complexity of integrating with existing legal and banking processes (Computer Weekly, 2018). Long-term sustainability depends on continued government commitment and the commercial viability of technology partners.

**Word Count: 440**

### References

Bitfury (2016) *The Bitfury Group and Government of Republic of Georgia Expand Historic Blockchain Land Titling Project*. Bitfury Group.

CoinTelegraph (2017) 'Georgia Records 100,000 Land Titles on Bitcoin Blockchain: BitFury', *CoinTelegraph*.

Computer Weekly (2018) 'Sweden trials blockchain for land registry management', *Computer Weekly*.

Graglia, J.M. and Mellon, C. (2018) 'Blockchain and Property in 2018: At the End of the Beginning', *Innovations: Technology, Governance, Globalization*, 12(1-2), pp. 90-116.

Kempe, M. (2017) *The Land Registry in the Blockchain — A Development Project with Lantmateriet, ChromaWay, Kairos Future, and Telia*. Lantmateriet.

Shang, Q. and Price, A. (2019) 'A Blockchain-Based Land Titling Project in the Republic of Georgia: Rebuilding Public Trust and Lessons for Future Pilot Projects', *Innovations: Technology, Governance, Globalization*, 12(3-4), pp. 72-78.

---

## Critical Appraisal: Challenges and Disruptive Aspects of Blockchain Technologies

Across all four domains examined, several cross-cutting themes emerge regarding the challenges and disruptive potential of blockchain and distributed ledger technology.

**Disruptive Aspects:** Blockchain's core value proposition — immutability, transparency, and disintermediation — has demonstrated tangible benefits in each domain. Supply chain traceability was reduced from days to seconds. Healthcare record integrity became mathematically verifiable. Financial settlement moved from T+2 to near-instant. Property registration gained tamper-proof verification. In each case, the technology addresses a fundamental trust deficit in existing systems.

**Persistent Challenges:** However, the technology is not without significant limitations. The 'oracle problem' — ensuring that data entered onto the blockchain is accurate in the first place — remains unsolved. Regulatory frameworks across jurisdictions lag behind technological capability, creating legal uncertainty. Interoperability between different blockchain platforms and legacy systems continues to be a barrier to adoption. The governance question, as demonstrated by the failure of TradeLens, shows that technical solutions must be accompanied by neutral, collaborative governance structures. Scalability, energy consumption, and the tension between immutability and data protection regulations such as the GDPR's right to be forgotten present ongoing technical and legal challenges that the industry must address for blockchain to achieve mainstream adoption.
