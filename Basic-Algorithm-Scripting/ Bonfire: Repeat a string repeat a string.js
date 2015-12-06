function repeat(str, num) {
  // repeat after me
  answer = [];
  for (var i = 0; i<num;i++){
    answer.push(str);
    console.log(answer);
  }
  return answer.join("");
}

repeat("abc", 3);
