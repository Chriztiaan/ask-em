import Vue from 'vue';
import App from './App.vue';
import '@mdi/font/css/materialdesignicons.css';

import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
Vue.config.productionTip = false;
Vue.use(Vuetify);

new Vue({
	vuetify: new Vuetify({
		icons: {
			iconfont: 'mdi' // default - only for display purposes
		}
	}),
	render: (h): any => h(App)
}).$mount('#app');
