const sumAll = function(start, end) {


    let finalSumResult = 0
    if (start>end) {
        for(let i=start; i>= end; i--) {
            finalSumResult = finalSumResult + i;
          }
      
    } if (start<0||end<0) {return "ERROR";

    } if (!Number. isInteger(start)||!Number. isInteger(end)){return "ERROR";
    } else {
    for(let i=start; i<= end; i++) {
      finalSumResult = finalSumResult + i;
    }
    
    };
   
    return finalSumResult;
};

// Do not edit below this line
module.exports = sumAll;
