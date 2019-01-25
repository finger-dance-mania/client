<template>
  <div class="center mx-5 my-5">
    <div class="row ">
      <div class="col-5"></div>
      <div v-for="arrow in data2" :key="arrow.id" class="col justify-content-start">
        <i :class="arrow.status" v-if="arrow.key == 'up'" class="fa-4x fas fa-arrow-circle-up"></i>
        <i :class="arrow.status" v-if="arrow.key == 'right'" class="fa-4x fas fa-arrow-circle-right"></i>
        <i :class="arrow.status" v-if="arrow.key == 'down'" class="fa-4x fas fa-arrow-circle-down"></i>
        <i :class="arrow.status" v-if="arrow.key == 'left'" class="fa-4x fas fa-arrow-circle-left"></i>
      </div>
    </div>
    <br>
    <br>
    <div class="row">
      <input
        class="m-auto"
        style="width: 50px; height:50px;border-radius:5px;
      -moz-border-radius:5px;
      -webkit-border-radius:5px;"
        @keyup.40="key('down')"
        @keyup.38="key('up')"
        @keyup.37="key('left')"
        @keyup.39="key('right')"
      >
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import db from '../config.js'

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      type: "",
      data: [],
      data2: [],
    }
  },
  methods: {
    key(input) {
      this.type = input
      this.add()
    },
    add(){
      if (this.data.length > 0) {
        if (this.type !== this.data[0].key) {
          // let audi = new Audio('http://soundbible.com/grab.php?id=1127&type=mp3')
          let audi = new Audio('http://soundbible.com/grab.php?id=1642&type=mp3')
          audi.play()
          this.data[0].status = 'fail'
        } else {
          this.type = ''
          this.data.shift();
          this.data[0].status = 'success'
          console.log(this.$route.params.id)
          this.$store.dispatch('pluspoint', this.$route.params.id)
        }
      } else {
        this.$store.dispatch('deleteRoom', this.$route.params.id)
      }
    },
    play () {
      let audi = new Audio('http://soundbible.com/grab.php?id=1127&type=mp3')
      audi.play()
    },
    
  },
  created () {
    this.$store.dispatch('getArrows')
    this.$store.dispatch('watchData', this.$route.params.id)
  }, 
  computed: mapState ([
    'arrowList', 'statusRoom','point1', "point2", "player1", "player2"
  ]),
  watch : {
    arrowList (val) {
      this.data = val[Math.floor(Math.random()* val.length)].map((e, i) => {
        if (i == 0) {
          return {key: e, status: 'success'}
        } else {
          return {key: e, status:''}
        }
      })
    },
    data () {
      if (this.data.length > 5) {
        this.data2 = this.data.slice(0, 4)
      } else {
        this.data2 = this.data
      }
    },
    point1(val){
      console.log('watch')
      if(val >= 120){
        swal({
          title: `${this.player1} WIN!`,
          text: "Good Job!",
          icon: "success",
          button: "Aww yiss!"
        })
          .then((newgame) => {
            if (newgame) {
              this.$store.dispatch('deleteRoom', this.$route.params.id)
              this.$router.push('/')
            }
          });
      }
    },
    point2(val){
      console.log('watch')
      if(val >= 120){
        swal({
          title: `${this.player2} WIN!`,
          text: "Good Job!",
          icon: "success",
          button: "Aww yiss!"
        })
          .then((newgame) => {
            if (newgame) {
              this.$store.dispatch('deleteRoom', this.$route.params.id)
              this.$router.push('/')
            }
          });
      }
    }
  }
}
</script>
<style>
  .success {
    text-shadow: 1px 1px 2px black, 0 0 25px greenyellow, 0 0 5px black;
  }
  .fail {
    text-shadow: 1px 1px 2px black, 0 0 25px red, 0 0 5px black;
  }
</style>
