process.env.TS_NODE_FILES = "true";
require("ts-node/register/transpile-only");
// Fix Typescript callsite reporting
Object.defineProperty(Error, "prepareStackTrace", { writable: false });

const HDWalletProvider = require("@truffle/hdwallet-provider");
const fs = require("fs");
const path = require("path");

// Read config file if it exists
let config = { MNEMONIC: "", INFURA_KEY: "" };
if (fs.existsSync(path.join(__dirname, "config.js"))) {
  config = require("./config.js");
}
const privateKey = config.MNEMONIC;

module.exports = {
  compilers: {
    solc: {
      version: "0.6.12",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        },
      },
    },
  },
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*", // Match any network id
    },
    local_testnet: {
      host: "ganache",
      port: 8545,
      network_id: "*", // Match any network id
    },
    mainnet: {
      provider: infuraProvider("mainnet"),
      network_id: 1,
      networkCheckTimeout: 6000000,
    },
    ropsten: {
      network_id: 3,
      provider: infuraProvider("ropsten"),
      networkCheckTimeout: 60000,
      // gasPrice: 10000000000,
      // gas: 8000000,
    },
  },
  mocha: {
    timeout: 10000, // prevents tests from failing when pc is under heavy load
    reporter: "Spec",
  },
  plugins: ["truffle-plugin-verify", "solidity-coverage"],
  api_keys: {
    etherscan: "3NT1SS9SKDKKWQRS9ZYIPB5WM989C67SIE",
  },
};

function infuraProvider(network) {
  return () => {
    if (!config.MNEMONIC) {
      console.error("A valid MNEMONIC must be provided in config.js");
      process.exit(1);
    }
    if (!config.INFURA_KEY) {
      console.error("A valid INFURA_KEY must be provided in config.js");
      process.exit(1);
    }

    console.log(`https://${network}.infura.io/v3/${config.INFURA_KEY}`);

    return new HDWalletProvider(
      config.MNEMONIC,
      `https://${network}.infura.io/v3/${config.INFURA_KEY}`
    );
  };
}
