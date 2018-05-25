import App from '../App'
const home = r => require.ensure([], () => r(require('../components/home/home.vue')), 'home')
const uploadMenu = r => require.ensure([], () => r(require('../components/upload-menu/upload-menu.vue')), 'uploadMenu')
export default [{
  path: '/',
  component: App,
  children: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: 'home',
      component: home
    },
    {
      path: 'upload-menu',
      component: uploadMenu
    }
  ]
}]
