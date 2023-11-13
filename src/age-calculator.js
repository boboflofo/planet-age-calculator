export class ageCalculator {
  constructor(age) {
    this.earth = age
    this.mercury = +(age/0.24).toFixed(2)
  }
}