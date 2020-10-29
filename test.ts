import { CryptoBlockchain, CryptoBlock } from "./index";

const cryptoBlockchain = new CryptoBlockchain();
cryptoBlockchain.addNewBlock(
  new CryptoBlock(1, "28/10/2020", {
    sender: "Stephan Yksmotib",
    recipient: "Ekilem Zamliy",
    quantity: 50,
  })
);
cryptoBlockchain.addNewBlock(
  new CryptoBlock(2, "29/10/2020", {
    sender: "Eyyemus Yksmotib",
    recipient: "Filemiles Ilreged",
    quantity: 20,
  })
);
console.log(JSON.stringify(cryptoBlockchain, null, 4));
