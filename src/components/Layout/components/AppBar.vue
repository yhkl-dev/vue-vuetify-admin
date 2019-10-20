<template>
  <v-app-bar
    app
    :color="color"
    >
    <v-app-bar-nav-icon @click.stop="handleClick(drawer)"></v-app-bar-nav-icon>
    <v-toolbar-title>Application</v-toolbar-title>
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppBar',
  props: {
    color: {
      type: String,
      default: 'indigo'
    },
    drawer: {
      type: Boolean
    }
  },
  methods: {
    handleClick (drawer) {
      // drawer = !drawer;
      this.$emit('handleShowNaviBar', !drawer)
    }
  }
}
</script>

<style scoped>

</style>
