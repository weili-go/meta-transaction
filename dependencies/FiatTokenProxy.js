window.proxy = {
  // eslint-disable-next-line prettier/prettier
  "contractName": "FiatTokenProxy",
  abi: [
    {
      inputs: [
        {
          internalType: "address",
          name: "implementationContract",
          type: "address",
        },
      ],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "previousAdmin",
          type: "address",
        },
        {
          indexed: false,
          internalType: "address",
          name: "newAdmin",
          type: "address",
        },
      ],
      name: "AdminChanged",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "implementation",
          type: "address",
        },
      ],
      name: "Upgraded",
      type: "event",
    },
    {
      stateMutability: "payable",
      type: "fallback",
    },
    {
      inputs: [],
      name: "admin",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "newAdmin",
          type: "address",
        },
      ],
      name: "changeAdmin",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "implementation",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "newImplementation",
          type: "address",
        },
      ],
      name: "upgradeTo",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "newImplementation",
          type: "address",
        },
        {
          internalType: "bytes",
          name: "data",
          type: "bytes",
        },
      ],
      name: "upgradeToAndCall",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
  ],
  metadata:
    '{"compiler":{"version":"0.6.12+commit.27d51765"},"language":"Solidity","output":{"abi":[{"inputs":[{"internalType":"address","name":"implementationContract","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"previousAdmin","type":"address"},{"indexed":false,"internalType":"address","name":"newAdmin","type":"address"}],"name":"AdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"implementation","type":"address"}],"name":"Upgraded","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"admin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newAdmin","type":"address"}],"name":"changeAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"implementation","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"}],"name":"upgradeTo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"upgradeToAndCall","outputs":[],"stateMutability":"payable","type":"function"}],"devdoc":{"details":"This contract proxies FiatToken calls and enables FiatToken upgrades","kind":"dev","methods":{"admin()":{"returns":{"_0":"The address of the proxy admin."}},"changeAdmin(address)":{"details":"Changes the admin of the proxy. Only the current admin can call this function.","params":{"newAdmin":"Address to transfer proxy administration to."}},"implementation()":{"returns":{"_0":"The address of the implementation."}},"upgradeTo(address)":{"details":"Upgrade the backing implementation of the proxy. Only the admin can call this function.","params":{"newImplementation":"Address of the new implementation."}},"upgradeToAndCall(address,bytes)":{"details":"Upgrade the backing implementation of the proxy and call a function on the new implementation. This is useful to initialize the proxied contract.","params":{"data":"Data to send as msg.data in the low level call. It should include the signature and the parameters of the function to be called, as described in https://solidity.readthedocs.io/en/develop/abi-spec.html#function-selector-and-argument-encoding.","newImplementation":"Address of the new implementation."}}},"title":"FiatTokenProxy","version":1},"userdoc":{"kind":"user","methods":{},"version":1}},"settings":{"compilationTarget":{"/Users/usr0102794/centre-tokens/contracts/v1/FiatTokenProxy.sol":"FiatTokenProxy"},"evmVersion":"istanbul","libraries":{},"metadata":{"bytecodeHash":"ipfs"},"optimizer":{"enabled":true,"runs":200},"remappings":[]},"sources":{"/Users/usr0102794/centre-tokens/contracts/upgradeability/AdminUpgradeabilityProxy.sol":{"keccak256":"0xc93cb352d8b777ea96e743124af5386eeee32a9fdef0b2fbd89623988e66caad","license":"MIT","urls":["bzz-raw://d0407b40cd936bdf6f6ae141fef3da54824a786affc9a459cd6cd83478043683","dweb:/ipfs/QmQh2LjAVdU2HKc7w1fXxuPEfFvTcBifHiYzgdrZtDB9rk"]},"/Users/usr0102794/centre-tokens/contracts/upgradeability/Proxy.sol":{"keccak256":"0x6cc252e2b80c8ecaf6d29b950ba3591e4366caf06c3ccba89a8f9cbd2ee807e3","license":"MIT","urls":["bzz-raw://d60d210ae173d21b90b989e69c50789fb09dc27ccb0736b41907471248ee3087","dweb:/ipfs/QmQbijUGm48UDyqnefEJExWsxBViKj1M5TAWY82Jn6sJW7"]},"/Users/usr0102794/centre-tokens/contracts/upgradeability/UpgradeabilityProxy.sol":{"keccak256":"0xcd7d32b7a63b1803d2487434ec98a2ace4c41f087cc55057c3dc9f61628ce03a","license":"MIT","urls":["bzz-raw://cb6695b82595dd1a0c23ff5b1a99cd5474f91f5b12169d9ee02f85725af7dfde","dweb:/ipfs/QmaKR6NSvmAKj6Zp3rWGm8bZLnA1XWEzpjX7EjrvoGiiGH"]},"/Users/usr0102794/centre-tokens/contracts/v1/FiatTokenProxy.sol":{"keccak256":"0x7e640892ac0fd6efafe4a9dc08cbc7ba5e825dafe8a6a8ebf717e7026b8fb69f","license":"MIT","urls":["bzz-raw://2e84a985f3271652e16eec4df9be1829f042a98b5723db5b87aeeb8eadc9c207","dweb:/ipfs/QmU4JWGMzd3rA64BiDVejhnapKRJG4WHLuw3g866hFPLTx"]},"@openzeppelin/contracts/utils/Address.sol":{"keccak256":"0xdfb4f812600ba4ce6738c35584ceb8c9433472583051b48ba5b1f66cb758a498","license":"MIT","urls":["bzz-raw://df02dffe1c1de089d9b4f6192f0dcf464526f2230f420b3deec4645e0cdd2bff","dweb:/ipfs/QmcqXGAU3KJqwrgUVoGJ2W8osomhSJ4R5kdsRpbuW3fELS"]}},"version":1}',
  bytecode:
    "0x608060405234801561001057600080fd5b5060405161077b38038061077b8339818101604052602081101561003357600080fd5b5051808061004081610051565b5061004a336100c3565b5050610123565b610064816100e760201b6103571760201c565b61009f5760405162461bcd60e51b815260040180806020018281038252603b815260200180610740603b913960400191505060405180910390fd5b7f7050c9e0f4ca769c69bd3a8ef740bc37934f8e2c036e5a723fd8ee048ed3f8c355565b7f10d6a54a4754c8869d6886b5f5d7fbfa5b4522237ea5c60d11bc4e7a1ff9390b55565b6000813f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a47081811480159061011b57508115155b949350505050565b61060e806101326000396000f3fe60806040526004361061004a5760003560e01c80633659cfe6146100545780634f1ef286146100875780635c60da1b146101075780638f28397014610138578063f851a4401461016b575b610052610180565b005b34801561006057600080fd5b506100526004803603602081101561007757600080fd5b50356001600160a01b031661019a565b6100526004803603604081101561009d57600080fd5b6001600160a01b0382351691908101906040810160208201356401000000008111156100c857600080fd5b8201836020820111156100da57600080fd5b803590602001918460018302840111640100000000831117156100fc57600080fd5b5090925090506101d4565b34801561011357600080fd5b5061011c610284565b604080516001600160a01b039092168252519081900360200190f35b34801561014457600080fd5b506100526004803603602081101561015b57600080fd5b50356001600160a01b0316610293565b34801561017757600080fd5b5061011c61034d565b610188610393565b6101986101936103f3565b610418565b565b6101a261043c565b6001600160a01b0316336001600160a01b031614156101c9576101c481610461565b6101d1565b6101d1610180565b50565b6101dc61043c565b6001600160a01b0316336001600160a01b03161415610277576101fe83610461565b6000306001600160a01b0316348484604051808383808284376040519201945060009350909150508083038185875af1925050503d806000811461025e576040519150601f19603f3d011682016040523d82523d6000602084013e610263565b606091505b505090508061027157600080fd5b5061027f565b61027f610180565b505050565b600061028e6103f3565b905090565b61029b61043c565b6001600160a01b0316336001600160a01b031614156101c9576001600160a01b0381166102f95760405162461bcd60e51b81526004018080602001828103825260368152602001806105686036913960400191505060405180910390fd5b7f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f61032261043c565b604080516001600160a01b03928316815291841660208301528051918290030190a16101c4816104a9565b600061028e61043c565b6000813f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a47081811480159061038b57508115155b949350505050565b61039b61043c565b6001600160a01b0316336001600160a01b031614156103eb5760405162461bcd60e51b81526004018080602001828103825260328152602001806105366032913960400191505060405180910390fd5b610198610198565b7f7050c9e0f4ca769c69bd3a8ef740bc37934f8e2c036e5a723fd8ee048ed3f8c35490565b3660008037600080366000845af43d6000803e808015610437573d6000f35b3d6000fd5b7f10d6a54a4754c8869d6886b5f5d7fbfa5b4522237ea5c60d11bc4e7a1ff9390b5490565b61046a816104cd565b604080516001600160a01b038316815290517fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b9181900360200190a150565b7f10d6a54a4754c8869d6886b5f5d7fbfa5b4522237ea5c60d11bc4e7a1ff9390b55565b6104d681610357565b6105115760405162461bcd60e51b815260040180806020018281038252603b81526020018061059e603b913960400191505060405180910390fd5b7f7050c9e0f4ca769c69bd3a8ef740bc37934f8e2c036e5a723fd8ee048ed3f8c35556fe43616e6e6f742063616c6c2066616c6c6261636b2066756e6374696f6e2066726f6d207468652070726f78792061646d696e43616e6e6f74206368616e6765207468652061646d696e206f6620612070726f787920746f20746865207a65726f206164647265737343616e6e6f742073657420612070726f787920696d706c656d656e746174696f6e20746f2061206e6f6e2d636f6e74726163742061646472657373a2646970667358221220c98be586eaa9f304afe84e9d2c0d2ce7ff3733c1ce381ad1929ffb4960c5b93e64736f6c634300060c003343616e6e6f742073657420612070726f787920696d706c656d656e746174696f6e20746f2061206e6f6e2d636f6e74726163742061646472657373",
  deployedBytecode:
    "0x60806040526004361061004a5760003560e01c80633659cfe6146100545780634f1ef286146100875780635c60da1b146101075780638f28397014610138578063f851a4401461016b575b610052610180565b005b34801561006057600080fd5b506100526004803603602081101561007757600080fd5b50356001600160a01b031661019a565b6100526004803603604081101561009d57600080fd5b6001600160a01b0382351691908101906040810160208201356401000000008111156100c857600080fd5b8201836020820111156100da57600080fd5b803590602001918460018302840111640100000000831117156100fc57600080fd5b5090925090506101d4565b34801561011357600080fd5b5061011c610284565b604080516001600160a01b039092168252519081900360200190f35b34801561014457600080fd5b506100526004803603602081101561015b57600080fd5b50356001600160a01b0316610293565b34801561017757600080fd5b5061011c61034d565b610188610393565b6101986101936103f3565b610418565b565b6101a261043c565b6001600160a01b0316336001600160a01b031614156101c9576101c481610461565b6101d1565b6101d1610180565b50565b6101dc61043c565b6001600160a01b0316336001600160a01b03161415610277576101fe83610461565b6000306001600160a01b0316348484604051808383808284376040519201945060009350909150508083038185875af1925050503d806000811461025e576040519150601f19603f3d011682016040523d82523d6000602084013e610263565b606091505b505090508061027157600080fd5b5061027f565b61027f610180565b505050565b600061028e6103f3565b905090565b61029b61043c565b6001600160a01b0316336001600160a01b031614156101c9576001600160a01b0381166102f95760405162461bcd60e51b81526004018080602001828103825260368152602001806105686036913960400191505060405180910390fd5b7f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f61032261043c565b604080516001600160a01b03928316815291841660208301528051918290030190a16101c4816104a9565b600061028e61043c565b6000813f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a47081811480159061038b57508115155b949350505050565b61039b61043c565b6001600160a01b0316336001600160a01b031614156103eb5760405162461bcd60e51b81526004018080602001828103825260328152602001806105366032913960400191505060405180910390fd5b610198610198565b7f7050c9e0f4ca769c69bd3a8ef740bc37934f8e2c036e5a723fd8ee048ed3f8c35490565b3660008037600080366000845af43d6000803e808015610437573d6000f35b3d6000fd5b7f10d6a54a4754c8869d6886b5f5d7fbfa5b4522237ea5c60d11bc4e7a1ff9390b5490565b61046a816104cd565b604080516001600160a01b038316815290517fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b9181900360200190a150565b7f10d6a54a4754c8869d6886b5f5d7fbfa5b4522237ea5c60d11bc4e7a1ff9390b55565b6104d681610357565b6105115760405162461bcd60e51b815260040180806020018281038252603b81526020018061059e603b913960400191505060405180910390fd5b7f7050c9e0f4ca769c69bd3a8ef740bc37934f8e2c036e5a723fd8ee048ed3f8c35556fe43616e6e6f742063616c6c2066616c6c6261636b2066756e6374696f6e2066726f6d207468652070726f78792061646d696e43616e6e6f74206368616e6765207468652061646d696e206f6620612070726f787920746f20746865207a65726f206164647265737343616e6e6f742073657420612070726f787920696d706c656d656e746174696f6e20746f2061206e6f6e2d636f6e74726163742061646472657373a2646970667358221220c98be586eaa9f304afe84e9d2c0d2ce7ff3733c1ce381ad1929ffb4960c5b93e64736f6c634300060c0033",
  immutableReferences: {},
  sourceMap:
    "1385:182:20:-:0;;;1443:122;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;1443:122:20;;;2678:42:13;2697:22;2678:18;:42::i;:::-;-1:-1:-1;3044:21:11::1;3054:10;3044:9;:21::i;:::-;2847:225:::0;1443:122:20;1385:182;;3484:342:13;3578:37;3597:17;3578:18;;;;;:37;;:::i;:::-;3557:143;;;;-1:-1:-1;;;3557:143:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2290:66;3779:31;3765:55::o;5448:153:11:-;2256:66;5563:22;5549:46::o;718:610:37:-;778:4;1239:20;;1084:66;1278:23;;;;;;:42;;-1:-1:-1;1305:15:37;;;1278:42;1270:51;718:610;-1:-1:-1;;;;718:610:37:o;1385:182:20:-;;;;;;;",
  deployedSourceMap:
    "1385:182:20:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1836:11:12;:9;:11::i;:::-;1385:182:20;4049:109:11;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;4049:109:11;-1:-1:-1;;;;;4049:109:11;;:::i;4702:406::-;;;;;;;;;;;;;;;;-1:-1:-1;;;;;4702:406:11;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;4702:406:11;;-1:-1:-1;4702:406:11;-1:-1:-1;4702:406:11;:::i;3294:99::-;;;;;;;;;;;;;:::i;:::-;;;;-1:-1:-1;;;;;3294:99:11;;;;;;;;;;;;;;3581:272;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;3581:272:11;-1:-1:-1;;;;;3581:272:11;;:::i;3141:81::-;;;;;;;;;;;;;:::i;3688:100:12:-;3728:15;:13;:15::i;:::-;3753:28;3763:17;:15;:17::i;:::-;3753:9;:28::i;:::-;3688:100::o;4049:109:11:-;2571:8;:6;:8::i;:::-;-1:-1:-1;;;;;2557:22:11;:10;-1:-1:-1;;;;;2557:22:11;;2553:96;;;4122:29:::1;4133:17;4122:10;:29::i;:::-;2553:96:::0;;;2627:11;:9;:11::i;:::-;4049:109;:::o;4702:406::-;2571:8;:6;:8::i;:::-;-1:-1:-1;;;;;2557:22:11;:10;-1:-1:-1;;;;;2557:22:11;;2553:96;;;4839:29:::1;4850:17;4839:10;:29::i;:::-;4965:12;4990:4;-1:-1:-1::0;;;;;4982:18:11::1;5008:9;5019:4;;4982:42;;;;;;;;;;::::0;;::::1;::::0;-1:-1:-1;4982:42:11::1;::::0;-1:-1:-1;4982:42:11;;-1:-1:-1;;4982:42:11;;::::1;::::0;;;::::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4964:60;;;5093:7;5085:16;;;::::0;::::1;;2595:1;2553:96:::0;;;2627:11;:9;:11::i;:::-;4702:406;;;:::o;3294:99::-;3343:7;3369:17;:15;:17::i;:::-;3362:24;;3294:99;:::o;3581:272::-;2571:8;:6;:8::i;:::-;-1:-1:-1;;;;;2557:22:11;:10;-1:-1:-1;;;;;2557:22:11;;2553:96;;;-1:-1:-1;;;;;3668:22:11;::::1;3647:123;;;;-1:-1:-1::0;;;3647:123:11::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3785:32;3798:8;:6;:8::i;:::-;3785:32;::::0;;-1:-1:-1;;;;;3785:32:11;;::::1;::::0;;;;::::1;;::::0;::::1;::::0;;;;;;;;;::::1;3827:19;3837:8;3827:9;:19::i;3141:81::-:0;3181:7;3207:8;:6;:8::i;718:610:37:-;778:4;1239:20;;1084:66;1278:23;;;;;;:42;;-1:-1:-1;1305:15:37;;;1278:42;1270:51;718:610;-1:-1:-1;;;;718:610:37:o;5684:210:11:-;5772:8;:6;:8::i;:::-;-1:-1:-1;;;;;5758:22:11;:10;-1:-1:-1;;;;;5758:22:11;;;5737:119;;;;-1:-1:-1;;;5737:119:11;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5866:21;:19;:21::i;2855:185:13:-;2290:66;3013:11;;2991:43::o;2293:1025:12:-;2623:14;2620:1;2617;2604:34;2934:1;2915;2883:14;2864:1;2832:14;2809:5;2779:170;3023:16;3020:1;3017;3002:38;3061:6;3136:74;;;;3267:16;3264:1;3257:27;3136:74;3175:16;3172:1;3165:27;5165:157:11;2256:66;5295:11;;5274:42::o;3185:152:13:-;3251:37;3270:17;3251:18;:37::i;:::-;3303:27;;;-1:-1:-1;;;;;3303:27:13;;;;;;;;;;;;;;;3185:152;:::o;5448:153:11:-;2256:66;5563:22;5549:46::o;3484:342:13:-;3578:37;3597:17;3578:18;:37::i;:::-;3557:143;;;;-1:-1:-1;;;3557:143:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2290:66;3779:31;3765:55::o",
  source:
    '/**\n * SPDX-License-Identifier: MIT\n *\n * Copyright (c) 2018-2020 CENTRE SECZ\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy\n * of this software and associated documentation files (the "Software"), to deal\n * in the Software without restriction, including without limitation the rights\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the Software is\n * furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in\n * copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\n * SOFTWARE.\n */\n\npragma solidity 0.6.12;\n\nimport {\n    AdminUpgradeabilityProxy\n} from "../upgradeability/AdminUpgradeabilityProxy.sol";\n\n/**\n * @title FiatTokenProxy\n * @dev This contract proxies FiatToken calls and enables FiatToken upgrades\n */\ncontract FiatTokenProxy is AdminUpgradeabilityProxy {\n    constructor(address implementationContract)\n        public\n        AdminUpgradeabilityProxy(implementationContract)\n    {}\n}\n',
  sourcePath: "/Users/usr0102794/centre-tokens/contracts/v1/FiatTokenProxy.sol",
  ast: {
    absolutePath:
      "/Users/usr0102794/centre-tokens/contracts/v1/FiatTokenProxy.sol",
    exportedSymbols: {
      FiatTokenProxy: [1377],
    },
    id: 1378,
    license: "MIT",
    nodeType: "SourceUnit",
    nodes: [
      {
        id: 1362,
        literals: ["solidity", "0.6", ".12"],
        nodeType: "PragmaDirective",
        src: "1154:23:20",
      },
      {
        absolutePath:
          "/Users/usr0102794/centre-tokens/contracts/upgradeability/AdminUpgradeabilityProxy.sol",
        file: "../upgradeability/AdminUpgradeabilityProxy.sol",
        id: 1364,
        nodeType: "ImportDirective",
        scope: 1378,
        sourceUnit: 826,
        src: "1179:94:20",
        symbolAliases: [
          {
            foreign: {
              argumentTypes: null,
              id: 1363,
              name: "AdminUpgradeabilityProxy",
              nodeType: "Identifier",
              overloadedDeclarations: [],
              referencedDeclaration: null,
              src: "1192:24:20",
              typeDescriptions: {
                typeIdentifier: null,
                typeString: null,
              },
            },
            local: null,
          },
        ],
        unitAlias: "",
      },
      {
        abstract: false,
        baseContracts: [
          {
            arguments: null,
            baseName: {
              contractScope: null,
              id: 1366,
              name: "AdminUpgradeabilityProxy",
              nodeType: "UserDefinedTypeName",
              referencedDeclaration: 825,
              src: "1412:24:20",
              typeDescriptions: {
                typeIdentifier: "t_contract$_AdminUpgradeabilityProxy_$825",
                typeString: "contract AdminUpgradeabilityProxy",
              },
            },
            id: 1367,
            nodeType: "InheritanceSpecifier",
            src: "1412:24:20",
          },
        ],
        contractDependencies: [825, 869, 955],
        contractKind: "contract",
        documentation: {
          id: 1365,
          nodeType: "StructuredDocumentation",
          src: "1275:109:20",
          text:
            " @title FiatTokenProxy\n @dev This contract proxies FiatToken calls and enables FiatToken upgrades",
        },
        fullyImplemented: true,
        id: 1377,
        linearizedBaseContracts: [1377, 825, 955, 869],
        name: "FiatTokenProxy",
        nodeType: "ContractDefinition",
        nodes: [
          {
            body: {
              id: 1375,
              nodeType: "Block",
              src: "1563:2:20",
              statements: [],
            },
            documentation: null,
            id: 1376,
            implemented: true,
            kind: "constructor",
            modifiers: [
              {
                arguments: [
                  {
                    argumentTypes: null,
                    id: 1372,
                    name: "implementationContract",
                    nodeType: "Identifier",
                    overloadedDeclarations: [],
                    referencedDeclaration: 1369,
                    src: "1535:22:20",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address",
                    },
                  },
                ],
                id: 1373,
                modifierName: {
                  argumentTypes: null,
                  id: 1371,
                  name: "AdminUpgradeabilityProxy",
                  nodeType: "Identifier",
                  overloadedDeclarations: [],
                  referencedDeclaration: 825,
                  src: "1510:24:20",
                  typeDescriptions: {
                    typeIdentifier:
                      "t_type$_t_contract$_AdminUpgradeabilityProxy_$825_$",
                    typeString: "type(contract AdminUpgradeabilityProxy)",
                  },
                },
                nodeType: "ModifierInvocation",
                src: "1510:48:20",
              },
            ],
            name: "",
            nodeType: "FunctionDefinition",
            overrides: null,
            parameters: {
              id: 1370,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 1369,
                  mutability: "mutable",
                  name: "implementationContract",
                  nodeType: "VariableDeclaration",
                  overrides: null,
                  scope: 1376,
                  src: "1455:30:20",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_address",
                    typeString: "address",
                  },
                  typeName: {
                    id: 1368,
                    name: "address",
                    nodeType: "ElementaryTypeName",
                    src: "1455:7:20",
                    stateMutability: "nonpayable",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address",
                    },
                  },
                  value: null,
                  visibility: "internal",
                },
              ],
              src: "1454:32:20",
            },
            returnParameters: {
              id: 1374,
              nodeType: "ParameterList",
              parameters: [],
              src: "1563:0:20",
            },
            scope: 1377,
            src: "1443:122:20",
            stateMutability: "nonpayable",
            virtual: false,
            visibility: "public",
          },
        ],
        scope: 1378,
        src: "1385:182:20",
      },
    ],
    src: "1154:414:20",
  },
  legacyAST: {
    absolutePath:
      "/Users/usr0102794/centre-tokens/contracts/v1/FiatTokenProxy.sol",
    exportedSymbols: {
      FiatTokenProxy: [1377],
    },
    id: 1378,
    license: "MIT",
    nodeType: "SourceUnit",
    nodes: [
      {
        id: 1362,
        literals: ["solidity", "0.6", ".12"],
        nodeType: "PragmaDirective",
        src: "1154:23:20",
      },
      {
        absolutePath:
          "/Users/usr0102794/centre-tokens/contracts/upgradeability/AdminUpgradeabilityProxy.sol",
        file: "../upgradeability/AdminUpgradeabilityProxy.sol",
        id: 1364,
        nodeType: "ImportDirective",
        scope: 1378,
        sourceUnit: 826,
        src: "1179:94:20",
        symbolAliases: [
          {
            foreign: {
              argumentTypes: null,
              id: 1363,
              name: "AdminUpgradeabilityProxy",
              nodeType: "Identifier",
              overloadedDeclarations: [],
              referencedDeclaration: null,
              src: "1192:24:20",
              typeDescriptions: {
                typeIdentifier: null,
                typeString: null,
              },
            },
            local: null,
          },
        ],
        unitAlias: "",
      },
      {
        abstract: false,
        baseContracts: [
          {
            arguments: null,
            baseName: {
              contractScope: null,
              id: 1366,
              name: "AdminUpgradeabilityProxy",
              nodeType: "UserDefinedTypeName",
              referencedDeclaration: 825,
              src: "1412:24:20",
              typeDescriptions: {
                typeIdentifier: "t_contract$_AdminUpgradeabilityProxy_$825",
                typeString: "contract AdminUpgradeabilityProxy",
              },
            },
            id: 1367,
            nodeType: "InheritanceSpecifier",
            src: "1412:24:20",
          },
        ],
        contractDependencies: [825, 869, 955],
        contractKind: "contract",
        documentation: {
          id: 1365,
          nodeType: "StructuredDocumentation",
          src: "1275:109:20",
          text:
            " @title FiatTokenProxy\n @dev This contract proxies FiatToken calls and enables FiatToken upgrades",
        },
        fullyImplemented: true,
        id: 1377,
        linearizedBaseContracts: [1377, 825, 955, 869],
        name: "FiatTokenProxy",
        nodeType: "ContractDefinition",
        nodes: [
          {
            body: {
              id: 1375,
              nodeType: "Block",
              src: "1563:2:20",
              statements: [],
            },
            documentation: null,
            id: 1376,
            implemented: true,
            kind: "constructor",
            modifiers: [
              {
                arguments: [
                  {
                    argumentTypes: null,
                    id: 1372,
                    name: "implementationContract",
                    nodeType: "Identifier",
                    overloadedDeclarations: [],
                    referencedDeclaration: 1369,
                    src: "1535:22:20",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address",
                    },
                  },
                ],
                id: 1373,
                modifierName: {
                  argumentTypes: null,
                  id: 1371,
                  name: "AdminUpgradeabilityProxy",
                  nodeType: "Identifier",
                  overloadedDeclarations: [],
                  referencedDeclaration: 825,
                  src: "1510:24:20",
                  typeDescriptions: {
                    typeIdentifier:
                      "t_type$_t_contract$_AdminUpgradeabilityProxy_$825_$",
                    typeString: "type(contract AdminUpgradeabilityProxy)",
                  },
                },
                nodeType: "ModifierInvocation",
                src: "1510:48:20",
              },
            ],
            name: "",
            nodeType: "FunctionDefinition",
            overrides: null,
            parameters: {
              id: 1370,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 1369,
                  mutability: "mutable",
                  name: "implementationContract",
                  nodeType: "VariableDeclaration",
                  overrides: null,
                  scope: 1376,
                  src: "1455:30:20",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_address",
                    typeString: "address",
                  },
                  typeName: {
                    id: 1368,
                    name: "address",
                    nodeType: "ElementaryTypeName",
                    src: "1455:7:20",
                    stateMutability: "nonpayable",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address",
                    },
                  },
                  value: null,
                  visibility: "internal",
                },
              ],
              src: "1454:32:20",
            },
            returnParameters: {
              id: 1374,
              nodeType: "ParameterList",
              parameters: [],
              src: "1563:0:20",
            },
            scope: 1377,
            src: "1443:122:20",
            stateMutability: "nonpayable",
            virtual: false,
            visibility: "public",
          },
        ],
        scope: 1378,
        src: "1385:182:20",
      },
    ],
    src: "1154:414:20",
  },
  compiler: {
    name: "solc",
    version: "0.6.12+commit.27d51765.Emscripten.clang",
  },
  networks: {
    "3": {
      events: {
        "0x7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f": {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "previousAdmin",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "newAdmin",
              type: "address",
            },
          ],
          name: "AdminChanged",
          type: "event",
        },
        "0xbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b": {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "implementation",
              type: "address",
            },
          ],
          name: "Upgraded",
          type: "event",
        },
      },
      links: {},
      address: "0x81E4216BcB8032401765820A2014549c93d14E04",
      transactionHash:
        "0x8f8b5061c6d33c10a42367dbd9aa3943083c8cf720f68d9e288d31e3b835e950",
    },
    "1599273711145": {
      events: {
        "0x7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f": {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "previousAdmin",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "newAdmin",
              type: "address",
            },
          ],
          name: "AdminChanged",
          type: "event",
        },
        "0xbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b": {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "implementation",
              type: "address",
            },
          ],
          name: "Upgraded",
          type: "event",
        },
      },
      links: {},
      address: "0x6eD79Aa1c71FD7BdBC515EfdA3Bd4e26394435cC",
      transactionHash:
        "0x494f945df4387d48023a8f6062125ffe931e6f15e96ee708ef3e98d640089af6",
    },
    "1599279030625": {
      events: {
        "0x7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f": {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "previousAdmin",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "newAdmin",
              type: "address",
            },
          ],
          name: "AdminChanged",
          type: "event",
        },
        "0xbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b": {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "implementation",
              type: "address",
            },
          ],
          name: "Upgraded",
          type: "event",
        },
      },
      links: {},
      address: "0xC89Ce4735882C9F0f0FE26686c53074E09B0D550",
      transactionHash:
        "0x56f79f8517ae7465856403f79c3b8a7690d3480d20b39bbf734dc692cdeccb1c",
    },
  },
  schemaVersion: "3.2.2",
  updatedAt: "2020-09-05T23:45:29.818Z",
  devdoc: {
    details:
      "This contract proxies FiatToken calls and enables FiatToken upgrades",
    kind: "dev",
    methods: {
      "admin()": {
        returns: {
          _0: "The address of the proxy admin.",
        },
      },
      "changeAdmin(address)": {
        details:
          "Changes the admin of the proxy. Only the current admin can call this function.",
        params: {
          newAdmin: "Address to transfer proxy administration to.",
        },
      },
      "implementation()": {
        returns: {
          _0: "The address of the implementation.",
        },
      },
      "upgradeTo(address)": {
        details:
          "Upgrade the backing implementation of the proxy. Only the admin can call this function.",
        params: {
          newImplementation: "Address of the new implementation.",
        },
      },
      "upgradeToAndCall(address,bytes)": {
        details:
          "Upgrade the backing implementation of the proxy and call a function on the new implementation. This is useful to initialize the proxied contract.",
        params: {
          data:
            "Data to send as msg.data in the low level call. It should include the signature and the parameters of the function to be called, as described in https://solidity.readthedocs.io/en/develop/abi-spec.html#function-selector-and-argument-encoding.",
          newImplementation: "Address of the new implementation.",
        },
      },
    },
    title: "FiatTokenProxy",
    version: 1,
  },
  userdoc: {
    kind: "user",
    methods: {},
    version: 1,
  },
};
