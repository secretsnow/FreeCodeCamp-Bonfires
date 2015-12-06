function mutation(arr) {
  first = arr[0].toLowerCase();
  second = arr[1].toLowerCase();
  for (var i = 0; i<second.length;i++){
    
    //if the element doesn't exist then -1 is returned
    if (first.indexOf(second[i])<0){
      return false;
    }else{
      continue;
    }
  }
  return true;
}

mutation(["hello", "hey"]);
