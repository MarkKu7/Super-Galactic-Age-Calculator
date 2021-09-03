  
export default class NewAge {
  constructor(currentAge, mercuryAge, venusAge, marsAge, jupiterAge) {
    this.currentAge = currentAge;
    this.mercuryAge = mercuryAge;
    this.venusAge = venusAge;
    this.marsAge = marsAge;
    this.jupiterAge = jupiterAge;
  }

  totalDays() {
    let days = this.currentAge * 365;
    return days
  }

  mercuryDays() {
    let mercuryAge = Math.round(this.currentAge/ .24)
      return mercuryAge;
  }
  venusDays() {
    let venusAge = Math.round(this.currentAge/ .62)
    return venusAge;
  }
  marsDays() {
    let marsAge = Math.round(this.currentAge/ 1.88)
    return marsAge;
  }
  jupiterDays() {
    let jupiterAge = Math.round(this.currentAge/ 11.86)
    return jupiterAge;
  }
  //googled average life on Earth to be 72.6-> round to 73
  lifeExpected() {
    let averageLife = 73;
    let expectedLife = Math.round(averageLife - this.currentAge);
    if (expectedLife <0) {
      return expectedLife;
    } else {
      return ("you have not reached your expected age of death!")
    }
  }
  planetAge(){
    
  }
}