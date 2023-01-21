// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  
  const Token0 = await hre.ethers.getContractFactory("Token0");
  const token0 = await Token0.deploy();

  const Token1 = await hre.ethers.getContractFactory("Token1");
  const token1 = await Token1.deploy();

  const Amm = await hre.ethers.getContractFactory("CSAMM");
  const amm = await Amm.deploy(token0.address,token1.address);

  console.log(await token0.approve(amm.address,1000000));
  console.log(await token1.approve(amm.address,1000000)); 

  await token0.deployed();
  await token1.deployed();
  await amm.deployed();

  console.log(
    ` deployed to ${amm.address} ${token0.address} ${token1.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
