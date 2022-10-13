const ethers = require("ethers");
const fs = require("fs-extra");
require("dotenv").config(); //Import dotenv

async function main() {
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY); //wallet private key from your wallet
  const encryptedJsonKey = await wallet.encrypt(
    process.env.PRIVATE_KEY_PASSWORD,
    process.env.PRIVATE_KEY
  ); //create the encrypted key using the private key and your password
  console.log(encryptedJsonKey);
  fs.writeFileSync("./.encryptedKey.json", encryptedJsonKey); //Save the encrypted key in a new file .encryptedKey.json
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
