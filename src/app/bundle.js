import Vue from 'vue';
import VueMaterial from 'vue-material';
import VueRouter from 'vue-router';

import 'vue-material/dist/vue-material.min.css';
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
import App from './components/App.vue';

new Vue({
    el: '#app',
    render: h => h (App),
    router
});