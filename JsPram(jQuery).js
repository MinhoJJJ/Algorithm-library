// jsp에서 mtml부분의 데이터를 쓰고 싶다면 
var minho = $('#minho').val(); 



$(".hi")               // jQuery 라이브러리에서 제공하는 함수 중 하나로 html단에서 class="hi"인 것을 찾아줍니다.
$('div')               // jQuery 라이브러리에서 제공하는 함수 중 하나로 html단 모든 div요소를 찾습니다.
$('ul li')             // <ul> 요소 아래에 있는 모든 <li> 요소를 선택합니다.
$('h1 + p')            // <h1> 요소 다음에 오는 첫 번째 <p> 요소를 선택합니다.
$('[name="my-input"]') // name="my-input"인 모든 요소를 선택합니다.


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
