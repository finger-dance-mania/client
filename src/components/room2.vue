<template>
  <div class="bg-dark text-white" style="height: 100vh">
    <b-row>
      <div class="col text-left ml-3">
        <h4 class="mt-3">{{ player1 }}:</h4>
        <b-progress :value="point1" class="w-50 mt-2" style="height: 30px"></b-progress>
      </div>
      <div class="col text-right mr-5">
        <h4 class="mt-3">{{ player2 }}:</h4>
        <b-progress :value="point2" class="w-50 mt-2 float-right" style="height: 30px"></b-progress>
      </div>
    </b-row>
    <b-row>
      <b-col>
        <img
          class="mt-2"
          src="http://mrwgifs.com/wp-content/uploads/2014/11/HQ-Carlton-Dance-With-a-Transparent-Background-Gif-From-The-Fresh-Prince-Of-Bel-Air.gif"
          alt="dancing"
          style="width: 10%; height:50%"
        >
        <test/>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import test from "./test.vue";
import { mapState } from "vuex";
export default {
  name: "room",
  components: {
    test
  },
  data() {
    return {
      value1: 0,
      value2: 0
    };
  },
  computed: mapState(["player1", "player2", "point1", "point2"])
};
</script>

<style>
</style>
