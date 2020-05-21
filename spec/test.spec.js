describe('hello world', function(){
  it ('hello test', function(){

  });
});
// describe = grouping test together
// describe ('name of the test', function that will call back inside the describe block )
//1--when we run the test function executed 
//2-- it block is the test ('it should be able to add two numbers together', function())

describe('calculate addition', function(){
  it ('Should be able to add two numbers together', function(){
    console.log('I was able to add two numbers together')
  });
  it ('Should be able to add two numbers together', function(){
    console.log('I was able to add three numbers together')
  });
  describe('calculate addition with minus numbers', function() {
    it ('should be able to add -2 and -2 ', function(){
      console.log('Just added two minus number together')
    });
  })


});