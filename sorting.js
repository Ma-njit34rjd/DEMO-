 //bubble sort
 //selection sort
 //insertion sort
 //merge sort
 //quick sort



 
 function bubbleSort(arr) {
    const arrayLength = arr.length;
    

    for (let i = 0; i < arrayLength; i++) {
      

        for (let j = 0; j < arrayLength - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                
            }
        }
    }

    return arr;
}

const sortedArray = bubbleSort([120,90,30,45,7,54,78,33]);
console.log("Sorted Array:");
console.log(sortedArray);



//time complexity is O(n2) and space complexity is O(1)




//selection sort

function smallest(arry){
    const n=arry.length;
    
    for (let i=0;i<n;i++){
        let s=i;
        for(let j=i+1;j<n;j++){
            if (arry[j]<arry[s]){
                s=j;
            }
        }
        let temp=arry[s];
        arry[s]=arry[i];
        arry[i]=temp;
    }
}
let arry=[120,60,90,34,8,2,3]
smallest(arry);
console.log(smallest)