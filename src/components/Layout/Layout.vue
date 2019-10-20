<template>
  <v-app>
    <navigator-bar :drawer="drawer" />
    <app-bar
      :color="color"
      @handleShowNaviBar="handleShowNaviBar"
      :drawer="drawer" >
    </app-bar>
    <v-content>
      <!-- Provides the application the proper gutter -->
      <v-container  fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <Footer :color="color" ></Footer>
  </v-app>
</template>

<script>
// eslint-disable-next-line import/no-duplicates
import Footer from './components/Footer'
// eslint-disable-next-line import/no-duplicates
import NavigatorBar from './components/NavigatorBar'
// eslint-disable-next-line import/no-duplicates
import AppBar from './components/AppBar'
import AppMain from './components/AppMain'

export default {
  name: 'Layout',
  components: {
    Footer, NavigatorBar, AppBar, AppMain
  },
  data () {
    return {
      drawer: true,
      color: 'white'
    }
  },
  methods: {
    handleShowNaviBar (data) {
      this.drawer = data
    }
  }
}
</script>

<style scoped>

</style>
