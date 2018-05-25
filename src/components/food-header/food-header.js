export default {
  name: 'food-header',
  data () {
    return {
      isHome: true
    }
  },
  created () {
    this.hideUploadBtn()
  },
  methods: {
    // 跳转到今日菜单
    uploadMenu () {
      this.$router.push({path: '/upload-menu'})
    },
    // 跳转到首页
    toHome () {
      this.$router.push({path: '/home'})
    },
    // 隐藏上传按钮
    hideUploadBtn () {
      const path = this.$route.path
      this.isHome = path.indexOf('home') !== -1
    }
  }
}
