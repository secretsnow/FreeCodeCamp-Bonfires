function largestOfFour(arr) {
  // You can do this!
  answer = [];
  //select each sub array first
  for (var i = 0; i<arr.length;i++){
    subarraymax = 0;
    subarray = arr[i];
    //selects element from subarray, gets the max from the subarray and assign it to subarraymax
    for(var k = 0; k<subarray.length; k++){
      if (subarray[k]>subarraymax){
        subarraymax = subarray[k];
        
      }
    }
    
    //append subarraymax to answer
    answer.push(subarraymax);
  }
  return answer;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
