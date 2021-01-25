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
    // 3


    // Get the biggest number first
function superSize(num){
  return parseInt(num.toString().split('').sort((a, b) => b - a).join(''));
  }
  
  superSize(414)
  // 441

// Beginner
// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
  function check(a, x) {
    if (a.includes(x)) {
      return true;
    } else {
      return false;
    }
  }
    
  check(['what', 'a', 'great', 'kata'], 'kat')
    // false);

//A Strange Trip to the Market

function isLockNessMonster(s) {
  //FIND THE LOCH NESS MONSTER. SAVE YOUR TREE FIDDY
  if (s.includes('tree fiddy')) {
    return 'Run it is Nessie!';
  }
  if (s.includes('3.50')) {
    return 'Run it is Nessie!'
  }
   if (s.includes('three fifty')) {
    return 'Run it is Nessie!'
  } else {
    return false
  }
}


isLockNessMonster("Your girlscout cookies are ready to ship. Your total comes to three fifty")
!isLockNessMonster("Yo, I heard you were on the lookout for Nessie. Let me know if you need assistance.")
