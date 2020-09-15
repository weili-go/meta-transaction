module.exports = {
  // BIP39 mnemonic phrase
  MNEMONIC:
    "liwei soup sail drip include hand pigeon always connect cover switch horse century",
  // INFURA API key
  INFURA_KEY: "7e1994c8834b4c61814e608fbb640810",
  // INFURA_KEY: "bd724c915e864e94a14a858b05d88ae5",
  // FiatTokenProxy admin - can upgrade implementation contract
  PROXY_ADMIN_ADDRESS: "0xc4960f4bb9843e7a512e6f38b9acef82b114fdaf",
  // Owner - can configure master minter, pauser, and blacklister
  OWNER_ADDRESS: "0xE6b48d76Bc4805ABF61F38A55F1D7C362c8BfdA8",
  // Master Minter - can configure minters and minter allowance
  MASTERMINTER_ADDRESS: "0xE6b48d76Bc4805ABF61F38A55F1D7C362c8BfdA8",
  // Pauser - can pause the contract
  PAUSER_ADDRESS: "0xE6b48d76Bc4805ABF61F38A55F1D7C362c8BfdA8",
  // Blacklister - can blacklist addresses
  BLACKLISTER_ADDRESS: "0xE6b48d76Bc4805ABF61F38A55F1D7C362c8BfdA8",
  // FiatTokenProxy contract - override the contract address used in migrations
  PROXY_CONTRACT_ADDRESS: "",
};
