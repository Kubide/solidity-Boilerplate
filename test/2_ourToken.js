/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const OurToken = artifacts.require('./OurToken.sol');

contract('OurToken', (accounts) => {
  before(async () => {
    ourTokenDeployed = await OurToken.deployed();
    ourTokenOwner = accounts[0];
    alice = accounts[1];
    bob = accounts[2];
    carol = accounts[3];
    initialSupply = 2000001;
  });

  it('Check the total balance', async () => {
    const totalBalance = await ourTokenDeployed.totalSupply.call();
    assert.equal(totalBalance, initialSupply, 'Balance is different');
  });


  it('Check the owner balance', async () => {
    const ownerBalance = await ourTokenDeployed.balanceOf.call(ourTokenOwner);
    assert.equal(ownerBalance, initialSupply, "Ups, owner doesn't have all the cash");
  });

  it('Transfer from Owner to Alice', async () => {
    const cash = 1000;
    const transfer = await ourTokenDeployed.transfer(alice, cash);
    let balance = await ourTokenDeployed.balanceOf.call(ourTokenOwner);
    assert.equal(balance, initialSupply - cash, "owner doesn't have all the cash");

    balance = await ourTokenDeployed.balanceOf.call(alice);
    assert.equal(balance, cash, "Alice doesn't have all the cash");
  });

  it('Transfer from Alice to Bob', async () => {
    const initialCash = 1000;
    const cash = 10;
    const transfer = await ourTokenDeployed.transfer(bob, cash, { from: alice } );
    let balance = await ourTokenDeployed.balanceOf.call(alice);
    assert.equal(balance, initialCash - cash, "Alice doesn't have all the cash");

    balance = await ourTokenDeployed.balanceOf.call(bob);
    assert.equal(balance, cash, "Bob doesn't have all the cash");
  });

  it('Mint to Carol', async () => {
    const quantityToAdd = 12002;
    const transfer = await ourTokenDeployed.mint(carol, quantityToAdd);

    const totalBalance = await ourTokenDeployed.totalSupply.call();
    assert.equal(totalBalance, initialSupply + quantityToAdd, 'Balance is different');


    const balance = await ourTokenDeployed.balanceOf.call(carol);
    assert.equal(balance, quantityToAdd, "Carol doesn't have all the cash");
  });

});
