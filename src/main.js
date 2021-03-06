// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import YDUI from 'vue-ydui'
import 'vue-ydui/dist/ydui.rem.css'
import Vuex from 'vuex'
import { Confirm, Alert, Toast, Notify, Loading } from 'vue-ydui/dist/lib.rem/dialog';
import creatstore from './store'
// import touch from 'vue-touch'
import $ from 'jquery'
import VuePreview from 'vue-preview'
//vue swiper
import VueAwesomeSwiper from 'vue-awesome-swiper' 

Vue.use(VueAwesomeSwiper, /* { default global options } */)
//vue swiper END

Vue.use(Vuex)

Vue.use(VuePreview)	
Vue.use(VuePreview, {
	mainClass: 'pswp--minimal--dark',
	barsSize: {top: 0, bottom: 0},
	captionEl: false,
	fullscreenEl: false,
	shareEl: false,
	bgOpacity: 0.85,
	tapToClose: true,
	tapToToggleControls: false
  })

var store = creatstore()
Vue.prototype.$dialog = {
	confirm: Confirm,
	alert: Alert,
	toast: Toast,
	notify: Notify,
	loading: Loading,
};
Vue.config.productionTip = false
Vue.use(YDUI);
//Vue.use(axios);

Vue.prototype.$http = axios
Vue.prototype.$http.defaults.baseURL = "http://localhost:3000/"
Vue.prototype.$http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// Vue.use(touch);


/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	
//	components: {
//		App
//	},
//	template: '<App/>'        //vue1.0 

render:x=>x(App)       //vue 2.0


})