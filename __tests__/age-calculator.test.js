import {ageCalculator} from "./../src/age-calculator.js"

describe("ageCalculator", () => {
  let humanAge;

  beforeEach(() => {
    humanAge = new ageCalculator(20);
  })
  test("should return the age in earth years after given age parameter", () => {
    expect(humanAge.earth).toEqual(20);
  });

  test("should return the age in mercury years after given age parameter", () => {
    expect(humanAge.mercury).toEqual(83.33);
  });

  test("should return the age in venus years after given age parameter", () => {
    expect(humanAge.venus).toEqual(32.26);
  });

  test("should return the age in mars years after given age parameter", () => {
    expect(humanAge.mars).toEqual(10.64);
  });

  test("should return the age in jupiter years after given age parameter", () => {
    expect(humanAge.jupiter).toEqual(1.69);
  });

});

describe("ageCalculator.yearsSinceBday", () => {
  let humanAge;

  beforeEach(() => {
    humanAge = new ageCalculator(20);
  })

  test("should return an object with the years difference since birthday in earth years", () => {
    expect(ageCalculator.yearsSinceBday(13).toEqual({earth:7}))
  })
})
