// 1. jsp 내부에서 for each문

<td class="sample" colspan="3">
	<c:forEach var="sampleList" items="${sampleList}" varStatus="loop"> //varStatus 변수는 사용자가 지정한 이름으로 설정할 수 있습니다.
		<c:if test="${!loop.last}">
			${fn:substring(sampleList,14,18)},
		</c:if>
		<c:if test="${loop.last}">
			${fn:substring(sampleList,14,18)}
		</c:if>
	</c:forEach>
</td>

// 2. forEach Select문에 넣는 경우
<select id="minho" name="minho" class="selMinho">
	<option value="">전체</option>
	<c:forEach var="minhoCode" items="${minhoCode}" varStatus="status"> //varStatus 변수는 사용자가 지정한 이름으로 설정할 수 있습니다.
	<option value="${minhoCode.codeVal}">${minhoCode.codeNm}</option>
	</c:forEach>
</select>

// 3. List<HashMap<String, Object>> list 속성일 경우 for 반복문   어려운 이유: HashMap속성의 List를 반복문으로 사용해야함
for(HashMap<String, Object> Data:list){}
// 해당 LIST에서 인덱스를 넣고 싶을때
HashMap<String, Object> nextData = list.get(cnt+1);
// 해당 FOR문에서 List i번째가가 Data로 바뀌고 그 Data를 가지고 for반복문을 돌리고 싶을때
for(String key : Data.keySet()){};

// 이늄 Enum
<c:choose>
	<c:when test="${minho eq '21'}">
		<tag:enum codeGrp="minho1" />
	</c:when>
	<c:when test="${minho eq '22'}">
		<tag:enum codeGrp="minho2" />
	</c:when>
	<c:when test="${minho eq '23'}">
		<tag:enum codeGrp="minho3" />
	</c:when>
	<c:otherwise>
		<tag:enum codeGrp="minho4" />
	</c:otherwise>
</c:choose>
//tag:enum은 JSP 커스텀 태그일 가능성이 높습니다. JSP 커스텀 태그는 개발자가 자신의 태그를 정의하여 JSP 페이지에서 사용할 수 있도록 해주는 기능입니다.

$('.Minho').each(function() {}); // Html에서 Minho 클래스의 갯수만큼 반복문을 돌린다.
