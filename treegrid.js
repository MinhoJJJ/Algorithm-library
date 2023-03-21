// 체크박스 체크시
Grids.OnValueChanged = function(grid,row, col, old_value, new_value){
	var number;                                                      // 번호를 담아줄 변수 

		if (old_value === 1 && (new_value === ""||new_value === 0)){    // 해당 행이 체크상태라면 
			number = row.number;                                 // 해당 행의 ndx값을 가져온다. 
		}else{                                                          // 체크박스 풀었을 경우
		}
}

oneDBIclick
