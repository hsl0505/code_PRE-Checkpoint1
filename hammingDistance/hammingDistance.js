function hammingDistance(strArr) {
  
  let result = 0;

  for ( let i=0; i<strArr[0].length; i=i+1 ) {
    if ( strArr[0][i] !== strArr[1][i]) {
      result = result +1 ;
    }
  }
  return result
}

hammingDistance(["coder", "codec"]); // => 1
hammingDistance(["10011", "10100"]); // => 3
hammingDistance(["helloworld", "worldhello"]); // => 8
