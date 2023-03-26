// 다른 css 파일 불러오기
<style>
@import 'style.css';
</style>

// 데이터 바인딩
<Container/>
</template>

<script>

import Container from './components/Container.vue'

export default {
  name: 'App',
  components: {
    Container
  }
}
////  이름 안나오는 오류 해결법   / pakage.json
        "rules": {
          "vue/multi-word-component-names": "off"
    }
