  <div v-for="(a,i) in list" :key="i">
   <img :src="a.image" class="room-img">
   <h4 @click="open=true; cnt=i">{{a.title}}</h4>
   <h4>{{a.price}}원</h4>
  </div>
  
  <!-- 뷰에서 for은 v-for="?? in ?? " :key="i"
  <!--     가 기본값이다 자바의 for each문과 비슷하다  자바에서 for(int i:array)로 표현된것은
  <!--     vue에서 v-for="(a,i) in array" key="i"로 표현이 가능하다 a는 array[i]번째의 수를 의미하며, i는 카운트를 의미한다
