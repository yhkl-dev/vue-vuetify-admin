<template>
  <v-breadcrumbs :items="levelList">
    <template v-slot:item="props">
      <v-breadcrumbs-item>
        {{ props.item.meta.title }}
      </v-breadcrumbs-item>
    </template>
  </v-breadcrumbs>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'BreadCrumb',
  computed: {
    ...mapGetters([
      'menus'
    ])
  },
  data () {
    return {
      levelList: null,
      items: [
        {
          text: 'Dashboard',
          disabled: false,
          href: 'breadcrumbs_dashboard'
        },
        {
          text: 'Link 1',
          disabled: false,
          href: 'breadcrumbs_link_1'
        },
        {
          text: 'Link 2',
          disabled: true,
          href: 'breadcrumbs_link_2'
        }
      ]
    }
  },
  watch: {
    $route () {
      this.getBreadcrumb()
    }
  },
  methods: {
    getBreadcrumb () {
      let matched = this.$route.matched.filter(item => item.name)
      const first = matched[0]
      if (first && first.name !== '首页') {
        matched = [{path: '/', meta: { title: '首页' }}].concat(matched)
      }
      this.levelList = matched
    }
  },
  created () {
    this.getBreadcrumb()
  }
}
</script>

<style scoped>

</style>
