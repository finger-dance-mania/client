<template>
    <div class="bg-dark text-white" style="height: 100vh">
        <b-row>
            <div class="col text-left ml-3">
                <h4 class="mt-3">My Points:</h4>
                <b-progress :value="value" class="w-50 mt-2" style="height: 30px"></b-progress>
            </div>
            <div class="col text-right mr-5">
                 <h4 class="mt-3">Enemy Points:</h4>
                <b-progress :value="value" class="w-50 mt-2 float-right" style="height: 30px"></b-progress>
            </div>
        </b-row>
        <b-row>
            <b-col>
                <img class="mt-2" src="http://mrwgifs.com/wp-content/uploads/2014/11/HQ-Carlton-Dance-With-a-Transparent-Background-Gif-From-The-Fresh-Prince-Of-Bel-Air.gif" alt="dancing" 
                    style="width: 10%; height:50%"
                >
                <test />
            </b-col>
        </b-row>
    </div>
</template>

<script>

import test from './test.vue'

export default {
    name: 'room',
    components: {
        test
    },
    data () {
        return {
            value: 50
        }
    }
}
</script>

<style>

</style>
