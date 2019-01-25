<template>
  <div class="hello container center">
<<<<<<< HEAD
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
    
=======
    <div>
      <form @submit.prevent="createRoom">
        <input type="text" v-model="roomname" id="roomName">
        <button> Create Room </button>
      </form>
    </div>

    <div>
      <b-card v-for="room in listrooms" :key="room.id">
        <div>
          <p>RoomName: {{room.name}}</p>
          <p><b>List Player: </b></p>
          <p>Player1: {{room.player1}}</p>
          <p>Player2: {{room.player2}}</p>
        </div>
        <button @click="joinRoom(room.id)">Enter Room</button>
      </b-card>
    </div>

    <div class="row">
      <div v-for="arrow in data2" :key="arrow.id">
        <i v-if="arrow == 'up'" class="fa-4x fas fa-arrow-circle-up"></i>
        <i v-if="arrow == 'right'" class="fa-4x fas fa-arrow-circle-right"></i>
        <i v-if="arrow == 'down'" class="fa-4x fas fa-arrow-circle-down"></i>
        <i v-if="arrow == 'left'" class="fa-4x fas fa-arrow-circle-left"></i>
      </div>
    </div>
    <br>
    <br>
    <div class="row">
      <input
        @keyup.38="key('up')"
        @keyup.37="key('left')"
        @keyup.39="key('right')"
        @keyup.40="key('down')"
      >
>>>>>>> tes logic
    </div>
  </div>
  
</template>

<script>
import {mapState} from 'vuex'

export default {
<<<<<<< HEAD
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
=======
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      roomname: '',
      type: "",
      data: ["up","down","right","left","up","down","right","left","up","down","right","left", "up","down","right","left","up","up","down","right","down","right","left","up","down","right","left","down","right","right","left","up","down","right","left"],
      data2: []
    };
  },
  methods: {
    key(input) {
      console.log(input);
      this.type = input
      this.add()
    },
    add(){
      if (this.data.length > 0) {
        if (this.type !== this.data[0]) {
          console.log("salah",this.type+"!=="+this.data[0])
          this.type = ''
        } else {
          console.log('benarrrr')
          this.data.shift();
          this.type = ''
        }
      } else {
        this.statusPlaying = false;
      }
    },
    createRoom(){
      this.$store.dispatch('createRoom', this.roomname)
    },
    joinRoom(roomId){
      console.log(roomId)
      this.$store.dispatch('joinRoom', roomId)
    }
  },
  watch:{
    data(){
      if(this.data.length > 5){
        this.data2 = this.data.slice(0,5)
      } else {
        this.data2 = this.data
      }
    }
  },
  computed: mapState([
    'listrooms'
  ]),
  created(){
    this.data2 = this.data.slice(0,5)
    console.log(this.data2)
    this.$store.dispatch('getAllRoom')
>>>>>>> tes logic
  }
};
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

<<<<<<< HEAD
.center{
=======
.center {
>>>>>>> tes logic
  max-width: 500px;
  margin: auto;
  background: white;
  padding: 10px;
}
<<<<<<< HEAD
</style>
=======
</style>
>>>>>>> tes logic
