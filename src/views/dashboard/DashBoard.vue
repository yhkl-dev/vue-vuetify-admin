<template>
  <div>
    <v-btn small @click="showSnackBar">get</v-btn>
  </div>
</template>

<script>
export default {
  name: 'DashBoard',
  data () {
    return {
      color: null,
      colors: [
        'purple',
        'info',
        'success',
        'warning',
        'error'
      ],
      top: true,
      bottom: false,
      left: false,
      right: false,
      snackbar: false
    }
  },
  methods: {
    showSnackBar () {
      this.$store.dispatch('setShow', {color: 'indigo', text: 'text'})
    }
  }
}
</script>

<style scoped>

</style>
