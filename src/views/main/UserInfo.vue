
<template>
    <!-- 登录信息Begin-->
    <li class="nav-header">
        <div class="dropdown profile-element">
            <span>
                <img alt="" class="img-circle" src="../../static/Content/HplusImage/profile_small.png"
                    style="height: 64px;width: 64px;" />
                <a class="img-circle btn btn-primary" @click="leftMenu()"
                    style="float: right;margin-top:-25px; margin-right:-5px; width: 40px; height: 40px; font-family: cursive; font-weight: bold; padding-top: 9px;">
                    &lt;&lt; </a>
            </span>
            <a data-toggle="dropdown" class="dropdown-toggle" href="#">
                <span class="clear">
                    <span class="block m-t-xs"><strong class="font-bold">{{ username }}</strong></span>
                    <span class="text-muted text-xs block">{{ rolename }}<b class="caret"></b></span>
                </span>
            </a>
            <ul class="dropdown-menu animated fadeInRight m-t-xs">
                <li>
                    <!-- <a class="J_menuItem" href="@Url.Action(" UpdatePwd","SystemUser")" id="linkUpdatePwd">修改密码</a> -->
                </li>
                <li>
                    <a href="/login" @click="quit()">安全退出</a>
                </li>
            </ul>
        </div>
        <div class="logo-element" title="展开菜单" @click="leftMenu()">
            >>
        </div>
    </li>
    <!-- 登录信息End-->
</template>

<script>
import Cookies from 'js-cookie';
export default {
    name: 'UserInfo',
    data() {
        return {
            username: JSON.parse(Cookies.get('UserInfo'))['username'],
            rolename: JSON.parse(Cookies.get('UserInfo'))['roleName'],
        };
    },
    methods: {
        leftMenu() {
            var collapseMenu = document.getElementById('collapsemenu');
            collapseMenu.checked = !collapseMenu.checked;
            var body = document.body;
            if (collapseMenu.checked) {
                body.classList.add('mini-navbar');
                this.SmoothlyMenu();
            } else {
                body.classList.remove('mini-navbar');
                this.SmoothlyMenu();
            }
            document.body.offsetWidth;
        },
        SmoothlyMenu() {
            var body = document.body;
            var sideMenu = document.getElementById('side-menu');
            if (!body.classList.contains('mini-navbar')) {
                sideMenu.style.display = 'none';
                setTimeout(function () {
                    sideMenu.style.display = 'block';
                }, 100);
            } else if (body.classList.contains('fixed-sidebar')) {
                sideMenu.style.display = 'none';
                setTimeout(function () {
                    sideMenu.style.display = 'block';
                }, 300);
            } else {
                sideMenu.removeAttribute('style');
            }
        },
        quit() {
            Cookies.remove('Authorization');
            Cookies.remove('UserInfo');
            this.$router.push('/login');
        }
    }
};
</script>