const getters = {
  token: state => state.user.token,
  sidebar: state => state.drawer.sidebar,
  snackbar: state => state.snackbar.show,
  snackBarColor: state => state.snackbar.color,
  snackBarText: state => state.snackbar.text,
  name: state => state.user.name,
  username: state => state.user.username,
  menus: state => state.user.menus
}
export default getters
