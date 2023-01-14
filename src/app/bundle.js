import Vue from 'vue';
import VueRouter from 'vue-router';
import VueMaterial from 'vue-material';
import Vuelidate from 'vuelidate';
import ElementUI from 'element-ui';

import 'vue-material/dist/vue-material.min.css';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/en';


/*
black-green-dark
black-green-light
default-dark
default
 */
import 'vue-material/dist/theme/default.css'; // This line here
import routes from './routes/sidebar';

// configure router
const router = new VueRouter({
    routes, // short for routes: routes
    linkExactActiveClass: "nav-item active"
});

Vue.use(VueRouter);
Vue.use(VueMaterial);
Vue.use(Vuelidate);
Vue.use(ElementUI, { locale })
import App from './components/App.vue';

new Vue({
    el: '#app',
    render: h => h (App),
    router
});