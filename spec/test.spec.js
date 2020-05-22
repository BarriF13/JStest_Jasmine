// describe = grouping test together
// describe ('name of the test', function that will call back inside the describe block )
//1--when we run the test function executed 
//2-- it block is the test ('it should be able to add two numbers together', function())

class Calculator {
  add(a, b) {
    return a + b;
  }

  minus (a, b){
    return a - b;
  }
}

describe('calculate addition', function(){
  var calculate = new Calculator();

  it ('Should be able to add two numbers together', function(){
    // console.log('I was able to add two numbers together')
    console.log(calculate.add(1,3));
  });
  it ('Should be able to add two numbers together', function(){
    // console.log('I was able to add three numbers together')
    console.log(calculate.minus(5,4));
  });
  // describe('calculate addition with minus numbers', function() {
  //   it ('should be able to add -2 and -2 ', function(){
  //     console.log('Just added two minus number together')
  //   });
  // })


});