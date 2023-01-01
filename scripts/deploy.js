require("@nomiclabs/hardhat-ethers");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());
  const Contract = await ethers.getContractFactory("FundRaiser");
  const contract = await Contract.deploy();

  console.log("Contract address:", contract.address);

  // const Contract = await hre.ethers.getContractFactory("FundRaiser");
  // const contract = await Contract.deploy();

  // await contract.deployed();
  // console.log("Address of contract :", contract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
