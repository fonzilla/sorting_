function merge(arr1, arr2){
	var leftIndex= 0; 
	var rightIndex= 0; 
	var newArr= [];
	while(newArr.length != arr1.length+arr2.length){
	
		if(arr1[leftIndex]<arr2[rightIndex] || rightIndex >= arr2.length){
			newArr.push(arr1[leftIndex]); 
			leftIndex++; 
		}
		else{
			newArr.push(arr2[rightIndex] || leftIndex >= arr1.length); 
			rightIndex++; 
		}
		
	}
	return newArr; 
	
}
var split = function (arr){
	
	if (arr.length < 2)
		 return arr;
	
	var middle = Math.floor(arr.length/2)
	var left = arr.slice(0,middle);
	var right = arr.slice(middle);
	
	return	[left,right]
}


function mergeSort(arr){

	if (arr.length < 2){
		return arr
	}
	
	var leftArr= mergeSort(split(arr)[0]);
	var rightArr= mergeSort(split(arr)[1]);
	return sortedArr= merge(leftArr,rightArr); 
	
	
}

