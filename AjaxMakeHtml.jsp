<script>
function fnMinhoListAjax() {
    $.ajax({
        type     : 'POST' ,
	async 	 : false,
        url      : '/minhoList.do',
	data     : {},
        dataType : 'json',s
        success  : function (data) {
			   console.log("나실행쓰");
        	           var html = '';
        	               
        	                html += '			<div>';
        	                html += '				<div >';
        	                html += '					<div class>';						   
        	                html += '						<p> 제목:'+ data.detailView.title + '</p>';
        	                html += '						<span> 내용:'+ data.detailView.content + '</span>';
				html += '			    		</div>';
				html += '		    		</div>';
				html += '	    		</div>';   	                


        	                document.getElementById('my-element').innerHTML = html;
        },error  : function(XMLHttpRequest, textStatus, errorThrown){
            alert('처리중 오류가 발생 하였습니다. 잠시 후 다시 시도 해주십시오.\n' +'errorCode : ' + textStatus );
        }
    });
}
</script>
<body>
	<h3 id="my-element" ></h3>
</body>
