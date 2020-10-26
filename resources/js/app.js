require('./bootstrap');

window.Vue = require('vue');
Vue.component('hello-dev',require('./components/HelloDev.vue').default)
new Vue({
	el:"#app"
})	