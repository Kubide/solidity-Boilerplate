const OurToken = artifacts.require('./OurToken.sol'); // eslint-disable-line no-undef

module.exports = function (deployer) {
  deployer.deploy(OurToken);
};
