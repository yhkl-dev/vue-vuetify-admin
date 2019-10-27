<template>
  <v-navigation-drawer
    mobile-break-point="991"
    v-model="sidebar.opened"
    app>
    <v-list dense>
      <v-list-item>
        <v-list-item-avatar>
          <v-img :src="logo"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <span>
           <h4>
              Vuetify Admin
           </h4>
          </span>
        </v-list-item-content>
      </v-list-item>

      <v-divider/>
      <div v-for="(item, i) in routes"
           :key="i">
        <div v-if="item.children.length === 0">
          <v-list-item  @click="linkToRouter(item.path)" >
<!--          <v-list-item link router :to="item.path">-->
            <v-list-item-icon>
              <i class="material-icons">{{ item.icon }}</i>
            </v-list-item-icon>
            <v-list-item-title>{{ item.label }}</v-list-item-title>
          </v-list-item>
        </div>
        <div v-else>
          <v-list-group
            :value="false"
            no-action>
            <v-icon slot="prependIcon">{{ item.icon }}</v-icon>
            <template v-slot:activator>
              <v-list-item-title>{{ item.label }}</v-list-item-title>
            </template>
            <v-list-item
              v-for="(it, i) in item.children"
              v-if="it.show === true"
              @click="linkToRouter(item.path + it.path)"
              :key="i">
              <v-list-item-title
                v-text="it.label">
              </v-list-item-title>
            </v-list-item>
          </v-list-group>
        </div>
      </div>
    </v-list>
  </v-navigation-drawer>

</template>

<script>
import { mapGetters } from 'vuex'
import avatar from '@/assets/reheRoad.jpg'

export default {
  name: 'NavigatorBar',
  props: {
    drawer: Boolean
  },
  data () {
    return {
      logo: avatar,
      isShow: true
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
      console.log('route', this.$route.path)
      if (this.$route.path !== path) {
        this.$router.push({ path: path })
      }
    }
  }
}
</script>

<style scoped>

</style>
