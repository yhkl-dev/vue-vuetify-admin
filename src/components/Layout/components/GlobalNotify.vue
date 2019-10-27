<template>
  <v-snackbar
    v-model="snackbar"
    top
    dark
    :color="snackBarColor">
    <v-icon
      color="white"
      class="mr-3">
      mdi-bell-plus
    </v-icon>
    <div>{{ snackBarText }}</div>
    <v-icon
      dark size="16"
      @click="handleClose">mdi-close-circle</v-icon>
  </v-snackbar>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Notification',
  computed: {
    ...mapGetters([
      'snackbar',
      'snackBarColor',
      'snackBarText'
    ])
  },
  methods: {
    handleClose () {
      this.$store.dispatch('setShow')
    }
  }
}
</script>

<style scoped>

</style>
