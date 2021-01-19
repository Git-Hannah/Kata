// Katas I made 

// Get average
function getAverage(marks){
    //TODO : calculate the downwar rounded average of the marks array
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
      sum += marks[i];
  
    }
    let average = sum / marks.length;
    return Math.floor(average);
  }
  
  
  getAverage([1,2,3,4,5,])
    // 3);