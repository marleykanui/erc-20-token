const MyToken = artifacts.require('MyToken');
const FarmToken = artifacts.require('FarmToken');

module.exports = async function (callback) {
  const accounts = await web3.eth.getAccounts();
  const myToken = await MyToken.deployed();
  const farmToken = await FarmToken.deployed();

  // Verify accounts[0] and farmToken balance of MyToken before and After the transfer
  balanceMyTokenBeforeAccounts0 = await myToken.balanceOf(accounts[0]);
  balanceMyTokenBeforeFarmToken = await myToken.balanceOf(farmToken.address);
  console.log('*** My Token ***');
  console.log(
    `Balance MyToken Before accounts[0]: ${web3.utils.fromWei(
      balanceMyTokenBeforeAccounts0.toString()
    )}`
  );
  console.log(
    `Balance MyToken Before TokenFarm: ${web3.utils.fromWei(
      balanceMyTokenBeforeFarmToken.toString()
    )}`
  );
  console.log('*** Farm Token ***');
  balanceFarmTokenBeforeAccounts0 = await farmToken.balanceOf(accounts[0]);
  balanceFarmTokenBeforeFarmToken = await farmToken.balanceOf(
    farmToken.address
  );
  console.log(
    `Balance FarmToken Before accounts[0]: ${web.utils.fromWei(
      balanceFarmTokenBeforeAccounts0.toString()
    )}`
  );
  console.log(
    `Balance FarmToken Before TokenFarm: ${web3.utils.fromWei(
      balanceFarmTokenBeforeFarmToken.toString()
    )}`
  );

  //   Call withdraw function from FarmToken
  console.log('Call WithDraw Function');
  await farmToken.withdraw(web3.utils.toWei('100', 'ether'));

  console.log('*** My Token ***');
  balanceMyTokenAfterAccounts0 = await myToken.balanceOf(accounts[0]);
  balanceMyTokenAfterFarmToken = await myToken.balanceOf(farmToken.address);
  console.log(
    `Balance My Token After Accounts: ${web3.utils.fromWei(
      balanceMyTokenAfterAccounts0.toString()
    )}`
  );
  console.log(
    `Balance My Token After TokenFarm: ${web3.utils.fromWei(
      balanceMyTokenAfterFarmToken.toString()
    )}`
  );
  console.log('*** Farm Token ***');
  balanceFarmTokenAfterAccounts0 = await farmToken.balanceOf(accounts[0]);
  balanceFarmTokenAfterFarmToken = await farmToken.balanceOf(farmToken.address);
  console.log(
    `Balance Farm Token After Acccounts[0]: ${web3.utils.fromWei(
      balanceFarmTokenAfterAccounts0.toString()
    )}`
  );
  console.log(
    `Balance Farm Token After Token Farm: ${web3.utils.fromWei(
      balanceFarmTokenAfterFarmToken.toString()
    )}`
  );

  //   End Function
  callback();
};
