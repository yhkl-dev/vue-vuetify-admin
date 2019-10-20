<template>
  <v-navigation-drawer v-model="drawer" app>
    <v-list dense>
      <v-subheader>YHKL</v-subheader>
      <v-list-item-group
        v-model="item"
        color="primary"
      >
        <v-list-item
          v-for="(item, i) in routes"
          :key="i"
        >
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.label"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>

<!--      <v-list-item >-->
<!--        <v-list-item-action>-->
<!--          <v-icon>mdi-home</v-icon>-->
<!--        </v-list-item-action>-->
<!--        <v-list-item-content>-->
<!--          <v-list-item-title>Home</v-list-item-title>-->
<!--        </v-list-item-content>-->
<!--      </v-list-item>-->
<!--      <v-list-item >-->
<!--        <v-list-item-action>-->
<!--          <v-icon>mdi-contact-mail</v-icon>-->
<!--        </v-list-item-action>-->
<!--        <v-list-item-content>-->
<!--          <v-list-item-title>Contact</v-list-item-title>-->
<!--        </v-list-item-content>-->
<!--      </v-list-item>-->

  </v-navigation-drawer>

</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'NavigatorBar',
  data () {
    return {
      item: 0
    }
  },
  props: {
    drawer: Boolean
  },
  computed: {
    ...mapGetters({
      routes: 'menus'
    }),
    onRouters () {
      const array = this.$route.path.split('/')
      if (array[3]) {
        return '/' + array[1] + '/' + array[2]
      }
      return this.$route.path
    },
    list () {
      const list = []
      this.routes.map(v => {
        if (!v.meta.hidden) {
          list.push(v)
        }
      })
      console.log(this.$store.getters)
      return list
    }
  }
}
</script>

<style scoped>

</style>
