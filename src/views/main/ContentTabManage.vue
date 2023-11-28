
<template>
  <a-tabs v-model:activeKey="activeKey" hide-add type="editable-card" @edit="onEdit">
    <template #leftExtra>
      <a-button @click="moveLeft">左移</a-button>
    </template>
    <a-tab-pane v-for="pane in panes" :key="pane.key" :tab="pane.title" :closable="pane.closable">
      <component :is="pane.component" />
    </a-tab-pane>
    <template #rightExtra>
      <a-button>右移</a-button>
      <a-dropdown-button>
        关闭操作
        <template #overlay>
          <a-menu>
            <a-menu-item key="1" @click="locateCurrentTab">
              定位当前选项卡
            </a-menu-item>
            <a-menu-item key="2" @click="closeAllTabs">
              关闭全部选项卡
            </a-menu-item>
            <a-menu-item key="3" @click="closeOtherTab">
              关闭其他选项卡
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown-button>
      <a-button @click="quit">退出</a-button>
    </template>
  </a-tabs>
</template>

<script>
import Cookies from 'js-cookie';
import { ref, shallowRef } from 'vue';
import UpdatePwd from '../systemUser/UpdatePwd.vue';
export default {
  name: 'ContentTabManage',
  data() {
    return {
      activeKey: ref('1'),
      panes: ref([]),
      newTabIndex: ref(3),
    };
  },
  methods: {
    quit() {
      Cookies.remove('Authorization');
      Cookies.remove('UserInfo');
      this.$router.push('/login');
    }, moveLeft() {
      console.log('moveLeft');
    },
    locateCurrentTab() {
      console.log('locateCurrentTab');
    },
    closeAllTabs() {
      console.log('closeAllTabs');
    },
    closeOtherTab() {
      console.log('closeOtherTab');
    },
    addPage(name, path) {
      console.log(`addPage:${name}|${path}`);
      this.newTabIndex++;
      this.panes.push({ title: name, component: shallowRef(UpdatePwd), key: this.newTabIndex });
      this.activeKey = this.newTabIndex;
    },
    remove(targetKey) {
      let lastIndex = 0;
      this.panes.forEach((pane, i) => {
        if (pane.key === targetKey) {
          lastIndex = i - 1;
        }
      });
      this.panes = this.panes.filter(pane => pane.key !== targetKey);
      if (this.panes.length && this.activeKey === targetKey) {
        if (lastIndex >= 0) {
          this.activeKey = this.panes[lastIndex].key;
        } else {
          this.activeKey = this.panes[0].key;
        }
      }
    },
    onEdit(targetKey, action) {
      if (action === 'add') {
        this.add();
      } else {
        this.remove(targetKey);
      }
    }
  }
};
</script>