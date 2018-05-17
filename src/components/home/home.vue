<template>
  <div class="home">
    <header class="header">
      <div>
        <div class="container">
          <p class="title">欣和点餐系统</p>
          <div class="btn-group">
            <button class="upload-btn">上传菜品</button>
            <div class="user-btn">
              <span class="before-login btn">登录</span>
              <div class="after-login" style="display: none;"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div class="content">
      <div class="container">
        <div class="left-content">
          <div class="today-menu">
            <div class="backdrop"></div>
            <h1 class="title">今日菜单</h1>
            <div class="menu-content">
              <p><i class="iconfont icon-breakfast"></i>早餐：{{todayMenu.breakfast}}</p>
              <p><i class="iconfont icon-lunch"></i>午餐：{{todayMenu.lunch}}</p>
            </div>
          </div>
          <div class="week-menu">
            <h1 class="title">本周菜单</h1>
            <div class="menu-list">
              <!--<div class="backdrop"></div>-->
              <ul>
                <li class="menu-item">
                  <h4 class="menu-header">星期一</h4>
                  <p><i class="iconfont icon-breakfast"></i>
                    <span class="label">早餐：</span>
                    <span class="food">{{todayMenu.breakfast}}</span>
                  </p>
                  <p><i class="iconfont icon-lunch"></i>
                    <span class="label">午餐：</span>
                    <span class="food">{{todayMenu.lunch}}</span>
                  </p>
                </li>
                <li class="menu-item">
                  <h4 class="menu-header">星期二</h4>
                  <p><i class="iconfont icon-breakfast"></i>
                    <span class="label">早餐：</span>
                    <span class="food">{{todayMenu.breakfast}}</span>
                  </p>
                  <p><i class="iconfont icon-lunch"></i>
                    <span class="label">午餐：</span>
                    <span class="food">{{todayMenu.lunch}}</span>
                  </p>
                </li>
                <li class="menu-item">
                  <h4 class="menu-header">星期三</h4>
                  <p><i class="iconfont icon-breakfast"></i>
                    <span class="label">早餐：</span>
                    <span class="food">{{todayMenu.breakfast}}</span>
                  </p>
                  <p><i class="iconfont icon-lunch"></i>
                    <span class="label">午餐：</span>
                    <span class="food">{{todayMenu.lunch}}</span>
                  </p>
                </li>
                <li class="menu-item">
                  <h4 class="menu-header">星期四</h4>
                  <p><i class="iconfont icon-breakfast"></i>
                    <span class="label">早餐：</span>
                    <span class="food">{{todayMenu.breakfast}}</span>
                  </p>
                  <p><i class="iconfont icon-lunch"></i>
                    <span class="label">午餐：</span>
                    <span class="food">{{todayMenu.lunch}}</span>
                  </p>
                </li>
                <li class="menu-item">
                  <h4 class="menu-header">星期五</h4>
                  <p><i class="iconfont icon-breakfast"></i>
                    <span class="label">早餐：</span>
                    <span class="food">{{todayMenu.breakfast}}</span>
                  </p>
                  <p><i class="iconfont icon-lunch"></i>
                    <span class="label">午餐：</span>
                    <span class="food">{{todayMenu.lunch}}</span>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="right-content">
          <side-right></side-right>
        </div>
      </div>
    </div>

  </div>
</template>

<script src="./home.js"></script>
<style src="./home.less"></style>
