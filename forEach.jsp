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
//forEach Select문에 넣는 경우
<select id="minho" name="minho" class="selMinho">
	<option value="">전체</option>
	<c:forEach var="minhoCode" items="${minhoCode}" varStatus="status">
	<option value="${minhoCode.codeVal}">${minhoCode.codeNm}</option>
	</c:forEach>
</select>



