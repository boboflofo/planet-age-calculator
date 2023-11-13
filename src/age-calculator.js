export class ageCalculator {
  constructor(age) {
    this.earth = age
    this.mercury = +(age/0.24).toFixed(2)
    this.venus = +(age/0.62).toFixed(2)
    this.mars = +(age/1.88).toFixed(2)
    this.jupiter = +(age/11.86).toFixed(2)
  }

  yearsSinceBday(bday) {

  }
}