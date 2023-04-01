// 1. jsp 내부에서 for each문

<td class="sample" colspan="3">
	<c:forEach var="sampleList" items="${sampleList}" varStatus="loop">	
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
	<c:forEach var="minhoCode" items="${minhoCode}" varStatus="status">
	<option value="${minhoCode.codeVal}">${minhoCode.codeNm}</option>
	</c:forEach>
</select>

// 3. List<HashMap<String, Object>> list 속성일 경우 for 반복문   어려운 이유: HashMap속성의 List를 반복문으로 사용해야함
for(HashMap<String, Object> Data:list){}
// 해당 LIST에서 인덱스를 넣고 싶을때
HashMap<String, Object> nextData = list.get(cnt+1);
// 해당 FOR문에서 List i번째가가 Data로 바뀌고 그 Data를 가지고 for반복문을 돌리고 싶을때
for(String key : Data.keySet()){};


