import NewAge from '../src/js/Calc.js';

describe('NewAge', () => {

  let newAge;

  beforeEach(() => {
    newAge = new NewAge(10, 42, 16, 5, 1)
  });

test('should create a GalacticAge object', () => {
    expect(newAge.currentAge).toEqual(10);
    expect(newAge.mercuryAge).toEqual(42);
    expect(newAge.venusAge).toEqual(16);
    expect(newAge.marsAge).toEqual(5);
    expect(newAge.jupiterAge).toEqual(1);
  });

  test('should calculate number of days old', () => {
    expect(newAge.totalDays()).toEqual(3650);
  });

  test('should divide number of years old by .24 to determine age on Mercury', () => {
    expect(newAge.mercuryDays()).toEqual(42);
  });
  test('should divide number of years old by .62 to determine age on venus', () => {
    expect(newAge.venusDays()).toEqual(16);
  });

test('should divide number of years old by 1.88 to determine age on mars', () => {
    expect(newAge.marsDays()).toEqual(5);
  });

test('should divide number of years by 11.86 to determine age on jupiter', () => {
    expect(newAge.jupiterDays()).toEqual(1);
  });
  
test('should determine if user has reached his/her life expectancy', () => {
    expect(newAge.lifeExpected()).toEqual("you have not reached your expected age of death!");
  });

test('should return your age based on planet in a string', () => {
  expect(newAge.planetAge()).toEqual("You are 42 years old on Mercury.You are 16 years old on Venus.You are 5 years old on Mars.You are 1 years old on Jupiter.")
});
});