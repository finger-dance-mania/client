<template>
  <div class="container mt-4">
    <b-card-group columns style="column-count: 3;" class="mt-2 mx-2">
        <div v-for="(room, i) in rooms" :key="i">
            <b-card bg-variant="dark" :header="room.title" text-variant="white" class="text-center" style="cursor:pointer;" >
                <div class="card-text">
                  <h4 class="row align-items-center"> <b-badge class="m-auto" variant="light">{{room.player1}}</b-badge> <p v-if="room.player2"> vs </p> <b-badge v-if="room.player2" variant="light" class="m-auto">{{room.player2}}</b-badge></h4>
                      <p class="card-text" v-if="!room.statusRoom">
                        Waiting for player....
                    </p>
                    <p class="card-text" v-if="room.statusRoom">
                      Room Full..
                  </p>
                  <div class="row">
                    <div class="col">
                    <router-link :to="'/room/'+room.id" v-if="!room.statusRoom">
                    <b-btn style="background-color: black; border-color: black"  @click.prevent="joinRoom(room.id)">Enter</b-btn>
                  </router-link>
                    </div>
                    <!-- <h5><i class="far fa-trash-alt mr-4" style="color: black"></i></h5> -->
                  </div>
                </div>
            </b-card>
        </div>
    </b-card-group>
  </div>
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
