<template>
  <div class="home bg-secondary" style="min-height: 100vh">
    <FormRoom v-if="username"></FormRoom>
    <Lobby v-if="username"></Lobby>
    <register v-else/>
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import Lobby from '@/components/Lobby.vue'
import FormRoom from '@/components/FormNewRoom.vue'
// import room from '@/components/room2.vue'
import register from '@/components/register.vue'
import { mapState } from 'vuex'

export default {
  name: 'home',
  data () {
    return {
    }
  },
  components: {
    Lobby,
    FormRoom,
    // room,
    register,
  },
  computed: mapState([
      'username'
  ]),
  created () {
    if (!localStorage.username) {
      this.$store.dispatch('register', null)
    } else {
      this.$store.dispatch('register', localStorage.username)
    }
  }
}
</script>
