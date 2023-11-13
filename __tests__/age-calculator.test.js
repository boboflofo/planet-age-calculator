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

});
