import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Nav from '@/components/Nav.vue';
import Layout from '@/components/Layout.vue';
import Icon from '@/components/Icon.vue';
import tagsListModel from '@/models/tagsListModel';

Vue.config.productionTip = false;

Vue.component('Nav', Nav);
Vue.component('Layout', Layout);
Vue.component('Icon', Icon);

window.tagList = tagsListModel.fetch();
window.createTag = (name:string) => {
    const message = tagsListModel.create(name);  //知识点2 ，最小知识原则
    if (message === 'duplicated') {
      window.alert('标签重复');
    } else if (message === 'success') {
      window.alert('添加成功');
    }
};

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
