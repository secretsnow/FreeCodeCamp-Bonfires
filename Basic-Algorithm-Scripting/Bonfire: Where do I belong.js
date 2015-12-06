function where(arr, num) {
  // Find my place in this sorted array.
  
  arr.sort(function(a, b){return a-b;});

  for (var i = 0; i<arr.length - 1; i++){
    index1 = i;
    index2 = i+1;

    if (arr[index1]< num && num < arr[index2]){
      return index2;
    }
    else if (arr[index1] === num){
        return index1;
    }
    
    else if (num<arr[index1]){
        return index1;
    }
    else if (num>arr[arr.length-1]){
        return arr.length;
    }
  }
}

where([2, 5, 10], 15);
