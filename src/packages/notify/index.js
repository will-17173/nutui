import Notify from './_notify';
import NotifyVue from './notify.vue';
import './notify.scss';

const NotifyArr = [Notify, NotifyVue];
NotifyArr.install = function (Vue) {
  Vue.prototype['$notify'] = Notify;
  Vue.component(NotifyVue.name, NotifyVue);
};

export default NotifyArr