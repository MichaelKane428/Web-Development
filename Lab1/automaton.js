function rules(left, middle, right) {
	//activate.
	if(left==1 && middle==1 && right==1 || left==1 && middle==0 && right==1 || left==1 && middle==0 && right==0 || left==0 && middle==1 && right==0 || left==0 && middle==0 && right==1) {
		return activity(1)
	}
	else if(left==1 && middle==1 && right==0 || left==0 && middle==1 && right==1 || left==0 && middle==0 && right==0) {
		return activity(0)
	}
}

function activity(num) {
	//inactive
	if(num == 0) {
		document.write("<div style='background-color: black; height: 8px; width: 8px; padding: 1px; margin: 1px; border: 1px solid black; float: left;'></div>");
	}
	//active
	else if(num == 1){
		document.write("<div style='background-color: red;height: 8px; width: 8px; padding: 1px; margin: 1px; border: 1px solid black; float: left;'></div>");
	}
	return num;
}

function automaton(){
	var parentRow = [];
	var childRow = [];
	var randomNumber;
	
	for(i = 0; i < 50; i++) {
		for(j = 0; j < 101; j++) {
			//Generate the first row to enforce rules on child rows.
			if(i == 0){
				randomNumber = Math.round(Math.random());
				childRow = childRow+activity(randomNumber);
			}
			//generate the next 49 rows based on the rules below.
			else{
				//check if its the first cell.
				if(j == 0){
					childRow[j] = activity(parentRow[parentRow.length-1]);
				}
				//cehck if last cell.
				else if(j == 100){
					childRow[j] = activity(parentRow[0]);
				}
				else{
					childRow[j] = rules(parentRow[j-1],parentRow[j],parentRow[j+1])
				}
				
			}
		}
		parentRow = childRow;
		childRow = [];
	}
}

automaton();