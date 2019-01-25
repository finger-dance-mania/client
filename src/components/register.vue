<style>
.card-img {
    width: 100%;
    border-radius: calc(0.25rem - 1px);
    height: 260px;
}
</style>

<template>
    <div class="container">
     <b-card overlay
        img-src="https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/BBmc1w7Iiq35z51n/videoblocks-abstract-dark-background-honeycomb-grid-with-lighting-effect-for-technology_hsh9u2w5g_thumbnail-full01.png"
        img-alt="Card Image"
        text-variant="white"
        title="Welcome"
        style="max-width: 70%; max-height: 100px;"
        class="mt-5 mx-auto"
    >
    <p class="card-text m-auto">
        <b-form @submit.prevent="register">
            <b-form-group label="Your Name:" class="mt-3">
                <b-form-input class="mt-2 mx-auto" style="max-width: 300px;" type="text" v-model="name" required placeholder="Enter your name">
                </b-form-input>
            </b-form-group>
            <b-button class="mt-3" type="submit" variant="light">Submit</b-button>
        </b-form>
    </p>
  </b-card>

    </div>
</template>

<script>
export default {
    methods: {
        register () {
            this.$store.dispatch('register', this.name)
        }
    },
    data () {
        return {
            name: ''
        }
    }
}
</script>

<style>

</style>
