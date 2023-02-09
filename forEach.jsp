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
