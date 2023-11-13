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
    expect(humanAge.yearsSinceBday(13)[0]).toEqual({earth:7})
  })

  test("should return a list of objects corresponding with planet and year difference for mercury", () => {
    expect(humanAge.yearsSinceBday(13)[1]).toEqual({mercury:29.17})
  })

  test("should return a list of objects corresponding with planet and year difference for venus", () => {
    expect(humanAge.yearsSinceBday(13)[2]).toEqual({venus:11.29})
  })

  test("should return a list of objects corresponding with planet and year difference for mars", () => {
    expect(humanAge.yearsSinceBday(13)[3]).toEqual({mars:3.72})
  })

  test("should return a list of objects corresponding with planet and year difference for jupiter", () => {
    expect(humanAge.yearsSinceBday(13)[4]).toEqual({jupiter:0.59})
  })

})

describe("ageCalculator.yearsTillBday", () => {
  let humanAge;

  beforeEach(() => {
    humanAge = new ageCalculator(20);
  })
  
  test("should return a list of objects corresponding with planet and year difference for earth", () => {
    expect(humanAge.yearsTillBday(30)[0]).toEqual({earth:10})
  })

  test("should return a list of objects corresponding with planet and year difference for mercury", () => {
    expect(humanAge.yearsTillBday(30)[1]).toEqual({mercury:41.67})
  })


})
