<template>
  <v-navigation-drawer
    v-model="sidebar.opened" app>

    <v-subheader inset>YHKL</v-subheader>
    <v-list>
      <div v-for="(item, i) in routes"
           :key="i">
        <div v-if="item.children.length === 0">
          <v-list-item link @click="linkToRouter(item.path)">
            <v-list-item-icon>
              <i class="material-icons">{{ item.icon }}</i>
            </v-list-item-icon>
            <v-list-item-title>{{ item.label }}</v-list-item-title>
          </v-list-item>
        </div>
        <div v-else>
          <v-list-group
            v-model="item.show"
            no-action
            value="true">
            <v-icon slot="prependIcon" >{{ item.icon }}</v-icon>
<!--            <v-icon>mdi-home</v-icon>-->
            <template v-slot:activator>
              <v-list-item-title>{{ item.label }}</v-list-item-title>
            </template>
            <v-list-item
              v-for="(it, i) in item.children"
              v-if="it.show === true"
              @click="linkToRouter(item.path)"
              :key="i"
              >
              <v-list-item-title v-text="it.label"></v-list-item-title>
<!--              <v-list-item-icon>-->
<!--                <i class="material-icons">{{ it.icon }}</i>-->
<!--              </v-list-item-icon>-->
            </v-list-item>
          </v-list-group>
        </div>
      </div>
    </v-list>
  </v-navigation-drawer>

</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'NavigatorBar',
  props: {
    drawer: Boolean
  },
  data () {
    return {
      // item: 0
      // active: true
    }
  },
  computed: {
    ...mapGetters({
      sidebar: 'sidebar',
      routes: 'menus'
    })
  },
  methods: {
    linkToRouter (path) {
      if (this.$route.path !== path) {
        this.$router.push({ path: path })
      }
    }
  }
}
</script>

<style scoped>

</style>
