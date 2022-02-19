const Shipping = artifacts.require("Shipping");
const TruffleAssert = require('truffle-assertions');

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("Shipping", (/* accounts */) => {
  // дефолтный тест
  it("should assert true", async() => {
    await Shipping.deployed();
    return assert.isTrue(true);
  });

  it("should return the status Pending", async() => {
    const instance = await Shipping.deployed();
    const status = await instance.Status();
    assert.equal(status, "Pending");
  });

  it("should return the status Shipped", async() => {
    const instance = await Shipping.deployed();
    await instance.Shipped();
    const status = await instance.Status();
    assert.equal(status, "Shipped");
  });

  it("should return the status Delivered", async() => {
    const instance = await Shipping.deployed();
    await instance.Delivered();
    const status = await instance.Status();
    assert.equal(status, "Delivered");
  });
  
  // Тестирование ивентов
  it("should return correct event description", async() => {
    const instance = await Shipping.deployed();
    const delivered = await instance.Delivered();
    TruffleAssert.eventEmitted(delivered, 'LogNewAlert', (event) => {
      return event.description = 'Your package has arrived';
    });
  });

  it("should return correct event description for Shipped", async() => {
    const instance = await Shipping.deployed();
    const shipped = await instance.Shipped();
    TruffleAssert.eventEmitted(shipped, 'LogNewAlert', (event) => {
      return event.description = 'Your package has been shipped';
    });
  })
});
