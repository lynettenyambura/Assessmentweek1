function createNewArray(arr) {
    
    if (arr.length >= 1) {
      
      let newArray = [arr[0], arr[arr.length - 1]];
      return newArray;
    } else {
      
      return [];
    }
  }
  
  
  let originalArray = [1, 2, 3, 4, 5];
  let newArray = createNewArray(originalArray);
  console.log(newArray); 
  