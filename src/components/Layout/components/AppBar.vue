<template>
  <v-app-bar
    app
    dense
    :color="color"
    >
    <v-app-bar-nav-icon
      @click.stop="toggleSideBar"></v-app-bar-nav-icon>
    <v-toolbar-title>Application</v-toolbar-title>
  </v-app-bar>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'AppBar',
  props: {
    color: {
      type: String,
      default: 'indigo'
    }
  },
  data () {
    return {
      myDrawer: this.drawer
    }
  },
  computed: {
    ...mapGetters([
      'sidebar'
    ])
  },
  methods: {
    toggleSideBar () {
      this.$store.dispatch('drawer/toggleSideBar')
    }
  }
}
</script>

<style scoped>

</style>
