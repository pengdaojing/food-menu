import App from '../App'
const home = r => require.ensure([], () => r(require('../components/home/home.vue')), 'home')
const breakfast = r => require.ensure([], () => r(require('../components/BreakFast')), 'breakfast')
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
      path: 'breakfast',
      component: breakfast
    }
  ]
}]
