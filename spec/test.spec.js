// description = grouping test together
// description ('name of the test', function that will call back inside the description block )
//1--when we run the test function executed 
//2-- it block is the test ('it should be able to add two numbers together', function())

class Calculator {
  add(a, b) {
    return a + b;
  }

  minus (a, b){
    return a - b;
  }
  description(){
    return 'this is a calculator class';
  }
}

describe('calculate addition', function(){
  var calculate = new Calculator();

  it ('Should be able to add two numbers together', function(){
 
    expect(calculate.add(1,3)).toBe(4);
    expect(calculate.add(1,3)).toEqual(4);
    expect(calculate.add(1,3)).not.toBe(5);
    expect(calculate.add(1,3)).toBeLessThan(5);
  });

  it('Should be able to declare the calculator class', function(){
    expect(calculate).toBeDefined();
    expect(calculate).not.toBeUndefined();
    expect(calculate).not.toBeNull();
  });
  it('should be able to check the description of the class', function() {
    expect(calculate.description()).toMatch('class');
    expect(calculate.description()).toContain('calculator');
  } );

});