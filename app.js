
function multiplyValues(arr){
  
  let array = []
  let newarr =[]
  for(let i=0; i < arr.length; i++){
    array.push(arr[i] * 2);
  }
 newarr=[...array.slice(0, 1),...array]
  return newarr;
  ;
  
}
console.log(multiplyValues([1, 2, 3, 4]))




