const getters = {
  token: state => state.user.token,
  sidebar: state => state.drawer.sidebar,
  name: state => state.user.name,
  username: state => state.user.username,
  menus: state => state.user.menus
}
export default getters
