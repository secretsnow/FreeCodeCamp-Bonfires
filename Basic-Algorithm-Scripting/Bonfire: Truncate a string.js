function truncate(str, num) {
  // Clear out that junk in your trunk
  
  if (str.length>num){
    
    if (num<=3){
      truncated = str.slice(0,num);
      return truncated + "..." ;
    }else{
      truncated = str.slice(0,num-3);
      return truncated + "...";
    }
  }else{
    return str;
  }
  }
  

truncate("A-tisket a-tasket A green and yellow basket", 11);
