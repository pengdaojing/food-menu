import sideRight from '../side-right/side-right.vue'
export default {
  name: 'home',
  data: function () {
    const obj = {
      todayMenu: {
        breakfast: '小葱拌豆腐',
        lunch: '红烧肉、狮子头'
      }
    }
    return obj
  },
  components: {
    sideRight
  },
  methods: {
    toBreakfast: function () {
      this.$router.push({path: '/breakfast'})
    },
    toCeshi: function () {
      this.$router.push({path: '/ceshi'})
    }
  }
}
