
<template>
  <div class="fixed-sidebar full-height-layout gray-bg" style="overflow:hidden">
    <div id="wrapper">
      <!--左侧导航Begin-->
      <nav class="navbar-default navbar-static-side" role="navigation">
        <div class="nav-close">
          <i class="fa fa-times-circle"></i>
        </div>
        <div class="sidebar-collapse">
          <ul class="nav" id="side-menu">
            <!-- 登录信息-->
            <UserInfo :onMenuClick="handleMenuClick"> </UserInfo>
            <!-- 左侧菜单Begin-->
            <LeftMenu> </LeftMenu>
          </ul>
        </div>
      </nav>
      <!--左侧导航End-->
      <!--右侧部分Begin-->
      <div id="page-wrapper" class="gray-bg dashbard-1">
        <!-- 右侧标签导航-->
        <ContentTabManage></ContentTabManage>
        <div class="row J_mainContent" id="content-main">
          <iframe class="J_iframe" name="iframe0" width="100%" height="100%" src="" frameborder="0"
            data-id="index_v1.html" seamless></iframe>
        </div>
        <Footer></Footer>
      </div>
      <!--右侧部分End-->
      <!--右侧边栏-->
      <RightSidebar> </RightSidebar>
    </div>
  </div>
</template>

<script>
import ContentTabManage from './ContentTabManage.vue';
import Footer from './Footer.vue';
import LeftMenu from './LeftMenu.vue';
import RightSidebar from './RightSidebar.vue';
import UserInfo from './UserInfo.vue';
import store from '../../store';
export default {
  name: 'Main',
  components: {
    ContentTabManage,
    Footer,
    LeftMenu,
    RightSidebar,
    UserInfo
  },
  created() {
    document.body.className = "fixed-sidebar full-height-layout gray-bg";
  },
  methods: {
    handleMenuClick(pathname) {
      console.log(`handleMenuClick:${pathname}`);
      //const index = this.parent.layer.load(0, { shade: false }); // 0代表加载的风格，支持0-2
      const iframes = document.querySelectorAll('.J_iframe');
      iframes.forEach(iframe => {
        if (iframe.src.indexOf(pathname) >= 0) {
          iframe.src = pathname;
        }
      });
      //this.closeWave(index);
    },
    closeWave(index) {
      this.$parent.layer.close(index);
    }
  }
};
</script>