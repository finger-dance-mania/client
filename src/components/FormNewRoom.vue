<template>
  <div class="container">
    <div class="row">
      <div class="col mt-3">
        <b-form class="m-auto" inline @submit.prevent="createRoom">
          <label class="sr-only" for="inlineFormInputName2">Room Name</label>
          <b-input class="mb-2 mr-sm-2 mb-sm-0" v-model="title" placeholder="Room Name" />
          <label class="sr-only" for="inlineFormInputGroupUsername2">Username</label>
          <b-button style="background-color: black; border-color: black;" type="submit">Create</b-button>
        </b-form>
      </div>
      <div class="col mt-3 text-right">
        <b-button style="background-color: black; border-color: black;" type="button" @click="logOut">Logout</b-button>
      </div>
    </div>
  </div>
</template>

<script>
import db from '../config.js'
import { mapState } from 'vuex'
export default {
  name: 'FormNewRoom',
  data () {
    return {
      title: '',
      statusRoom: false,
      player1: localStorage.getItem('username'),
      point1: 0,
      ready1: true,
      player2: null,
      point2: 0,
      ready2: false
    }
  },
  computed: mapState([
    'room', 'roomId'
  ]),
  watch: {
    roomId: function (val) {
      this.$router.push(`/room/${val}`)
    }
  },
  methods: {
    createRoom: function () {
      console.log(this, 'ini this pas create rrom')
      this.$store.dispatch('createRoomAct', {...this})
      // this.$router.replace(`/room/${roomId}`)
    },
    logOut () {
      this.$store.dispatch('logout')
    }
  }
}
</script>

<style>

</style>
