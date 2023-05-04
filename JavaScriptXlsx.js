<script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.15.5/xlsx.full.min.js"></script>


// 엑셀 파일을 자바스크립트 data로 받는 로직


var modalData=[];                                     // 빈 배열 modalData를 선언합니다.
function FileSelect(e){                               // FileSelect 함수를 정의합니다. 이 함수는 파일 선택 창에서 파일을 선택할 때 발생하는 이벤트(e)를 인자로 받습니다.
	var files = e.target.files;                   // var files = e.target.files; : 파일 선택 창에서 선택한 파일 정보를 files 변수에 할당합니다.
   	var reader = new FileReader();                // FileReader 객체를 생성합니다.
	
   	reader.onload = function () {                 // onload 이벤트 핸들러를 등록합니다. 파일 로드가 완료되면 해당 함수가 실행됩니다.
        let data = reader.result;                     // FileReader 객체에서 읽어온 파일 데이터를 data 변수에 할당합니다.
        let workBook = XLSX.read(data, { type: 'binary' });  //  data 변수에 저장된 파일 데이터를 XLSX.read() 함수를 사용하여 읽어옵니다. 이 때, 파일 형식은 이진(binary) 형식이라고 지정합니다.
        workBook.SheetNames.forEach(function (sheetName) {   // 엑셀 파일에서 읽어온 시트 이름(SheetNames) 목록을 순회하면서 각 시트의 데이터를 읽어옵니다.
            console.log('SheetName: ' + sheetName);
            let rows = XLSX.utils.sheet_to_json(workBook.Sheets[sheetName]);  // XLSX.utils.sheet_to_json() 함수를 사용하여 현재 시트(sheetName)의 데이터를 JSON 형태로 변환한 뒤, rows 변수에 할당합니다.
            modalData=rows;                            // modalData 변수에 현재 시트(sheetName)의 데이터를 할당합니다.
        })
    };
    reader.readAsBinaryString(files[0]);               // FileReader 객체를 사용하여 파일을 읽어옵니다. 이 때, 파일의 첫 번째 인덱스(files[0])를 이용하여 첫 번째 파일을 읽어옵니다.
}


//
