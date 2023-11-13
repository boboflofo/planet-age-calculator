export class ageCalculator {
  constructor(age) {
    this.earth = age
    this.mercury = +(age/0.24).toFixed(2)
    this.venus = +(age/0.62).toFixed(2)
    this.mars = +(age/1.88).toFixed(2)
    this.jupiter = +(age/11.86).toFixed(2)
  }

  yearsSinceBday(bday) {
    const earthDiff = this.earth-bday
    const mercuryDiff = +(earthDiff/.24).toFixed(2)
    const venusDiff = +(earthDiff/.62).toFixed(2)
    const marsDiff = +(earthDiff/1.88).toFixed(2)
    const jupiterDiff = +(earthDiff/11.86).toFixed(2)

    return [{earth:earthDiff},{mercury:mercuryDiff},{venus:venusDiff},{mars:marsDiff}, {jupiter:jupiterDiff}]
  }

  yearsTillBday(bday) {
    const earthDiff = bday-this.earth
    const mercuryDiff = +(earthDiff/.24).toFixed(2)
    const venusDiff = +(earthDiff/.62).toFixed(2)
    const marsDiff = +(earthDiff/1.88).toFixed(2)

    return [{earth:earthDiff},{mercury:mercuryDiff},{venus:venusDiff},{mars:marsDiff}]
  }
}