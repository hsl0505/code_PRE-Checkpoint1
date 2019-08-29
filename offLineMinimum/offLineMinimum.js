function offLineMinimum(strArr) {
  
  let result = [];
  
  let numberOfE = 0;

  for ( let i=0; i<strArr.length; i=i+1) {
    if ( strArr[i] === 'E') {
      numberOfE = numberOfE + 1 ;
    }
  }
  
  function fn(strArr) {
    
    let sliceOfArr = [];

    for ( let i=0; i<strArr.length; i=i+1) {
      if ( strArr[i] === 'E') {
        sliceOfArr = strArr.slice(0,i)
        for ( let i=0; i<sliceOfArr.length; i=i+1) {
          sliceOfArr[i] = Number(sliceOfArr[i])
        }
        strArr.splice(i,1)
        break;
      }
    }

    let minValue = Math.min.apply(null, sliceOfArr);
    
    result.push(minValue)

    for ( let i=0; i<strArr.length; i=i+1) {
      if ( String(minValue) === strArr[i]) {
        strArr.splice(i,1)
        break;
      }
    }
  }

  for ( let i=1; i<=numberOfE; i=i+1) {
    
    fn(strArr);

  }
  
  return result.join()
}

offLineMinimum(["1","2","E","E","3"]); // => '1,2'
offLineMinimum(["4","E","1","E","2","E","3","E"]); // => '4,1,2,3'
