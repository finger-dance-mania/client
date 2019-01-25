<template>
<b-container>
  <b-row>
    <b-col sm="12" md="4" lg="4" v-for="(room, i) in rooms" :key="i">
      <b-card class="text-center" footer="Player 0/2">
        {{room.title}}
        <p class="card-text">
          <ul>
            <li>
              {{room.player1}}
            </li>
            <li>
              {{room.player2}}
            </li>
          </ul>
            
         
        </p>
        <p class="card-text" v-if="!room.statusRoom">
            Waiting other player....
        </p>

        <p class="card-text" v-if="room.statusRoom">
            Room Full..
        </p>
        
        <router-link :to="'/room/'+room.id" v-if="!room.statusRoom">
        <b-btn @click.prevent="joinRoom(room.id)">Enter</b-btn>
        </router-link>
      </b-card>
    </b-col>
  </b-row>
</b-container>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Lobby',
  data () {
    return {
      
    }
  },
  watch: {
    rooms: function () {

    }
  },
  computed: mapState([
    'rooms'
  ]),
  mounted () {
    this.getRooms()
  },
  methods: {
    getRooms: function () {
      this.$store.dispatch('getRoomAct')
    },
    joinRoom: function (roomId) {
      
      this.$store.dispatch('joinRoomAct', roomId)
      this.$router.push(`/room/${roomId}`)
    }
  }
}
</script>

<style>

</style>
