function isPalindrome(str){
  let palindrome = true;
  str = str.toLowerCase().replaceAll(' ', '');
  
  for(let i = 0; i < str.length; i++) {
      if(str[i] !== str[str.length - 1 - i]) {
          palindrome = false;
      }
  }
  if(palindrome){
      return true;
  }else{
      return false;
  }
}

console.log(isPalindrome());


function arrayMaxMin(arr){
  let maximumValue = arr[0];
  let minimumValue = arr[0];
  
  for(let i = 1; i < arr.length; i++){
      if(arr[i] > maximumValue){
          maximumValue = arr[i];
      }else if((arr[i] < minimumValue)){
          minimumValue = arr[i];
      }
  }
  let total = [minimumValue, maximumValue]
  return total;
}

console.log(arrayMaxMin());
