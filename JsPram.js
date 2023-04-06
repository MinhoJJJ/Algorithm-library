// jsp에서 mtml부분의 데이터를 쓰고 싶다면 
var minho = $('#minho').val(); 

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
