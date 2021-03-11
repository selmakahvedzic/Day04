function main(){
   
    var myDecimal = 8 + (1/5);
    var myDecimalE = 2.4e-3;

    return {
        myDecimal,
        myDecimalE
    };
}

console.log(main());
module.exports = main;