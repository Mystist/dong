<template>
  <div class="weui-tabbar">
    <router-link to="service" class="weui-tabbar__item" active-class="weui-bar__item_on" exact >
      <i class="fa fa-home weui-tabbar__icon" aria-hidden="true"></i>
      <p class="weui-tabbar__label">生活服务</p>
    </router-link>
    <router-link to="neighbor" class="weui-tabbar__item" active-class="weui-bar__item_on" exact >
      <i class="fa fa-comments-o weui-tabbar__icon" aria-hidden="true"></i>
      <p class="weui-tabbar__label">邻居</p>
    </router-link>
    <router-link to="me" class="weui-tabbar__item" active-class="weui-bar__item_on" exact >
      <i class="fa fa-user-o weui-tabbar__icon" aria-hidden="true"></i>
      <p class="weui-tabbar__label">我</p>
    </router-link>
  </div>
</template>
