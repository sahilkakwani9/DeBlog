// scripts/deploy.js

const hre = require("hardhat");

async function main() {
    // We get the contract to deploy.
    const Deblog = await hre.ethers.getContractFactory("DeBlog");
    const DeBlogContract = await Deblog.deploy();

    await DeBlogContract.deployed();
    console.log("Contract DeBlog", DeBlogContract.address);
}
main().then(() => {
    process.exit(0);
}).catch(err => {
    console.log(err);
    process.exit(1)
})