function range(start, end) {
  if ( start >= end) {
    return [];
  }
  
  let arr = [];

  for ( let i=start; i<end; i=i+1) {
    arr.push(i)
  }

  return arr
}

range(0, 4); // => [0, 1, 2, 3]
range(2, 7); // => [2, 3, 4, 5, 6]
range(10, 10); // => []
range(10, 2); // => []