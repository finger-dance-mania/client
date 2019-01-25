<template>
  <div class="home">
    <FormRoom></FormRoom>
    <Lobby></Lobby>
    <!-- <HelloWorld></HelloWorld> -->
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Lobby from '@/components/Lobby.vue'
import FormRoom from '@/components/FormNewRoom.vue'
import Room from '@/components/Room.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    Lobby,
    FormRoom,
    Room
  }
}
</script>
