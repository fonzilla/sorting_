
function bubbleSort(arr){
	 if(typeof arr==='string'){
	 	if(arr.match(/\]/g)){
	 		arr= JSON.parse(arr);

	 	}
		else if( arr.match(/,/g) ){
		 arr= arr.split(",").map(Number);

		}
	
	}
	
	var hasSwapped= true; 
	var temp= 0; 

	while(hasSwapped){
		hasSwapped= false; 
		for(var i=0; i<arr.length; i++){
			if(i=== arr.length-1 && hasSwapped=== false){
				break;
				
			}
			if(arr[i]>arr[i+1]){
				temp= arr[i];
				arr[i]= arr[i+1];
				arr[i+1]= temp; 
				hasSwapped= true; 
			}
			
		}
		
	}
	return arr; 
	
	
}