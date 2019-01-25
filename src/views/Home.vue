<template>
  <div class="home">
    <FormRoom></FormRoom>
    <Lobby></Lobby>
    <router-view></router-view>
    <register />
  </div>
</template>

<script>
// @ is an alias to /src
import Lobby from '@/components/Lobby.vue'
import FormRoom from '@/components/FormNewRoom.vue'
import Room from '@/components/Room.vue'
import register from '@/components/register.vue'

export default {
  name: 'home',
  components: {
    Lobby,
    FormRoom,
    Room,
    register,
  }
}
</script>
