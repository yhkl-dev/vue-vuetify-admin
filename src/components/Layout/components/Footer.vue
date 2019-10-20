<template>
  <v-footer
    :color="color"
    app>
    <span class="footerClass">&copy; 2019@yhkl</span>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    color: {
      type: String,
      default: 'indigo'
    }
  }
}
</script>

<style scoped>
  .footerClass {
    text-align: center;
    color: black;
    align-content: center;
  }
</style>
