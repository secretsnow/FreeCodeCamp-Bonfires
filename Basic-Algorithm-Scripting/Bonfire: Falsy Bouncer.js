function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  
  function trueonly(value){
    if ((value === false || value === null || value === 0 || value === "" || value !== value || value === undefined)){
      return false;
    }else{
    return true;
  }
  
}
  return arr.filter(trueonly);
}

bouncer([false, null, 0, NaN, undefined, ""]);
