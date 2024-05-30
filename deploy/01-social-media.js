const { network, ethers } = require("hardhat");
const { developmentChains } = require("../helper-hardhat-config");
const { run } = require("hardhat");
const verify = async (contractAddress, args, contractName) => {
  console.log("Verifying Contract.......");
  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: args,
      contract: `contracts/${contractName}.sol:${contractName}`,
    });
  } catch (e) {
    if (e.message.toLowerCase().includes("already verified")) {
      console.log("Already Verified");
    } else {
      console.log(e);
    }
  }
};

module.exports = async function ({ getNamedAccounts, deployments }) {
  const { deploy, log, get } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = network.config.chainId;
  const props = await get("PROPS");
  const args = [props.address, "0xae92d5aD7583AD66E49A0c67BAd18F6ba52dDDc1"];
  const socialMedia = await deploy("PROPSOFT", {
    from: deployer,
    args: args,
    log: true,
    waitConfirmations: network.config.blockConfirmations || 1,
  });

  if (!developmentChains.includes(network.name)) {
    console.log("VERIFYING.........");
    await verify(socialMedia.address, args, "PROPSOFT");
  }

  console.log("------------------------------------");
};
module.exports.tags = ["all", "oft"];
