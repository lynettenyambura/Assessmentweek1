function checkInteger(num1, num2) {
    if (num1 === 8 || num2 === 8) {
      return true;
    }
  
    if (num1 + num2 === 8 || Math.floor(num1 - num2) === 8) {
      return true;
    }
  else
    return false;
  }
  
  
  console.log(checkInteger(2, 6));   
  console.log(checkInteger(8, 2));   
  console.log(checkInteger(12, 4));  
  console.log(checkInteger(1, 2));  
  console.log(checkInteger(15, 7)); 
  