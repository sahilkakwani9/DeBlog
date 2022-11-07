// scripts/deploy.js

const hre = require("hardhat");

async function main() {
    // We get the contract to deploy.
    const Deblog = await hre.ethers.getContractFactory("DeBlog");
    const DeBlogContract = await Deblog.deploy();
    await DeBlogContract.deployed();
    console.log("Contract DeBlog", DeBlogContract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });