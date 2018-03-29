var proxyCreateAndExecuteAddress= "0x793ebbe21607e4f04788f89c7a9b97320773ec59";
var proxyCreateAndExecuteAbi= [{"constant":false,"inputs":[{"name":"otc","type":"address"},{"name":"payToken","type":"address"},{"name":"payAmt","type":"uint256"},{"name":"wethToken","type":"address"},{"name":"minBuyAmt","type":"uint256"}],"name":"sellAllAmountBuyEth","outputs":[{"name":"wethAmt","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"otc","type":"address"},{"name":"payToken","type":"address"},{"name":"payAmt","type":"uint256"},{"name":"buyToken","type":"address"},{"name":"minBuyAmt","type":"uint256"}],"name":"sellAllAmount","outputs":[{"name":"buyAmt","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"otc","type":"address"},{"name":"buyToken","type":"address"},{"name":"buyAmt","type":"uint256"},{"name":"payToken","type":"address"},{"name":"maxPayAmt","type":"uint256"}],"name":"buyAllAmount","outputs":[{"name":"payAmt","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"factory","type":"address"},{"name":"otc","type":"address"},{"name":"wethAmt","type":"uint256"},{"name":"payToken","type":"address"},{"name":"maxPayAmt","type":"uint256"}],"name":"createAndBuyAllAmountBuyEth","outputs":[{"name":"proxy","type":"address"},{"name":"payAmt","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"factory","type":"address"},{"name":"otc","type":"address"},{"name":"payToken","type":"address"},{"name":"payAmt","type":"uint256"},{"name":"minBuyAmt","type":"uint256"}],"name":"createAndSellAllAmountBuyEth","outputs":[{"name":"proxy","type":"address"},{"name":"wethAmt","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"factory","type":"address"},{"name":"otc","type":"address"},{"name":"buyToken","type":"address"},{"name":"buyAmt","type":"uint256"}],"name":"createAndBuyAllAmountPayEth","outputs":[{"name":"proxy","type":"address"},{"name":"wethAmt","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"factory","type":"address"},{"name":"otc","type":"address"},{"name":"buyToken","type":"address"},{"name":"minBuyAmt","type":"uint256"}],"name":"createAndSellAllAmountPayEth","outputs":[{"name":"proxy","type":"address"},{"name":"buyAmt","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"factory","type":"address"},{"name":"otc","type":"address"},{"name":"buyToken","type":"address"},{"name":"buyAmt","type":"uint256"},{"name":"payToken","type":"address"},{"name":"maxPayAmt","type":"uint256"}],"name":"createAndBuyAllAmount","outputs":[{"name":"proxy","type":"address"},{"name":"payAmt","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"otc","type":"address"},{"name":"buyToken","type":"address"},{"name":"buyAmt","type":"uint256"},{"name":"wethToken","type":"address"}],"name":"buyAllAmountPayEth","outputs":[{"name":"wethAmt","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"factory","type":"address"},{"name":"otc","type":"address"},{"name":"payToken","type":"address"},{"name":"payAmt","type":"uint256"},{"name":"buyToken","type":"address"},{"name":"minBuyAmt","type":"uint256"}],"name":"createAndSellAllAmount","outputs":[{"name":"proxy","type":"address"},{"name":"buyAmt","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"otc","type":"address"},{"name":"wethToken","type":"address"},{"name":"buyToken","type":"address"},{"name":"minBuyAmt","type":"uint256"}],"name":"sellAllAmountPayEth","outputs":[{"name":"buyAmt","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"otc","type":"address"},{"name":"wethToken","type":"address"},{"name":"wethAmt","type":"uint256"},{"name":"payToken","type":"address"},{"name":"maxPayAmt","type":"uint256"}],"name":"buyAllAmountBuyEth","outputs":[{"name":"payAmt","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"wethToken_","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"}];
var proxyCreateAndExecuteContract = web3.eth.contract(proxyCreateAndExecuteAbi).at(proxyCreateAndExecuteAddress);

var proxyFactoryAddress = "0x1043fbd15c10a3234664cbdd944a16a204f945e6";
var otcAddress = "0x14fbca95be7e99c15cc2996c6c9d841e54b79425";
var daiAddress = "0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359";

var data = proxyCreateAndExecuteContract.createAndSellAllAmountBuyEth.getData(
  proxyFactoryAddress,
  otcAddress,
  daiAddress,
  30000000000000000000,
  0
);

web3.eth.estimateGas({to:"0x793ebbe21607e4f04788f89c7a9b97320773ec59", from:"0x6cd4471480e2969b3d696fbd17530e85112f3ff6",data:data}, console.log);
