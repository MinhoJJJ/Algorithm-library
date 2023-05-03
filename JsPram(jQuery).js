// jsp에서 mtml부분의 데이터를 쓰고 싶다면 
var minho = $('#minho').val(); 

$(".hi")               // jQuery 라이브러리에서 제공하는 함수 중 하나로 html단에서 class="hi"인 것을 찾아줍니다.
$('div')               // jQuery 라이브러리에서 제공하는 함수 중 하나로 html단 모든 div요소를 찾습니다.
$('ul li')             // <ul> 요소 아래에 있는 모든 <li> 요소를 선택합니다.
$('h1 + p')            // <h1> 요소 다음에 오는 첫 번째 <p> 요소를 선택합니다.
$('[name="my-input"]') // name="my-input"인 모든 요소를 선택합니다.
${param}               // Model 객체에서 param이라는 이름으로 저장된 변수의 값을 출력합니다.
$('#list #hello').val("Y"); //해당 코드는 id가 "list"인 요소 안에 있는 id가 "hello"인 요소의 값을 "Y"로 설정하는 코드

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%> : JSTL 태그라이브러리에서 core 태그 라이브러리를
의미하며 core 태그를 사용할때 c를 붙여서 사용하도록 하는 것입니다.

<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %> : JSTL 태그라이브러리에서 fn 태그 라이브러리를
의미하며 fn 태그를 사용할때 fn를 붙여서 사용하도록 하는 것입니다.

<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>: JSTL 태그라이브러리에서 fmt 태그 라이브러리를
의미하며 fmt 태그를 사용할때 fmt를 붙여서 사용하도록 하는 것입니다. fmt는 보통 다국어 처리, 날짜/시간 형식 지정등과 관련된 기능을 제공합니다.

$(".min").eq(ru).val(""); // min이라는 클래스 이름을 가진 요소에서 ru번째 인덱스의 값을 ""으로 한다.


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
