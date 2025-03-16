const leapYears = function(year) {

    if (!Number. isInteger(year)) {return "ERROR"}
        // let cond1=0;  
        // cond1 = year % 4 
        // let cond2 = 0;    
        //  cond2 = year % 100
        // let cond3 = 0;    
        //  cond3 = year % 400
        
         
         if (year % 4 === 0 && year % 100 !== 0 || year % 4 === 0 && year % 400 === 0) {return true}
         else {return false}
    } 



// Do not edit below this line
module.exports = leapYears;
