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


// Count the smiley faces!



//Over The Road
function overTheRoad(address, n){
  return 2 * n + 1 - address  
}

//The falling speed of petals
//When it's spring Japanese cherries blossom, it's called "sakura" and it's admired a lot. The petals start to fall in late April.
//Write a function that receives the speed (in cm/s) of a petal as input, and returns the time it takes for that petal to reach the ground from the same branch.
function sakuraFall(v) {
  if (v <= 0){
    return 0 
  }
else {return 5*80/v
     }
}

//Friend or Foe?
//Make a program that filters a list of strings and returns a list with only your friends name in it.
function friend(friends){
  const result = friends.filter(friend => friend.length == 4);
  return result
}

friend(["Ryan", "Kieran", "Mark"])
//["Ryan", "Mark"]


