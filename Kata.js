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

//All Star Code Challenge #22
//Create a function called toTime() that takes an integer argument of seconds and converts the value into a string describing how many hours and minutes comprise that many seconds.
function toTime(seconds) {
  let hours = Math.floor(seconds / 3600);
  let minutes = Math.floor(seconds % 3600 /60)
  return hours + ' hour(s) and ' + minutes + ' minute(s)'

}

//Responsible Drinking
//Codewars Bar recommends you drink 1 glass of water per standard drink so you're not hungover tomorrow morning.
function hydrate(s) {
  result = 0;
  s = s.match(/\d/g);
  s.map(x => result += parseInt(x));
  if (result <= 1){
    return result+ ' glass of water'
  }else {
  return result+ ' glasses of water'
}
}

hydrate("2 glasses of wine and 1 shot")
//"3 glasses of water");

//heggeleggleggo
//Egg Talk.
//Insert an "egg" after each consonant. If there are no consonants, there will be no eggs. Argument will consist of a string with only alphabetic characters and possibly some spaces.
function heggeleggleggo(word){
  vowel = ['a', 'e', 'i', 'o', 'u',' ','A','E','I','O','U']
  result = ''
  for (i=0;i<word.length;i++){
    if (!vowel.includes(word[i])){
      result += word[i] + 'egg';
    } else {
      result += word[i]
  }
}
   return result
}

heggeleggleggo("hello world")
//"heggeleggleggo"


//Hells Kitchen
//Gordon Ramsay shouts. He shouts and swears. There may be something wrong with him.

function gordon(a){
 
  return a.replace(/a/ig, '@')
    .replace(/[eiou]/ig, '*')
    .toUpperCase()
    .split(' ')
    .map(element => element + '!!!!')
    .join(' ')
}

gordon('What feck damn cake')
//'WH@T!!!! F*CK!!!! D@MN!!!! C@K*!!!!');

