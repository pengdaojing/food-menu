<template>
  <header class="header">
    <div>
      <div class="container">
        <a class="title" @click="toHome">欣和点餐系统</a>
        <div class="btn-group">
          <div class="upload-area" v-show="isHome">
            <button class="upload-btn btn" @click="uploadMenu">上传菜品</button>
            <!--<div class="card-wrapper-top">-->
            <!--<div class="card-cont">-->
            <!--<div class="arrow"></div>-->
            <!--<ul class="push-btn-group">-->
            <!--<li>上传餐品</li>-->
            <!--<li>推荐餐品</li>-->
            <!--</ul>-->
            <!--</div>-->
            <!--</div>-->
          </div>
          <div class="user-btn">
            <span class="before-login btn">推荐菜品</span>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script src="./food-header.js"></script>
<style src="./food-header.less" lang="less"></style>
