import CustomTable from './index.vue'

export default CustomTable

if(typeof window !== 'undefined' && window.Vue) {
	window.Vue.component('vue-simple-custom-table', CustomTable)
}