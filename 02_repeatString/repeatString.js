const repeatString = function(inputWord, repeatTimes) {
    // inputWord = ""
    // repeatTimes = num

    let heyResult = ""
    if (repeatTimes<0) {return "ERROR";}
    for( let i=0;i<repeatTimes; i++) {
      heyResult = heyResult + inputWord;
    }

    return heyResult;

};

// Do not edit below this line
module.exports = repeatString;
