export default {
  name: 'food-header',
  data () {
    return {
      isUpload: true,
      isRecommend: true
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
      this.isUpload = path.indexOf('upload-menu') !== -1
      this.isRecommend = path.indexOf('recommend') !== -1
    },
    toRecommend () {
      this.$router.push({path: '/recommend'})
    }
  }
}
