function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments);
  //Now, remove the first element so that you're left with the arguments you want to remove
  args.splice(0, 1);
  function remove(value){
    return args.indexOf(value) <0;
  }
  return arr.filter(remove);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
