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
});