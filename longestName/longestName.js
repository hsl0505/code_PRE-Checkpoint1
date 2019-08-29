var people = [
  {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26},
  {name: {first: "Ben", last: "Bitdiddle"}, age: 34},
  {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 40},
  {name: {first: "Lem", middle: "E.", last: "Tweakit"}, age: 45},
  {name: {first: "Louis", last: "Reasoner"}, age: 21}
];

function longestName(people) {

  let nameArray = [];

  for ( let i=0; i<people.length; i=i+1) {
    if ( 'middle' in people[i]['name'] ) {
      nameArray[i] = people[i]['name']['first'] + ' ' + people[i]['name']['middle'] + ' ' + people[i]['name']['last']
    }
    else {
      nameArray[i] = people[i]['name']['first'] + ' ' + people[i]['name']['last']
    }
  }

  let deleteSpace = [];
  for ( let i=0; i<nameArray.length; i=i+1) {
    deleteSpace[i] = nameArray[i].split(' ').join('')
  }

  let nameConvertToLength = deleteSpace.map(function (ele) {
    return ele.length
  });

  let result = nameConvertToLength.reduce( function (acc, ele, index) {
    if ( acc < ele) {
      return ele
    }
    else {
      return acc
    }
  }, 0 );
  
  let resultIndex = 0;
  
  for ( let i=0; i<nameConvertToLength.length; i=i+1) {
    if ( result === nameConvertToLength[i].length) {
      resultInex = i;
    }
  }
  
  return nameArray[resultIndex]

}

longestName(people); //"Alyssa P. Hacker"