
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
            <div v-html="apiUserInfo"></div>
            <!-- 左侧菜单Begin-->
            <div v-html="apiLeftMenu"></div>
          </ul>
        </div>
      </nav>
      <!--左侧导航End-->
      <!--右侧部分Begin-->
      <div id="page-wrapper" class="gray-bg dashbard-1">
        <!-- 右侧标签导航-->
        <div v-html="apiContentTabManage"></div>
        <div class="row J_mainContent" id="content-main">
          <iframe class="J_iframe" name="iframe0" width="100%" height="100%" src="" frameborder="0"
            data-id="index_v1.html" seamless></iframe>
        </div>
        @await Html.PartialAsync("_Footer")
      </div>
      <!--右侧部分End-->
      <!--右侧边栏-->
      <div v-html="apiRightSidebar"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main'
};
</script>