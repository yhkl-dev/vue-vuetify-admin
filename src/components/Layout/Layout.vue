<template>
  <v-app>
    <notification></notification>
    <navigator-bar :drawer="drawer" />
    <app-bar
      :color="color"
      @handleShowNaviBar="handleShowNaviBar">
    </app-bar>
    <v-content class="mx-4 mb-4">
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <Footer :color="color" ></Footer>
  </v-app>
</template>

<script>
import Footer from './components/Footer'
import NavigatorBar from './components/NavigatorBar'
import AppBar from './components/AppBar'
import AppMain from './components/AppMain'
import Notification from './components/GlobalNotify'

export default {
  name: 'Layout',
  components: {
    Footer, NavigatorBar, AppBar, AppMain, Notification
  },
  data () {
    return {
      drawer: null,
      color: 'white'
    }
  },
  methods: {
    handleShowNaviBar (val) {
      this.drawer = val
      console.log('val', val)
    }
  }
}
</script>

<style scoped>

</style>
