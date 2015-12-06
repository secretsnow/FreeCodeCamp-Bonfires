function chunk(arr, size) {
  // Break it up.
  arrlength = arr.length;
  var answer = [];
  for (var i = 0; i<arrlength; i+=size){
    answer.push(arr.slice(i,i+size));
  }
  return answer;
}

chunk(["a", "b", "c", "d"], 2);
