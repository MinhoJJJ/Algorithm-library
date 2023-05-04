var modalData=[];
// 엑셀 파일을 자바스크립트 data로 받는 로직
function FileSelect(e){
	var files = e.target.files;
    var reader = new FileReader();
	
    reader.onload = function () {
        let data = reader.result;
        let workBook = XLSX.read(data, { type: 'binary' });
        workBook.SheetNames.forEach(function (sheetName) {
            console.log('SheetName: ' + sheetName);
            let rows = XLSX.utils.sheet_to_json(workBook.Sheets[sheetName]);
            modalData=rows;
        })
    };
    reader.readAsBinaryString(files[0]);
}
