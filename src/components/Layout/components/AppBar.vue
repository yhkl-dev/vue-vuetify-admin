<template>
  <v-app-bar
    app
    flat
    dense
    :color="color">
    <v-app-bar-nav-icon
      @click.stop="toggleSideBar"></v-app-bar-nav-icon>
    <bread-crumb></bread-crumb>
<!--    <v-toolbar-title>Application</v-toolbar-title>-->
    <v-spacer></v-spacer>
    <v-badge
      color="error"
      overlap>
      <template slot="badge">
        <span class="filter_2">2</span>
      </template>
      <v-icon color="grey">mdi-bell</v-icon>
    </v-badge>
    <v-btn text
           @click="Logout"
           small>
      <span>Logout</span>
      <v-icon>exit_to_app</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import BreadCrumb from './BreadCrumb'
import { mapGetters } from 'vuex'
export default {
  name: 'AppBar',
  components: { BreadCrumb },
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
    },
    Logout () {
      this.$store.dispatch('LogOut').then(() => {
        location.reload()
      })
    }
  }
}
</script>

<style scoped>

</style>
