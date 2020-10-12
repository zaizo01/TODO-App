import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);
Vue.http.options.root = 'https://todo-7358c.firebaseio.com';

export let bus = new Vue({
  methods: {
   updateCounter(numTodo){
      this.$emit('updateCounter', numTodo)
   } 
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
