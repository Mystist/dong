<template>
  <div>
    <div class="weui-tab__panel">
      <div class="weui-panel weui-panel_access">
        <div class="weui-panel__hd">邻居</div>
        <div class="weui-panel__bd">
          <router-link to="forum" class="weui-media-box weui-media-box_appmsg" exact >
            <div class="weui-media-box__hd">
              <i class="fa fa-commenting-o fa-2x" aria-hidden="true"></i>
            </div>
            <div class="weui-media-box__bd">
              <h4 class="weui-media-box__title">论坛</h4>
              <p class="weui-media-box__desc">晒晒生活，聊聊八卦</p>
            </div>
          </router-link>
          <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
            <div class="weui-media-box__hd">
              <i class="fa fa-handshake-o fa-2x" aria-hidden="true"></i>
            </div>
            <div class="weui-media-box__bd">
              <h4 class="weui-media-box__title">二手市场</h4>
              <p class="weui-media-box__desc">闲置自用，二手转让</p>
            </div>
          </a>
        </div>
      </div>
    </div>
    <app-nav></app-nav>
  </div>
</template>

<script>
import AppNav from './AppNav'

export default {
  components: {
    AppNav
  }
}
</script>
