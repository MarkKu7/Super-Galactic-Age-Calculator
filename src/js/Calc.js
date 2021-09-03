  
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
   
  }
  marsDays() {
    
  }
  jupiterDays() {
    
  }
}