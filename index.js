// add solution here
function theBeatlesPlay(musicians, instruments){
  var play = []

  for (let i = 0; i<musicians.length; i++ ){
    play.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return play;
}

function johnLennonFacts(facts){
  var x = 0;
  var newfacts=[];
  while (x<facts.length){
    newfacts[x] = facts[x] + "!!!"
    x++
  }
  return newfacts;
}


function iLoveTheBeatles(num){
  var array = [];
  var x = 1

  do {
    array.push("I love the Beatles!")
  } while (x++ <= num && num < 15);
  return array
}
