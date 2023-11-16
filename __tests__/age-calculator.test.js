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
    expect(humanAge.yearsSinceBday(13).earth).toEqual(7)
  })

  test("should return a list of objects corresponding with planet and year difference for mercury", () => {
    expect(humanAge.yearsSinceBday(13).mercury).toEqual(29.17)
  })

  test("should return a list of objects corresponding with planet and year difference for venus", () => {
    expect(humanAge.yearsSinceBday(13).venus).toEqual(11.29)
  })

  test("should return a list of objects corresponding with planet and year difference for mars", () => {
    expect(humanAge.yearsSinceBday(13).mars).toEqual(3.72)
  })

  test("should return a list of objects corresponding with planet and year difference for jupiter", () => {
    expect(humanAge.yearsSinceBday(13).jupiter).toEqual(0.59)
  })

})

describe("ageCalculator.yearsTillBday", () => {
  let humanAge;

  beforeEach(() => {
    humanAge = new ageCalculator(20);
  })
  
  test("should return a list of objects corresponding with planet and year difference for earth", () => {
    expect(humanAge.yearsTillBday(30).earth).toEqual(10)
  })

  test("should return a list of objects corresponding with planet and year difference for mercury", () => {
    expect(humanAge.yearsTillBday(30).mercury).toEqual(41.67)
  })

  test("should return a list of objects corresponding with planet and year difference for venus", () => {
    expect(humanAge.yearsTillBday(30).venus).toEqual(16.13)
  })

  test("should return a list of objects corresponding with planet and year difference for mars", () => {
    expect(humanAge.yearsTillBday(30).mars).toEqual(5.32)
  })

  test("should return a list of objects corresponding with planet and year difference for mars", () => {
    expect(humanAge.yearsTillBday(30).jupiter).toEqual(0.84)
  })
})
