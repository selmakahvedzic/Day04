function main(numOne, numTwo){

    var myQuotient=0.00;

    myQuotient = numOne / numTwo;
    return myQuotient;
  }
  
  console.log(main(5 ,2.0));
  console.log(main(16.5,5.5));
  console.log(main(102.0,25.5));
  module.exports = main;