function countZeroes(arr) {
  
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  
   if(arr[leftIdx] === 0) {
      return arr.length;
   } else if(arr[rightIdx] === 1) {
      return 0;
   }
   
   while(leftIdx <= rightIdx) {
      let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
      let middleVal = arr[middleIdx];

      if(middleVal === 1) {
         leftIdx = middleIdx + 1;
      } else if(middleVal === 0 && arr[middleIdx - 1] === 1) {
         return (arr.length) - middleIdx;
      } else {
         rightIdx = middleIdx - 1;
      }
   }
   return 0;
}

module.exports = countZeroes