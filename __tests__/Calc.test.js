import NewAge from '../src/js/Calc.js';

describe('NewAge', () => {

  let newAge;

  beforeEach(() => {
    newAge = new NewAge(10, 41, 16, 5, 1)
  });

test('should create a GalacticAge object', () => {
    expect(newAge.currentAge).toEqual(10);
    expect(newAge.mercuryAge).toEqual(41);
    expect(newAge.venusAge).toEqual(16);
    expect(newAge.marsAge).toEqual(5);
    expect(newAge.jupiterAge).toEqual(1);
  });

  test('should calculate number of days old', () => {
    expect(newAge.totalDays()).toEqual(3650);
  });

  test('should divide number of days old by 88 to determine age on Mercury', () => {
    expect(newAge.mercuryDays()).toEqual(41);
  });
  test('should divide number of Earth days old by 226 to determine age on venus', () => {
    expect(newAge.venusDays()).toEqual(16);
  });

test('should divide number of Earth days old by 686 to determine age on mars', () => {
    expect(newAge.marsDays()).toEqual(5);
  });

test('should divide Earth Age (years) by 4329 to determine age on jupiter', () => {
    expect(newAge.jupiterDays()).toEqual(1);
  });
});