const chai = require('chai'); // 1
const assert = chai.assert;

const shouldBuyCar = require('../shouldBuyCar.js'); // 2

describe("#shouldBuyCar()", function() { // 3

  it("should return false if it's a hatchback", function() {
    const car = {
      type: "hatchback"
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });

  it ("should return true when the car is pink", function() {
    const color = {
      x : "pink"
    };
    const shouldBuy = shouldBuyCar(color);
    assert.isFalse(shouldBuy);

  });

  it ("should return false when there are no details about the car", function() {
    const carDetail = {
      details: ""
    };
    const shouldBuy = shouldBuyCar(carDetail);
    assert.isFalse(shouldBuy);
  });

  it ("should return false when the car is a hatchback and pink", function() {
    const typeAndColor = {
      type: "hatchback",
      color: "pink"
    };
    const shouldBuy = shouldBuyCar(typeAndColor);
    assert.isFalse(shouldBuy);
  });

  it ("should return true when the car has 6 litres/100km and is under or equal to $5,000", function() {
    const priceFuel = {
      price : "1000",
      liters : "6 litres/100km"
    }
    const shouldBuy = shouldBuyCar(priceFuel);
    assert.isFalse(shouldBuy);
  });

});

module.exports = shouldBuyCar;
