// jsp에서 input태그의 value값을 쓰고 싶다면 
var minho = $('#minho').val(); 
$("#wat").val("hello"); // 값 바꾸기
$(".min").eq(ru).val(""); // min이라는 클래스 이름을 가진 요소에서 ru번째 인덱스의 값을 ""으로 한다.


// jsp에서 각종 태그들의 요소값을 쓰고 싶다면
var srcValue = $("img").attr("src");
$("img#myImage").attr("src", "new-image.jpg"); // 값 바꾸기

// jsp에서 text 요소에서 순수 text만을 가져오고 싶다면
$("text").text(); 
$("text").text("New Text");  // 값 바꾸기

<c:set var="message" value="Hello World"/>// 는 message 라는 변수에 "Hello World"라는 값을 할당합니다.



$(".hi")               // jQuery 라이브러리에서 제공하는 함수 중 하나로 html단에서 class="hi"인 것을 찾아줍니다.
$('div')               // jQuery 라이브러리에서 제공하는 함수 중 하나로 html단 모든 div요소를 찾습니다.
$('ul li')             // <ul> 요소 아래에 있는 모든 <li> 요소를 선택합니다.
$('h1 + p')            // <h1> 요소 다음에 오는 첫 번째 <p> 요소를 선택합니다.
$('[name="my-input"]') // name="my-input"인 모든 요소를 선택합니다.
${param}               // Model 객체에서 param이라는 이름으로 저장된 변수의 값을 출력합니다.

<c:set>: 변수를 설정합니다.
<c:if>: 조건문 처리를 수행합니다.
<c:choose>와 <c:when>: 다중 조건문 처리를 수행합니다.
<c:forEach>: 반복문 처리를 수행합니다.
<c:import>: 다른 JSP 페이지를 가져옵니다.
<c:url>: URL을 생성합니다.
<c:redirect>: 페이지를 리다이렉트합니다.

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%> : JSTL 태그라이브러리에서 core 태그 라이브러리를
의미하며 core 태그를 사용할때 c를 붙여서 사용하도록 하는 것입니다.

<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %> : JSTL 태그라이브러리에서 fn 태그 라이브러리를
의미하며 fn 태그를 사용할때 fn를 붙여서 사용하도록 하는 것입니다.

<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>: JSTL 태그라이브러리에서 fmt 태그 라이브러리를
의미하며 fmt 태그를 사용할때 fmt를 붙여서 사용하도록 하는 것입니다. fmt는 보통 다국어 처리, 날짜/시간 형식 지정등과 관련된 기능을 제공합니다.


// 해당값을 get으로 날리고 싶다면
var url = "/minho/com/getMinhoData.do?";
var param = "&Minho=" + minho;

// 이값을 컨트롤러 단에서 확인하고 싶다면
@RequestMapping(value = "/getMinhoData.do")
@ResponseBody
	public String getMinhoData(Model model,HttpServletRequest request) throws Exception {
		String name = request.getParameter("Minho");
		System.err.println(name);
		return 
	}



//1. 속성 설정하기
javascript
Copy code
// 모든 <input> 요소의 disabled 속성을 true로 설정
$('input').prop('disabled', true);

// 특정 요소의 checked 속성을 true로 설정
$('#myCheckbox').prop('checked', true);

// 이미지 요소의 src 속성을 변경
$('img').prop('src', 'new_image.jpg');

// 셀렉트 박스 옵션 선택 못하도록 고정
$("#Tmon option").not(":selected").attr("disabled", true);

