async function main() {
    const [deployer] = await ethers.getSigners();
    console.log(deployer.address);

    console.log("Deploying contracts with the account:", deployer.address);
    console.log("Account balance:", (await deployer.getBalance()).toString());

    const Contract = await ethers.getContractFactory("{{cookiecutter.contract_name}}");
    const contract = await Contract.deploy();
    console.log("contract address:", contract.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });