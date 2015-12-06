function slasher(arr, howMany) {
  // it doesn't always pay to be first
  //The first element left after chopping off n ele has index n
  return arr.slice(howMany,arr.length);
}

slasher([1, 2, 3], 2);
