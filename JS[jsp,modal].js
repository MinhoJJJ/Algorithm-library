('[id^=MINHO]')= ID속성값이 MINHO로 끝나는 것들 
$('#MINHO'+1)  = ID속성값이 MINHO1인 요소를 선택하게함


//nextAll
<div class="container">
  <div class="item-1"></div>
  <div class="item-2"></div>
  <div class="item-3">Input 1: <input type="text" value="Value 1"></div>
  <div class="item-3">Input 2: <input type="text" value="Value 2"></div>
  <div class="item-4"></div>
</div>

var input1Label = $('.item-3').parent('.container').prev().text(); // "Input 1: "    // input 1을 출력하는 방법 1

$('.item-2').nextAll(); // 선택된 요소 다음에 나오는 모든 형제 요소를 선택

$('.item-2').nextAll('div.item-3'); // .item-3 클래스를 가진 요소만 선택합니다.  
//결과 
 <div class="item-3" id="minho">Input 1: <input type="text" value="Value 1"></div>
 <div class="item-3">Input 2: <input type="text" value="Value 2"></div>

// .item2-2의 다음 요소 중에 클래스가 .item-3인 것에서 id의 요소값을 가져오세요.
$('.item-2').nextAll('.item-3').attr('id')

// .item2-2의 다음 요소 중에 아이디가 MINHO인 것의 VALUE값을 가져오세요.
$('.item-2').nextAll('[id^MINHO]').val();		//input, select, textarea와 같은 폼 요소일 경우에만 사용할 수 있습니다


<div id="MINHO_01">첫 번째 DIV</div>
<div id="MINHO_02">두 번째 DIV</div>
<div id="SUNHO_01">세 번째 DIV</div>
<div id="SUNHO_02">네 번째 DIV</div>


<div class="number>
    <div class="first">첫 번째</div>
    <div class="second">두 번째</div>
    <div class="third">세 번째</div>
    <div class="fourth">네 번째</div>  
    <div class="fifth">다섯 번째</div>
</div>                  
$(".first").nextAll().css("background-color", "yellow");   // nextAll은 .first뿐만 아니라 같은 number요소에 있는 모든 것들을 선택해줍니다.
<div class="modal fade modalEmpty"id="MINHOMODAL" data-backdrop="true" data-keyboard="true"></div>  // 이렇게하면 모달 밖에 클릭하면 모달 나가짐
<div class="modal fade modalEmpty"id="MINHOMODAL" data-backdrop="static" data-keyboard="false"></div>  // 특정 버튼 없으면 모달창 못나감


