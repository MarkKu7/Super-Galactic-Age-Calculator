  
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
    let days = this.currentAge * 365;
    let mercuryAge = Math.round(days / 88)
      return mercuryAge;
  }
  venusDays() {
    let days = this.currentAge * 365;
    let venusAge = Math.round(days/226)
    return venusAge;
  }
  marsDays() {
    let days = this.currentAge * 365;
    let marsAge = Math.round(days/686)
    return marsAge;
  }
  jupiterDays() {
    let days = this.currentAge * 365;
    let jupiterAge = Math.round(days/4329)
    return jupiterAge;
  }
}