// Katas I made

// Get average
function getAverage(marks) {
  //TODO : calculate the downwar rounded average of the marks array
  let sum = 0;
  for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
  }
  let average = sum / marks.length;
  return Math.floor(average);
}

getAverage([1, 2, 3, 4, 5]);
// 3

// Get the biggest number first
function superSize(num) {
  return parseInt(
    num
      .toString()
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );
}

superSize(414);
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

check(["what", "a", "great", "kata"], "kat");
// false);

//A Strange Trip to the Market

function isLockNessMonster(s) {
  //FIND THE LOCH NESS MONSTER. SAVE YOUR TREE FIDDY
  if (s.includes("tree fiddy")) {
    return "Run it is Nessie!";
  }
  if (s.includes("3.50")) {
    return "Run it is Nessie!";
  }
  if (s.includes("three fifty")) {
    return "Run it is Nessie!";
  } else {
    return false;
  }
}

isLockNessMonster(
  "Your girlscout cookies are ready to ship. Your total comes to three fifty"
);
!isLockNessMonster(
  "Yo, I heard you were on the lookout for Nessie. Let me know if you need assistance."
);

//Over The Road
function overTheRoad(address, n) {
  return 2 * n + 1 - address;
}

//The falling speed of petals
//When it's spring Japanese cherries blossom, it's called "sakura" and it's admired a lot. The petals start to fall in late April.
//Write a function that receives the speed (in cm/s) of a petal as input, and returns the time it takes for that petal to reach the ground from the same branch.
function sakuraFall(v) {
  if (v <= 0) {
    return 0;
  } else {
    return (5 * 80) / v;
  }
}

//Friend or Foe?
//Make a program that filters a list of strings and returns a list with only your friends name in it.
function friend(friends) {
  const result = friends.filter((friend) => friend.length == 4);
  return result;
}

friend(["Ryan", "Kieran", "Mark"]);
//["Ryan", "Mark"]

//All Star Code Challenge #22
//Create a function called toTime() that takes an integer argument of seconds and converts the value into a string describing how many hours and minutes comprise that many seconds.
function toTime(seconds) {
  let hours = Math.floor(seconds / 3600);
  let minutes = Math.floor((seconds % 3600) / 60);
  return hours + " hour(s) and " + minutes + " minute(s)";
}

//Responsible Drinking
//Codewars Bar recommends you drink 1 glass of water per standard drink so you're not hungover tomorrow morning.
function hydrate(s) {
  result = 0;
  s = s.match(/\d/g);
  s.map((x) => (result += parseInt(x)));
  if (result <= 1) {
    return result + " glass of water";
  } else {
    return result + " glasses of water";
  }
}

hydrate("2 glasses of wine and 1 shot");
//"3 glasses of water");

//heggeleggleggo
//Egg Talk.
//Insert an "egg" after each consonant. If there are no consonants, there will be no eggs. Argument will consist of a string with only alphabetic characters and possibly some spaces.
function heggeleggleggo(word) {
  vowel = ["a", "e", "i", "o", "u", " ", "A", "E", "I", "O", "U"];
  result = "";
  for (i = 0; i < word.length; i++) {
    if (!vowel.includes(word[i])) {
      result += word[i] + "egg";
    } else {
      result += word[i];
    }
  }
  return result;
}

heggeleggleggo("hello world");
//"heggeleggleggo"

//Hells Kitchen
//Gordon Ramsay shouts. He shouts and swears. There may be something wrong with him.

function gordon(a) {
  return a
    .replace(/a/gi, "@")
    .replace(/[eiou]/gi, "*")
    .toUpperCase()
    .split(" ")
    .map((element) => element + "!!!!")
    .join(" ");
}

gordon("What feck damn cake");
//'WH@T!!!! F*CK!!!! D@MN!!!! C@K*!!!!');

//Holiday V - SeaSick Snorkelling
//Thanks to the effects of El Nino this year my holiday snorkelling trip was akin to being in a washing machine... Not fun at all.
//Given a string made up of '~' and '_' representing waves and calm respectively, your job is to check whether a person would become seasick.
function seaSick(x) {
  let count = 0;
  console.log(x.length);
  for (let i = 0; i < x.length - 1; i++) {
    if (x[i] !== x[i + 1]) {
      // console.log(x[i],x[i+1],x[i+2])
      count += 1;
    }
  }
  console.log(count);
  if ((count / x.length) * 100 > 20) {
    return "Throw Up";
  } else {
    return "No Problem";
  }
}

//Holiday III - Fire on the boat
//Enjoying your holiday, you head out on a scuba diving trip!
//Disaster!! The boat has caught fire!!
//You will be provided a string that lists many boat related items. If any of these items are "Fire" you must spring into action. Change any instance of "Fire" into "~~". Then return the string.
//Go to work!
function fireFight(s) {
  return s.replace(/Fire/g, "~~");
}

//Elevator Distance
//Imagine you start on the 5th floor of a building, then travel down to the 2nd floor, then back up to the 8th floor. You have travelled a total of 3 + 6 = 9 floors of distance.
//1)
function elevatorDistance(array) {
  distance = [];
  for (i = 0; i < array.length - 1; i++) {
    console.log(i);
    distance.push(Math.abs(array[i] - array[i + 1]));
  }
  return distance.reduce((a, b) => a + b);
}
//2)
function elevatorDistance(array) {
  var distance = 0;
  for (var i = 0; i < array.length - 1; i++) {
    distance += Math.abs(array[i] - array[i + 1]);
  }
  return distance;
}

elevatorDistance([5, 2, 8]);
// 9

//Spoonerize Me
//A spoonerism is a spoken phrase in which the first letters of two of the words are swapped around, often with amusing results.

function spoonerize(words) {
  let splitWords = words.split(" ");
  return (
    splitWords[1][0] +
    splitWords[0].slice(1) +
    " " +
    (splitWords[0][0] + splitWords[1].slice(1))
  );
}

spoonerize("nit picking");
//"pit nicking"

//Who is the killer?
//Some people have been killed!
//You have managed to narrow the suspects down to just a few. Luckily, you know every person who those suspects have seen on the day of the murders.

function killer(suspectInfo, dead) {
  for (let suspect in suspectInfo) {
    if (includesDead(suspectInfo[suspect], dead))
      //object[key] object.key
      return suspect;
  }
}
function includesDead(arr1, arr2) {
  let out = true;
  arr2.forEach((el) => {
    if (!arr1.includes(el)) out = false;
  });
  return out;
}

killer(
  {
    James: ["Jacob", "Bill", "Lucas"],
    Johnny: ["David", "Kyle", "Lucas"],
    Peter: ["Lucy", "Kyle"],
  },
  ["Lucas", "Bill"]
);
//'James'

//Most sales
//You work in the best consumer electronics corporation, and your boss wants to find out which three products generate the most revenue.
function top3(products, amounts, prices) {
  // make an object
  // name: product
  // revenue : amounts * prices
  // index: index
  // store objects in variable
  let results = products.map((product, index) => {
    return {
      name: product,
      index: index,
      revenue: amounts[index] * prices[index],
    };
  });
  console.log(results);
  // we sort the array based on the revenue
  let sorted = results.sort((a, b) => {
    return b.revenue - a.revenue || a.index - b.index;
  });
  const orderedList = [];
  for (let product of sorted) {
    orderedList.push(product.name);
  }
  return orderedList.slice(0, 3);
}

//Disemvowel Trolls
//Trolls are attacking your comment section!
//A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
//Your task is to write a function that takes a string and return a new string with all vowels removed.
function disemvowel(str) {
  return str.replace(/[aeiou]/gi, "");
}
disemvowel("This website is for losers LOL!");
//"Ths wbst s fr lsrs LL!")

//Double Trouble
//Given an array of integers (x), and a target (t), you must find out if any two consecutive numbers in the array sum to t. If so, remove the second number.
//add the first integer-value to the second
//compare the sum to the given number
//if they are equal, remove the second integer
//continue comparison
function trouble(x, t) {
  for (let i = 0; i < x.length - 1; i++) {
    console.log(x[i] + x[i + 1]);
    if (x[i] + x[i + 1] === t) {
      x.splice(i + 1, 1);
      i--;
    }
  }
  return x;
}

trouble([4, 1, 1, 1, 4], 2);
//[2, 2]
