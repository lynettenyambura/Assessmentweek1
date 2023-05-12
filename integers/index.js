function checkInteger(num1, num2) {
    if (num1 === 8 || num2 === 8) {
      return true;
    }
  
    if (num1 + num2 === 8 || Math.abs(num1 - num2) === 8) {
      return true;
    }
  
    return false;
  }
  
  
  console.log(checkInteger(3, 5));   
  console.log(checkInteger(8, 2));   
  console.log(checkInteger(12, 4));  
  console.log(checkInteger(10, 2));  
  console.log(checkInteger(15, 7)); 
  