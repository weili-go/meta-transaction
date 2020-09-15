const EthUtil = require("ethereumjs-util");

// Name of current implementation artifact as stored in ./build/contracts/*.json
const FiatTokenV2 = artifacts.require("FiatTokenV2");

// Name of current proxy artifact as stored in ./build/contracts/*.json
const Proxy = artifacts.require("FiatTokenProxy");
const FUtil = artifacts.require("FiatTokenUtil");

const transferWithAuthorizationTypeHash = web3.utils.keccak256(
  "TransferWithAuthorization(address from,address to,uint256 value,uint256 validAfter,uint256 validBefore,bytes32 nonce)"
);

console.log(
  "TransferWithAuthorization Hash: ",
  transferWithAuthorizationTypeHash
);

async function call_batch_transfer() {
  const fiatTokenProxyAddress = await Proxy.deployed();
  const proxiedToken = await FiatTokenV2.at(fiatTokenProxyAddress.address);
  console.log("Proxied token address: ", proxiedToken.address);
  const fiatTokenUtil = await FUtil.deployed();
  console.log("Util token address: ", fiatTokenUtil.address);

  // domain seperator
  const name = await proxiedToken.name();
  console.log("name:   ", name);
  // const chainId = web3.currentProvider.networkVersion;//
  const chainId = "3";
  console.log("chainId:   ", chainId);
  const domainSeparator = makeDomainSeparator(
    name,
    "2",
    chainId,
    proxiedToken.address
  );
  console.log("domainSeparator:   ", domainSeparator);

  // sign
  const from = "0xE6b48d76Bc4805ABF61F38A55F1D7C362c8BfdA8";
  const to = "0xd27B12E7C0a69E720Ee8E862d3fF6a36891aEEAF";
  const to2 = "0x9175D5b34C0E8000C3e1ae90622a4429AFabb510";
  const to3 = "0x46352bF252F8E150F87a54cC09372B89E538c2Bd";
  const value = "12000000";
  const value2 = "34000000";
  const validAfter = "0";
  const validBefore = "9999999999999";
  const nonce = web3.utils.asciiToHex("60");
  console.log("nonce:  ", nonce);
  const nr = await proxiedToken.authorizationState(from, nonce);
  console.log("nonce result:  ", nr.toString());
  const nonce2 = web3.utils.asciiToHex("61");
  console.log("nonce2:  ", nonce2);
  const nr2 = await proxiedToken.authorizationState(from, nonce2);
  console.log("nonce2 result:  ", nr2.toString());
  const nonce3 = web3.utils.asciiToHex("64");
  console.log("nonce3:  ", nonce3);
  const nonce4 = web3.utils.asciiToHex("65");
  console.log("nonce4:  ", nonce4);

  const transfer1 = signTransferAuthorization(
    from,
    to,
    value,
    validAfter,
    validBefore,
    nonce,
    domainSeparator,
    "replace this with your privte key"
  );

  console.log("Transfer1:   \n", transfer1);

  // create an authorization to transfer money from Alice to Charlie and
  // sign with Alice's key
  const transfer2 = signTransferAuthorization(
    from,
    to2,
    value2,
    validAfter,
    validBefore,
    nonce2,
    domainSeparator,
    "replace this with your privte key"
  );

  console.log("Transfer2:   \n", transfer2);

  const transfer3 = signTransferAuthorization(
    from,
    to3,
    value2,
    validAfter,
    validBefore,
    nonce3,
    domainSeparator,
    "replace this with your privte key"
  );

  console.log("Transfer3:   \n", transfer3);

  const transfer4 = signTransferAuthorization(
    from,
    to3,
    value2,
    validAfter,
    validBefore,
    nonce4,
    domainSeparator,
    "replace this with your privte key"
  );

  console.log("Transfer4:   \n", transfer4);

  const tx = await fiatTokenUtil.transferWithMultipleAuthorizations(
    prepend0x(
      packParams(from, to, value, validAfter, validBefore, nonce) +
      packParams(from, to2, value2, validAfter, validBefore, nonce2) +
      packParams(from, to3, value2, validAfter, validBefore, nonce3) +
      packParams(from, to3, value2, validAfter, validBefore, nonce4)
    ),
    prepend0x(
      packSignatures(transfer1.v, transfer1.r, transfer1.s) +
      packSignatures(transfer2.v, transfer2.r, transfer2.s) +
      packSignatures(transfer3.v, transfer3.r, transfer3.s) +
      packSignatures(transfer4.v, transfer4.r, transfer4.s)
    ),
    false
  );

  console.log("**************** OK *****************\n\n");
  console.log("Transaction:   ", tx);
}

//start
module.exports = async (callback) => {
  try {
    await call_batch_transfer();
  } catch (e) {
    // continue
  }
  callback();
};

//

function packParams(from, to, value, validAfter, validBefore, nonce) {
  return (
    strip0x(from) +
    strip0x(to) +
    strip0x(
      web3.eth.abi.encodeParameters(
        ["uint256", "uint256", "uint256", "bytes32"],
        [value, validAfter, validBefore, nonce]
      )
    )
  );
}

function packSignatures(v, r, s) {
  return v.toString(16).padStart(2, "0") + strip0x(r) + strip0x(s);
}

function strip0x(v) {
  return v.replace(/^0x/, "");
}

function prepend0x(v) {
  return v.replace(/^(0x)?/, "0x");
}

function signTransferAuthorization(
  from,
  to,
  value,
  validAfter,
  validBefore,
  nonce,
  domainSeparator,
  privateKey
) {
  // console.log("signTransferAuthorization start");
  return signEIP712(
    domainSeparator,
    transferWithAuthorizationTypeHash,
    ["address", "address", "uint256", "uint256", "uint256", "bytes32"],
    [from, to, value, validAfter, validBefore, nonce],
    privateKey
  );
}

function signEIP712(domainSeparator, typeHash, types, parameters, privateKey) {
  // console.log("signEIP712 start");
  const digest = web3.utils.keccak256(
    "0x1901" +
    strip0x(domainSeparator) +
    strip0x(
      web3.utils.keccak256(
        web3.eth.abi.encodeParameters(
          ["bytes32", ...types],
          [typeHash, ...parameters]
        )
      )
    )
  );

  console.log("digest:   \n", digest);

  return ecSign(digest, privateKey);
}

function ecSign(digest, privateKey) {
  // console.log("ecSign start");
  try {
    const { v, r, s } = EthUtil.ecsign(
      bufferFromHexString(digest),
      bufferFromHexString(privateKey)
    );

    // console.log("\n");
    // console.log("v: ", hexStringFromBufferNB(v));
    // console.log("r: ", hexStringFromBuffer(r));
    // console.log("s: ", hexStringFromBuffer(s));

    return { v, r: hexStringFromBuffer(r), s: hexStringFromBuffer(s) };
  } catch (error) {
    console.log(error);
  }
}

function hexStringFromBufferNB(buf) {
  return "0x" + buf.toString(16);
}
function hexStringFromBuffer(buf) {
  return "0x" + buf.toString("hex");
}

function bufferFromHexString(hex) {
  return Buffer.from(strip0x(hex), "hex");
}

function makeDomainSeparator(name, version, chainId, address) {
  return web3.utils.keccak256(
    web3.eth.abi.encodeParameters(
      ["bytes32", "bytes32", "bytes32", "uint256", "address"],
      [
        web3.utils.keccak256(
          "EIP712Domain(string name,string version,uint256 chainId,address verifyingContract)"
        ),
        web3.utils.keccak256(name),
        web3.utils.keccak256(version),
        chainId,
        address,
      ]
    )
  );
}
