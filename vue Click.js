<template>

  <img alt="Vue logo" src="./assets/logo.png">
  <div>
    <button v-on:click="카운트+=1">클릭시 카운트1</button> <span>카운트: {{카운트}}</span><br>
    <button @click="카운트+=1">클릭시 카운트2</button> <span>카운트: {{카운트}}</span><br>
    <button @click="increase">클릭시 카운트3</button> <span>카운트: {{카운트}}</span><br>
    <button @mouseover="카운트+=1">마우스오버시 카운트</button> <span>카운트: {{카운트}}</span>
  </div>

</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      카운트: 0,
    }
  },
  methods : {
      increase(){
         this.카운트++;
      }
  },
  components: {
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
