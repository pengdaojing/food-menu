<template>
<div class="side-right">
  <div class="recommend">
    <h1>本周最佳菜品</h1>
    <ul>
      <li v-for="(f, i) in bestFood" :key="f.dishId">
        <span class="serial-number">{{i+1}}</span>{{f.dishName}}
        <span class="number">{{f.evaluation}}</span>
      </li>
    </ul>
  </div>
</div>
</template>

<script src="./side-right.js"></script>
<style src="./side-right.less" scoped lang="less"></style>
