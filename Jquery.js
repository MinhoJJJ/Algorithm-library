('[id^=MINHO]')= ID속성값이 MINHO로 끝나는 것들 
$('#MINHO'+1)  = ID속성값이 MINHO1인 요소를 선택하게함


//nextAll
<div class="container">
  <div class="item-1"></div>
  <div class="item-2"></div>
  <div class="item-3"></div>
  <div class="item-4"></div>
</div>

$('.item-2').nextAll(); // 선택된 요소 다음에 나오는 모든 형제 요소를 선택
$('.item-2').nextAll('div.item-3'); // .item-3 클래스를 가진 요소만 선택합니다.


