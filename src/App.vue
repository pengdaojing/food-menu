<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  @import "assets/font/iconfont.css";
  body,h1,h2,h3,h4,h5,h6,div,section,p,ul,ol,li,span,i,a{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body{
    font-size: 14px;
    color: #333;
    background-color: #fafafa !important;
    font-family: "Microsoft YaHei", Helvetica Neue For Number, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC", "Hiragino Sans GB", "Helvetica Neue", Helvetica, Arial, sans-serif !important;
  }
  ul,ol{
    list-style: none;
  }
  button{
    border: none;
  }
  button:focus{
    outline: none;
  }
  .btn{
    display: inline-block;
    height: 30px;
    line-height: 30px;
    cursor: pointer;
    text-align: center;
    border-radius: 4px;
  }
  .btn:active{
    box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  }
  .container{
    width: 1000px;
    padding: 0 16px;
    margin: 0 auto;
  }
</style>
