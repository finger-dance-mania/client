<template>
  <b-container>
    <b-row>
      <b-col sm="12" md="12" lg="12">
        <div>
          <b-form inline @submit.prevent="createRoom">
            <label class="sr-only" for="inlineFormInputName2">Room Name</label>
            <b-input class="mb-2 mr-sm-2 mb-sm-0" v-model="title" placeholder="Room Name" />
            <label class="sr-only" for="inlineFormInputGroupUsername2">Username</label>
            <b-button variant="primary" type="submit">Create</b-button>
          </b-form>
        </div>
      </b-col>
    </b-row>
  </b-container>
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
      this.$store.dispatch('createRoomAct', {...this})
      // this.$router.replace(`/room/${roomId}`)
    }
  }
}
</script>

<style>

</style>
