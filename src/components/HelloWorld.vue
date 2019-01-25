<template>
  <div class="hello container center">
    <div class="row">
      <i class="fa-4x fas fa-arrow-circle-up"></i>
      <i class="fa-4x fas fa-arrow-circle-right"></i>
      <i class="fa-4x fas fa-arrow-circle-down"></i>
      <i class="fa-4x fas fa-arrow-circle-left"></i>
    </div>
    <br><br>
    <div class="row">
      <b-form @submit.prevent="add">
          <input v-model="type" @keyup.40="clear('down')" @keyup.38="clear('up')" @keyup.37="clear('left')" @keyup.39="clear('right')">
       <b-button variant="primary" type="submit">Create</b-button>
      </b-form>
    
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return {
      input: [
        ['up', 'down', 'right', 'left'],
        ['up', 'down', 'right', 'left'],
        ['up', 'down', 'right', 'left'],
        ['up', 'down', 'right', 'left'],
        ['up', 'down', 'right', 'left'],
        ['up', 'down', 'right', 'left'],
        ['up', 'down', 'right', 'left'],
        ['up', 'down', 'right', 'left']
      ],


      type: '',
    }
  },
  methods: {
    clear(input){
      this.type = input
      console.log(input)
    },
    add(){
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.center{
  max-width: 500px;
  margin: auto;
  background: white;
  padding: 10px;
}
</style>