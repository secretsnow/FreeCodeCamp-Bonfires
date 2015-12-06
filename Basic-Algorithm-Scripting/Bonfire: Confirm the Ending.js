function end(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  
  findlen = target.length;
  return str.substr(-findlen) === target;
  
}

end("Bastian", "n");
