[id^=MINHO]   // 아디가 MINHO로 시작하는 것들

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

