import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service";

// Prueba calculatorService, por lo que se tiene entonces que mokear todas sus dependencias.
describe('CalculatorService', () => {
  let loggerSpy : any,
  calculator : CalculatorService;
  // xdescribe for disable test suit
  // xit disable a single test
  // fdescribe = focus, put attention in this test suit
  // fit = focus on only a test
  beforeEach(()=> {
    loggerSpy = jasmine.createSpyObj('LoggerService', ['log']);
    calculator = new CalculatorService(loggerSpy);
  })
  it('should add two numbers', () => {

    // spyOn(logger, 'log');
    // logger.log.and.returnValue();  
    const result = calculator.add(2,2);
    expect(result).toBe(4);
    expect(loggerSpy.log).toHaveBeenCalledTimes(1);
  });

  it('should subtract two numbers', () => {
    const result = calculator.subtract(2,2);
    expect(result).toBe(0, "unexpected subtraction result");
    expect(loggerSpy.log).toHaveBeenCalledTimes(1);
  });
});